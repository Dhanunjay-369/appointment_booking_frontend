import './Bookings.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Bookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/patientRoute/bookings")
            .then(result => {
                const currentUser = result.data.CurrentUser;

                // Fetch bookings for the current user
                axios.post("http://localhost:3001/patientRoute/bookings", { PatientName: currentUser })
                    .then(result => {
                        console.log(result.data);
                        if (Array.isArray(result.data)) {
                            const sortedBookings = result.data.sort((a, b) => new Date(a.BookingDate) - new Date(b.BookingDate));
                            setBookings(sortedBookings);
                        }
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }, []);

    const deleteBooking=(id)=>{
        axios.put("http://localhost:3001/patientRoute/delete/"+id)
        .then(result=>{
            if(result.data==="Success")
                alert("Successfully Cancelled Appointment");
                window.location.reload();
            }
        )
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className="booking-page">
                <div class="booking-list">
                    <h3 style={{textAlign:'center',fontFamily:'fantasy',color:'green'}} class="my-1">Your Bookings</h3>
                {bookings.map((booking, index) => (
                    <div key={index} className="booking-details mx-auto my-2">
                        <div className="patient-name mx-1 my-2">
                            <b>Patient Name:</b>{booking.PatientName}
                        </div>
                        <div className="doctor-slot-detials">
                            <div className="doctor">
                                <div className="doctor-name" style={{ border: 'none' }}>
                                    <b>Doctor Name:</b>{booking.DoctorName}
                                </div>
                                <div className="doctor-qual my-auto" style={{ border: 'none' }}>
                                    <b>Doctor Qualification:</b>{booking.DoctorQualification}
                                </div>
                                <div className="doctor-field" style={{ border: 'none' }}>
                                    <b>Doctor Field:</b>{booking.DoctorField}
                                </div>
                            </div>
                            <div className="date-time mx-1 my-1">
                                <div className="booking-date my-1">
                                    <b>Booking Date:</b>{booking.BookingDate}
                                </div>
                                <div className="booking-time-slot my-1">
                                    <b>Time Slot:</b>{booking.BookingTime}
                                </div>
                                <div className="booking-delete-btn">
                                    <button className='btn btn-danger px-2' onClick={()=>deleteBooking(booking._id)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Bookings;
















// import './Bookings.css';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// function Bookings()
// {
//     const [user,setUser]=useState();
//     const [docName,setDocName]=useState();
//     const [docField,setDocField]=useState();
//     const [docQual,setDocQual]=useState();
//     const [date,setDate]=useState();
//     const [time,setTime]=useState();

//     let temp="";

//     useEffect(()=>{
//         axios.get("http://localhost:3001/bookings")
//         .then(result=>{setUser(result.data.CurrentUser);
//             temp=result.data.CurrentUser;
//         console.log(temp);
//          axios.post("http://localhost:3001/bookings",{PatientName:temp})
//          .then(result=>{console.log(result);
//          setDocName(result.data.DoctorName);
//          setDocQual(result.data.DoctorQualification);
//          setDocField(result.data.DoctorField);
//          setDate(result.data.BookingDate);
//          setTime(result.data.BookingTime);   })
//          .catch(err=>console.log(err))
//          })
//         .catch(err=>console.log(err))  
//     },[])
//     return(
//         <div>
//             <div class="booking-page">
//                 <div class="booking-details mx-auto my-2">
//                     <div class="patient-name mx-1 my-2">
//                        <b>Patient Name:</b>{user}  
//                     </div>
//                     <div class="doctor-slot-detials">
//                         <div class="doctor">
//                             <div class="doctor-name" style={{border:'none'}}>
//                                 <b>Doctor Name:</b>{docName}
//                             </div>
//                             <div class="doctor-qual my-auto" style={{border:'none'}}>
//                                 <b>Doctor Qualification:</b>{docQual}
//                             </div>
//                             <div class="doctor-field" style={{border:'none'}}>
//                                 <b>Doctor Field:</b>{docField}
//                             </div>
//                         </div>
//                         <div class="date-time mx-1 my-1">
//                             <div class="booking-date">
//                                 <b>Booking Date:</b>{date}
//                             </div>
//                             <div class="booking-time-slot">
//                                 <b>Time Slot:</b>{time}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Bookings;
