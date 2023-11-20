import './ContactUs.css';
import Header from './Header.js';
function ContactUs()
{
    return(
        <body>
            <Header/>
            <div className='wrapper'>
                <div className='content'>
                    <div className='message'>
                        <form>
                            <table>
                                <tr>
                                    <td>
                                        <div className='messenger_icon'>
                                            <img src='' alt='Messenger Name'/>
                                        </div>
                                        <div className='messenger_name'>
                                            <input type='text' placeholder="Enter your Name"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='message_rows'>
                                        <div className='messenger_email_icon'>
                                            <img src='' alt='Messenger Email'/>
                                        </div>
                                        <div className='messenger_email'>
                                            <input type='email' placeholder="Enter your Email"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='messenger_message_icon'>
                                            <img src='' alt='Messenger Message'/>
                                        </div>  
                                        <div className='messenger_message'>
                                            <textarea placeholder="Please Enter your Query/Suggestion/Compliant here"></textarea>
                                        </div>
                                    </td>
                                </tr>
                                <div className='submit_btn_box'>
                                    <div className='submit_btn'>
                                        <button type='submit'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </table>
                        </form>
                    </div>
                    <div className='contact_info'>
                        <form>
                            <table>
                                <tr>
                                    <td>
                                        <div className='email_icon'>
                                            <img src='' alt='Email'/>
                                        </div>  
                                    </td>
                                    <td>
                                        <div className='email'>
                                            <span>ethnushospitals@gmail.com</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='phone_icon'>
                                            <img src='' alt='Email'/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='phone'>
                                            <span>+91-7815 095 095</span>
                                        </div>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='address_icon'>
                                            <img src='' alt='Email'/>
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
                                        <div className='website_icon'>
                                            <img src='' alt='Website'/>
                                        </div>  
                                    </td>
                                    <td>
                                        <div className='website'>
                                            <span>https://www.ethnus.com</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default ContactUs;