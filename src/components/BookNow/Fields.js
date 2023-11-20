import './Fields.css';
import Header from '../Header.js';
// import GeneralPhysician from './Doctors/general_physician.js';
// import Pediatrician from './Doctors/pediatrician.js';
// import Dentist from './Doctors/dentist.js';
// import Cardiologist from './Doctors/cardiologist.js';
// import Dermatologist from './Doctors/dermatologist.js';
// import Gynaecologist from './Doctors/gynaecologist.js';
// import GeneralSurgeon from './Doctors/general_surgeon.js';
// import Radiologist from './Doctors/radiologits.js';
import Gastroentologist from './Doctors/gastroentologist.js';

import generalPhysician from './images/Fields/general_physician.png';
import pediatrician from './images/Fields//child_infant_issues.png';
import dentist from './images/Fields/Dental.png';
import cardiologist from './images/Fields/cardiac_issues.png';
import dermatologist from './images/Fields/skin_problems.png';
import gynaecologist from './images/Fields/women_issues.png';
import generalSurgeon from './images/Fields/general_surgery.png';
import radiologist from './images/Fields/labs_report.png';
import gastroentologist from './images/Fields/acidity.png';
import { Link } from 'react-router-dom';

function Fields()
{
    return(
        <div>
            <Header/>
            <div class="fields-wrapper justify-content-center align-items-center">
                <div class="fields-content mx-auto my-auto">
                    <div class="fields-box">
                        <div class="fields-title px-1 pt-1">
                            <h3>Choose Speciality</h3>
                        </div>
                        <div class="fields-table">
                            <table>
                                <tr>
                                    <td>
                                        <div class="img">
                                           <Link to="/booknow/generalphysician"><img src={generalPhysician} alt="general-problems"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                            <Link to="/booknow/generalphysician" style={{color:'black'}}>GeneralPhysician</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="img">
                                         <Link to="/booknow/pediatrics"><img src={pediatrician} alt="pedaitrics"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                            <Link to="/booknow/pediatrics" style={{color:'black'}}>Pediatrics</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="img">
                                        <Link to="/booknow/dental"><img src={dentist} alt="teeth"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/dental" style={{color:'black'}}>Dental</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>    
                                        <div class="img">
                                        <Link to="/booknow/cardiology"><img src={cardiologist} alt="Heart Problems"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/cardiology" style={{color:'black'}}>Cardiology</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="img">
                                        <Link to="/booknow/dermatology"><img src={dermatologist} alt="Skin Problems"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/dermatology" style={{color:'black'}}>Dermatology</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="img">
                                        <Link to="/booknow/gynaecology"><img src={gynaecologist} alt="Female Issues"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/gynaecology" style={{color:'black'}}>Gynacology</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="img">
                                        <Link to="/booknow/generalsurgeon"><img src={generalSurgeon} alt="general-surgeon"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/generalsurgeon" style={{color:'black'}}>GeneralSurgery</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="img">
                                        <Link to="/booknow/radiology"><img src={radiologist} alt="Medical-Lab"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/radiology" style={{color:'black'}}>LabReportAnalysis</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="img">
                                        <Link to="/booknow/gastroentology"><img src={gastroentologist} alt="Stomach-Ache"/></Link>
                                        </div>
                                        <div class="field-name mx-auto my-auto">
                                        <Link to="/booknow/gastroentology" style={{color:'black'}}>Gastroentology</Link>
                                        </div>
                                    </td>
                                </tr> 
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Fields;