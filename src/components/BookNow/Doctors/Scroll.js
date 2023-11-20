import './Scroll.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
function Scroll()
{
    return(
        <div class="container">
            <div class="field-title">
                <h4>Choose Speciality</h4>
            </div>
            <div class="fields-list px-1 py-1">
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-2 py-2">
                    <Link to="/booknow/generalphysician" style={{textDecoration:'none',color:'greenyellow'}}>GeneralPhysician</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/pediatrics" style={{textDecoration:'none',color:'greenyellow'}}>Pediatrics</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/dental" style={{textDecoration:'none',color:'greenyellow'}}>Dental</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/cardiology" style={{textDecoration:'none',color:'greenyellow'}}>Cardiology</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/dermatology" style={{textDecoration:'none',color:'greenyellow'}}>Dermatology</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/gynaecology" style={{textDecoration:'none',color:'greenyellow'}}>Gynaecology</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/generalsurgery" style={{textDecoration:'none',color:'greenyellow'}}>GeneralSurgery</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/labreportanalysis" style={{textDecoration:'none',color:'greenyellow'}}>LabReportAnalysis</Link>
                </button>
                <button type="button" class="btn btn-default bg-info mx-1 my-1 px-3 py-2">
                    <Link to="/booknow/gastroentology" style={{textDecoration:'none',color:'greenyellow'}}>Gastroentology</Link>
                </button>
            </div>
        </div>
    );

}
export default Scroll;