import './doctorsList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Header.js';
import Scroll from './Scroll.js';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Poovamma from "../images/Doctors/dermatologist/Poovamma.jpeg";
import Sandeep_Mahapatra from "../images/Doctors/dermatologist/Sandeep_Mahapatra.webp";
import Tejaswini_Acharya from "../images/Doctors/dermatologist/Tejaswini_Acharya.jpeg";

function Dermatologist()
{
    const [docId,setDocId]=useState();
    const [doc,setDoc]=useState();
    const [docName,setDocName]=useState();
    const [docField,setDocField]=useState();
    const [docQual,setDocQual]=useState();

    const [days,setDays]=useState([]);

    const [date,setDate]=useState();
    const [time,setTime]=useState();

    const changeDisplay=()=>{
        document.getElementById("dermatology").style.display="none";
        document.getElementById("showTimeSlots").style.display="flex";   
    }

    useEffect(()=>{
        getDate();
    },[])

    const saveDocInfo=(id,name,qual,field)=>{
        setDocId(id);
        if(id==='1')
            setDoc(Poovamma);
        else if(id==='2')
            setDoc(Sandeep_Mahapatra);
        else if(id==='3')
            setDoc(Tejaswini_Acharya);
        setDocName(name);
        setDocQual(qual);
        setDocField(field);
        changeDisplay();
        //getDate();
    }

    const getDate = () => {
        const options = { day: 'numeric', month: 'short' };
    
        const updatedDays = Array.from({ length: 7 }, (_, i) => {
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() + i);
    
          return {
            id: i + 1, // Unique identifier for each day
            date: currentDate.toLocaleDateString('en-US', options),
            dayOfWeek: currentDate.toLocaleDateString('en-US', { weekday: 'short' }),
            status: currentDate.getDay() === 0 || currentDate.getDay() === 6 ? 'Unavailable' : 'Available',
          };
        });
    
        setDays(updatedDays);
    };

    const selectTimeSlot=(startTime,endTime,index)=>{
        if(index===1){
            setTime('9:00AM-11:00AM');
        }
        else if(index===2){
            setTime('11:00AM-1:00PM');
        }       
        else if(index===3){
            setTime('2:00PM-4:00PM');
        }
        var currentIndexStatus=document.getElementById(`timeSlot${index}`);
        if(currentIndexStatus.style.background==='green')
        {
            currentIndexStatus.style.background='grey';
        }
        else{

        var prevIndex=((index-1)<1)?3:(index-1);
        var nextIndex=((index+1)>3)?1:(index+1);

        
        var prevIndexStatus=document.getElementById(`timeSlot${prevIndex}`);
        var nextIndexStatus=document.getElementById(`timeSlot${nextIndex}`);

        var prevIsNotGreen=prevIndexStatus.style.background!=='green';
        var nextIsNotGreen=nextIndexStatus.style.background!=='green';
        if(prevIsNotGreen && nextIsNotGreen)
            document.getElementById(`timeSlot${index}`).style.background="green";
        }
    }

    // const printInfo=()=>{
    //     console.log(docName);
    //     console.log(docField);
    //     console.log(docQual);
    //     console.log(doc);
    //     console.log(time);
    //     console.log(date);
    // }

    const navigate=useNavigate();
    const addBooking=()=>{
        axios.post("http://localhost:3001/patientRoute/booknow/confirm_booking",{
            DoctorName:docName,DoctorQualification:docQual,DoctorField:docField,BookingDate:date,BookingTime:time
        })
        .then(result=>{console.log(result);
          navigate('/bookings');  })
        .catch(err=>console.log(err))
    }

    return(
        <div>
        <div id="dermatology">
            <Header/>
            <div class="doctor-wrapper">
                <div class="doctor-content">
                    <div class="doctor-content-holder  mx-auto my-auto">
                        <Scroll/> 
                        <div class="doctor1">
                            <div class="doctor">
                                <div class="doctor-image">
                                    <img src={Poovamma} alt="Doctor" height="196" width="196"/>
                                </div>
                                <div class="doctor-oral-specifications">
                                    <div class="doctor-field mb-2 py-1 px-1">
                                        Dermatologist
                                    </div>
                                    <div class="doctor-name mb-2 py-1 px-1">
                                        Dr.Poovamma
                                    </div>
                                    <div class="doctor-qualification mb-2 py-1 px-1">
                                    MBBS-General Medicine, MD-Dermatology
                                    </div>
                                    <div class="doctor-exp-lang">
                                        <div class="doctor-exp  mb-2 py-1 px-1">
                                            8 years
                                        </div>
                                        <div class="doctor-lang py-1 px-1">
                                            Telugu
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doctor-visit px-auto py-auto">
                                <div class="doctor-fee mx-1 my-1 py-2 px-2">
                                    Rs.500
                                </div>
                                <div class="doctor-booking mx-1 my-1 py-1 px-1">
                                    <button type="button" class="btn btn-default"
                                    onClick={()=>saveDocInfo('1','Dr.Poovamma','MBBS-General Medicine, MD-Dermatology','Dermatologist')} >Book Visit</button>
                                </div>
                                {/* <div class="doctor-know-more mx-1 my-1 py-1 px-1">
                                    <button type="button" class="btn btn-default">Book Know More</button>
                                </div> */}
                            </div>
                        </div>
                        <div class="doctor2">
                            <div class="doctor">
                                <div class="doctor-image">
                                    <img src={Sandeep_Mahapatra} alt="Doctor" height="196" width="196"/>
                                </div>
                                <div class="doctor-oral-specifications">
                                    <div class="doctor-field mb-2 py-1 px-1">
                                        Dermatologist
                                    </div>
                                    <div class="doctor-name mb-2 py-1 px-1">
                                        Dr.Sandeep Mahapatra
                                    </div>
                                    <div class="doctor-qualification mb-2 py-1 px-1">
                                        MBBS-General Medicine, MD-Dermatology, Venereology and Leprosy
                                    </div>
                                    <div class="doctor-exp-lang">
                                        <div class="doctor-exp  mb-2 py-1 px-1">
                                            17 years
                                        </div>
                                        <div class="doctor-lang py-1 px-1">
                                            Hindi
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doctor-visit px-auto py-auto">
                                <div class="doctor-fee mx-1 my-1 py-2 px-2">
                                    Rs.400
                                </div>
                                <div class="doctor-booking mx-1 my-1 py-1 px-1">
                                    <button type="button" class="btn btn-default"
                                    onClick={()=>saveDocInfo('3','Dr.Sandeep Mahapatra','MBBS-General Medicine, MD-Dermatology, Venereology and Leprosy','Dermatologist')} 
                                    >Book Visit</button>
                                </div>
                                {/* <div class="doctor-know-more mx-1 my-1 py-1 px-1">
                                    <button type="button" class="btn btn-default">Book Know More</button>
                                </div> */}
                            </div>
                        </div>
                        <div class="doctor3">
                            <div class="doctor">
                                <div class="doctor-image">
                                    <img src={Tejaswini_Acharya} alt="Doctor" height="196" width="196"/>
                                </div>
                                <div class="doctor-oral-specifications">
                                    <div class="doctor-field mb-2 py-1 px-1">
                                        Dermatologist
                                    </div>
                                    <div class="doctor-name mb-2 py-1 px-1">
                                    Dr.Tejaswini Acharya
                                    </div>
                                    <div class="doctor-qualification mb-2 py-1 px-1">
                                    MBBS-General Medicine, MD-Dermatology
                                    </div>
                                    <div class="doctor-exp-lang">
                                        <div class="doctor-exp  mb-2 py-1 px-1">
                                            5 years
                                        </div>
                                        <div class="doctor-lang py-1 px-1">
                                            Kannada
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doctor-visit px-auto py-auto">
                                <div class="doctor-fee mx-1 my-1 py-2 px-2">
                                    Rs.300
                                </div>
                                <div class="doctor-booking mx-1 my-1 py-1 px-1">
                                    <button type="button" class="btn btn-default"
                                    onClick={()=>saveDocInfo('3','Tejaswini Acharya','MBBS-General Medicine, MD-Dermatology','Dermatologist')} 
                                    >Book Visit</button>
                                </div>
                                {/* <div class="doctor-know-more mx-1 my-1 py-1 px-1">
                                    <button type="button" class="btn btn-default">Book Know More</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div id="showTimeSlots" style={{display:'none'}}>
            <div class="popup mx-auto my-auto px-1 py-1">
                <div class="doctor-details mx-1 my-1 px-1 py-1">
                    <div class="image mx-1 my-1 px-1 py-1">
                        <img src={doc} alt="Doctor" height="128" width="128"/>
                    </div>
                    <div class="name-qualification-field mx-1 my-1 px-1 py-1">
                        <div class="name mx-1 my-1 px-1 py-1">
                            {docName}
                        </div>
                        <div class="qualification mx-1 my-1 px-1 py-1">
                            {docQual}
                        </div>
                        <div class="field mx-1 my-1 px-1 py-1">
                            {docField}
                        </div>
                    </div>
                </div>
                <div class="ruler">
                    <hr/>
                </div>
                <div class="hospital-name mx-1 px-1 pb-1">
                    <span><h4>Ethnus Hospitals Pvt.Ltd</h4></span>
                </div>
                <div class="calender mx-1 px-1">
                    <div class="title mx-1 px-1">
                        <h5 style={{fontFamily:'Monospace'}}>Select Date</h5>
                    </div>
                    <div class="dates">
                            {days.map((day)=>(
                                <button key={day.id} class="my-1 px-1 py-1" disabled={day.status==='Unavailable'}
                                onClick={()=>setDate(day.date)} >
                                    <div class="date mx-1 mt-1 px-1" id={`Date${day.id}`}>{day.date}</div>
                                    <div class="day mx-1 mt-1 px-1" id={`Day${day.id}`}>{day.dayOfWeek}</div>
                                    <div class="status mx-1 mt-1 mb-2 px-1" id={`Status${day.id}`}>{day.status}</div>
                                </button>
                            ))}
                    </div>
                </div>
                <div class="time-slots mx-1 px-1 py-1">
                    <div class="title mx-1">
                        <h5 style={{fontFamily:'Monospace'}}>Select Time Slot</h5>
                    </div>
                    <div class="timings">
                        <button name="Slot" class="btn mx-2" onClick={()=>selectTimeSlot('9:00AM','11:00AM',1)} id="timeSlot1">9:00AM-11:00AM</button>
                        <button name="Slot" class="btn mx-2" onClick={()=>selectTimeSlot('11:00AM','1:00PM',2)} id="timeSlot2">11:00AM-1:00PM</button>
                        <button name="Slot" class="btn mx-2" onClick={()=>selectTimeSlot('2:00AM','4:00PM',3)} id="timeSlot3">2:00PM-4:00Pm</button>
                    </div>
                </div>
                <div class="confirm-button mx-1 px-1 py-1">
                    <button type="submit" class="btn btn-primary mx-auto my-auto"
                    onClick={addBooking} >Confirm Booking</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Dermatologist;

