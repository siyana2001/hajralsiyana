import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './noti.css'; 

export default function Notification() {
    return (
        <>
        <div className='noti'>
        <div className=" w-50">
        <h1 className='siyana1'>Notification</h1>
        
        <div className="p-3 mb-2 bg-primary text-white col-12 ">Information Message</div>
        <div className="p-3 mb-2 bg-success text-white col-12">Sucess Message</div>
        <div className="p-3 mb-2 bg-warning text-dark col-12">warning Message</div>
        <div className="p-3 mb-2 bg-danger text-white col-12">Error Message</div>
        </div>
        </div>
        </>
    );
}