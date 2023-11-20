import './Home.css';
import {Link} from 'react-router-dom'; 
import Header from './Header.js';
function Home()
{
    return(
        <div>
            <Header/>
            <div className="home-wrapper">
                <div className="home-content">
                    <div className="home-quote">
                        <div className="title">
                            <h2>Consult,Get Treated,Regain Health</h2>
                        </div>
                        <div className="title-tag-line">
                            <span className="bleed-quote mx-5"><i><strong>We are even ready to bleed,to stop you bleed..</strong></i></span>
                        </div>
                        <div className="booking-suggestion">
                            <span>Don't Wait,Just Go for the consultation.</span>
                        </div>
                        <div className="btn-outer-box">
                            <div className="btn-inner-box">
                                <button className="app-btn"><Link to="/booknow" style={{color:'purple'}}>Book an Appointment</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;