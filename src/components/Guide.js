// import {Link} from 'react-router-dom';
import './Guide.css';
import Header from './Header.js';


import LoginPage from './images/LoginPage.png';

function Guide()
{
    return(
        <body>
            <Header/>
            <div className="Guide-wrapper">
                <div className='steps-list mx-auto my-auto px-2 py-3'>
                    <ul>
                        <li>Login with Credentials,if an already registered user.
                            <ul>
                                <li>New User?Then Click <b>Register</b>.</li>
                                <li>Fill the Details and hit <b>Next</b> Button.</li>
                                <li>Set a new username and password for the registered email.And Strike <b>SignUp</b> button.</li>
                                <li>Login with registered credentials</li>
                            </ul>
                        </li>
                        <li>On successful login,you will be redirected to <b>Home Page</b>.Else retry with correct username and password.</li>
                        <li>On the navbar above,click on <b>Book Now</b> link to book an appointment</li>
                        <li>List of fields will be displayed.Choose One of them according to your problem.</li>
                        <li>You will be navigated to the doctors page,where list of doctors in that field will be displayed along with their details.</li>
                        <li>Fix a doctor who fits your needs,select <b>Book Visit</b> button.</li>
                        <li>Choose date and time slot which is flexible,also check the doctor details and click <b>Confirm</b> button.</li>
                        <li>See the list of bookings made by you.</li>
                        <li>For contacting us switch to <b>Contact Us</b> page.</li>
                    </ul>
                </div>
            </div>
        </body>
    );
}
export default Guide;