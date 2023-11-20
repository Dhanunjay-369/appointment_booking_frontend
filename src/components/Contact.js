import './Contact.css';
import Header from './Header.js';
import { Link } from 'react-router-dom';
function Contact()
{
    return(
        <div>
            <Header/>
            <div className='contact-wrapper'>
                <div className='contact-content mx-auto my-auto px-2 py-2'>
                    <div className='contact-message my-auto px-1 py-1'>
                        <form>
                            <table>
                                <tr>
                                    <td>
                                        <div className="messenger-name-box mx-1 my-1 px-1 py-1">
                                            <div className='label messenger-name-label mx-2 my-2' for="messengerName">
                                                Name{/* <i class='bx bx-user-pin'></i> */}
                                            </div>
                                            <div className='messenger-name'>
                                                <input type='text' placeholder="Enter your Name" class="form-control" name="messengerName"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="messenger-email-box mx-1 my-1 px-1 py-1">
                                            <div className='label messenger-email-label mx-2 my-2' for="messengerEmail">
                                                Email
                                            </div>
                                            <div className='label messenger-email'>
                                                <input type='email' placeholder="Enter your Email" class="form-control" name="messengerEmail"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='messenger-message-box mx-1 my-1 px-1 py-1'>
                                            <div className='label messenger-message-label mx-2 my-2'>
                                                Message
                                            </div>  
                                            <div className='messenger-message'>
                                                <textarea placeholder="Please Enter your Query" class="form-control"></textarea>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <div className='submit-btn-outerbox mx-auto my-1'>
                                        <button type='submit' class="mx-auto my-1 px-1 py-1">
                                           <Link to="/" style={{textDecoration:'none',fontSize:'16px',color:'green'}}> Submit</Link>
                                        </button>
                                </div>
                            </table>
                        </form>
                    </div>
                    <div className='contact-info my-2 px-1 py-1'>
                            <table>
                                <tr>
                                    <td>
                                        <div className='hospital-label mx-1'>
                                           Hospital
                                        </div>  
                                    </td>
                                    <td>
                                        <div className='hospital mx-2'>
                                            <span>Ethnus Hospitals Pvt.Ltd</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='email-label mx-1'>
                                           Email
                                        </div>  
                                    </td>
                                    <td>
                                        <div className='email'>
                                            <span><a href="mailto:ethnushospitals@gmail.com" target="_blank" style={{textDecoration:'none',fontSize:'14px'}}>ethnushospitals@gmail.com</a></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='mobile-number-label mx-1'>
                                            Mobile Number
                                        </div>
                                    </td>
                                    <td>
                                        <div className='mobile-number'>
                                            <span>+91-7815 095 095</span>
                                        </div>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='address-label mx-1'>
                                            Address
                                        </div>      
                                    </td>
                                    <td>
                                        <div className='address'>
                                            <span>Opp to Manthena Satyanaranayana Raju Yoga Center,Somajiguda,Hyderabad</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='website-label mx-1'>
                                            Website
                                        </div>  
                                    </td>
                                    <td>
                                        <div className='website'>
                                            <span><Link to="/login" style={{fontSize:'14px'}}>http://localhost:3000/login</Link></span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;