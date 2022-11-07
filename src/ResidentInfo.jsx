import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ url }) => {

    const [resident, setResident] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])

    const isLive =()=>{
        let background = "";
        if(resident.status == "Alive"){
            background = " #00b700";
        } else if (resident.status == "unknown") { 
            background = "grey";
        } else {
            background = "red";
        }
        return background;
    }
   
console.log(isLive);

    console.log(resident)
    return (
        <div className='card'>
            <img src={resident?.image} alt="" />
            <p className='status'>{resident?.status}  </p>
            <div className='circle' style={{background: isLive()}}></div>
            <div className="card-text">
                <h3>{resident?.name}</h3>
                <div className="underline"></div>
                <p className='title'>RAZA:</p>
                <p>{resident?.species}</p>
                <p className='title'>ORIGEN:</p>
                <p>{resident.origin?.name}</p>
                <p className='title'>APARICIÓN EN EPISODIOS:</p>
                <p>{resident.episode?.length}</p>
            </div>
        </div>


    );
};

export default ResidentInfo;