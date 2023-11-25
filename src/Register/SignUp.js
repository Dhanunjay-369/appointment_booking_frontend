import './SignUp.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp()
{
    const [userEmail,setUserEmail]=useState()
    const [userName,setUserName]=useState()
    const [userPassword,setUserPassword]=useState()

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/patientRoute/signup",{Email:userEmail,UserName:userName,Password:userPassword})
        .then(result=>{
            if(result.data==="Success")
                alert("User Registered Successfully");
            navigate('/login');
        })
        .catch(err=>console.log(err))
    }

    return(
        <body>
            <div className="signup-wrapper">
                <div className="signup-form mx-auto my-auto">
                    <form onSubmit={handleSubmit}>
                        <h4>SignUp with Ethnus Hospitals🤗</h4>
                        <div className="field-box mx-3 my-3">
                            <label className="label mx-1 my-1">Email</label><br/>
                            <div className="input-box px-1 py-1">
                                <input type="text" class="form-control px-3 py-2" placeholder="Ex:sdr@gmail.com"
                                onChange={(e)=>setUserEmail(e.target.value)}/>
                                {/* <!-- <i class='bx bxs-user my-2' ></i> --> */}
                            </div>
                        </div>
                        <div className="field-box mx-3 my-3">
                            <label className="label mx-1 my-1">Username</label><br/>
                            <div className="input-box px-1 py-1">
                                <input type="text" class="form-control px-3 py-2" placeholder="Ex:Konda Reddy"
                                onChange={(e)=>setUserName(e.target.value)}/>
                                {/* <!-- <i class='bx bxs-user my-2' ></i> --> */}
                            </div>
                        </div>
                        <div className="field-box mx-3 my-3">
                            <label className="label mx-1 my-1">Password</label><br/>
                            <div className="input-box px-1 py-1">
                                <input type="password" class="form-control px-3 py-2" placeholder="Ex:sdr" style={{minWidth:'295px'}}/> 
                            </div>
                            {/* <!-- <i class='bx bxs-lock' ></i> --> */}
                        </div>
                        <div className="field-box mx-3 my-3">
                            <label className="label mx-1 my-1">Confirm Password</label><br/>
                            <div className="input-box px-1 py-1">
                                <input type="password" class="form-control px-3 py-2" placeholder="Ex:sdr" style={{minWidth:'295px'}}
                                onChange={(e)=>setUserPassword(e.target.value)}/>
                            </div>
                            {/* <!-- <i class='bx bxs-lock' ></i> --> */}
                        </div>
                        <button type="submit" className="btn btn-warning mx-auto my-auto">SignUp</button>
                    </form>
                </div>
            </div>
        </body>
    );
}
export default SignUp;
