import {useState,useEffect} from 'react';
import './SlotBooking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function SlotBooking()
{
    const [docName,setDocName]=useState('');
    const [docQual,setDocQual]=useState('');
    const [docField,setDocField]=useState('');
    const [docFee,setDocFee]=useState('');
    
    useEffect(()=>{
        setDocName(sessionStorage.getItem('docName'));
        setDocField(sessionStorage.getItem('docField'));
        setDocQual(sessionStorage.getItem('docQual'));
        setDocFee(sessionStorage.getItem('docFee'));
    },[])
    return(
        <body>
            <div class="popup mx-auto my-auto px-1 py-1">
                <div class="doctor-details mx-1 my-1 px-1 py-1">
                    <div class="image mx-1 my-1 px-1 py-1">
                        <img src="./Anand_Dotihal.jpg" alt="Doctor"/>
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
                        <div class="fee mx-1 my-1 px-1 py-1">
                            {docFee}
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
                        <button name="Day1 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date1"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day1"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status1">   </div>
                        </button>
                        <button name="Day2 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date2"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day2"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status2">   </div>
                        </button>
                        <button name="Day3 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date3"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day3"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status3">   </div>
                        </button>
                        <button name="Day4 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date4"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day4"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status4">   </div>
                        </button>
                        <button name="Day5 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date5"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day5"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status5">   </div>
                        </button>
                        <button name="Day6 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date6"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day6"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status6">   </div>
                        </button>
                        <button name="Day7 ml-1 px-1 py-1">
                            <div class="date mx-1 mt-1 px-1" id="Date7"></div>
                            <div class="day mx-1 mt-1 px-1" id="Day7"></div>
                            <div class="status mx-1 mt-1 mb-2 px-1" id="Status7">   </div>
                        </button>
                    </div>
                </div>
                <div class="time-slots mx-1 px-1 py-1">
                    <div class="title mx-1">
                        <h5 style={{fontFamily:'Monospace'}}>Select Time Slot</h5>
                    </div>
                    <div class="timings">
                        <button name="Slot" class="btn btn-secondary mx-2" onClick="timeSlot('9:00AM','11:00AM',1);" id="timeSlot1">9:00AM-11:00AM</button>
                        <button name="Slot" class="btn btn-secondary mx-2" onClick="timeSlot('11:00AM','1:00PM',2);" id="timeSlot2">11:00AM-1:00PM</button>
                        <button name="Slot" class="btn btn-secondary mx-2" onClick="timeSlot('2:00PM','4:00PM',3);" id="timeSlot3">2:00PM-4:00Pm</button>
                    </div>
                </div>
                <div class="confirm-button mx-1 px-1 py-1">
                    <button type="submit" class="btn btn-primary mx-auto my-auto">Confirm Booking</button>
                </div>
            </div>
        </body>
    );
}
export default SlotBooking;