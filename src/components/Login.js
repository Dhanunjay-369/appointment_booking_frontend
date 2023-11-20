import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// import '/bootstrap/dist/css/bootstrap.min.css';
function Login()
{
    const [userName,setUserName]=useState();
    const [userPassword,setUserPassword]=useState();
    const [error,setError]=useState();

    const navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login",{UserName:userName,Password:userPassword})
        .then(result=>{console.log(result);
        if(result.data==="Success")
        {
            alert("Logged in Successfully.");
            navigate('/home');
            
        }
        else if(result.data==="Incorrect")
        {
            setError("Incorrect Password");
        }
        else if(result.data==="Invalid")
        {
            setError("Invalid User");
        }
        })
        .catch(err=>console.log(err))
    }

    return(
        <body>
            <div className="login-body">
                <div className="login-wrapper mx-auto my-auto px-3 py-3">
                    <div className="login-title mx-1 my-1 px-3 pt-1 pb-1"  style={{textAlign:'center'}}>
                        <h3>Welcome to Ethnus Hospitals🤗</h3>
                    </div>
                    {error && (
                        <div className="error-message mx-auto mt-2 px-3 py-1 text-danger" style={{ textAlign: 'center',fontSize:'20px',fontFamily:'monospace',fontWeight:'900' }}>
                            {error}
                        </div>
                    )}
                    <div className="login-form px-1">
                        <form onSubmit={handleLogin}>
                            <div className="login-name mx-3 mt-2">
                                <input type="text" placeholder="Username" className="form-control px-3 py-3" autoComplete='off' style={{background: 'none',color:'#fff'}}
                                onChange={(e)=>setUserName(e.target.value)} />
                                <i class="fa-regular fa-user fa-2xl my-auto"></i>
                            </div>
                            <div className="login-password mx-3 mt-3">
                                <input type="password" placeholder="Password" class="form-control px-3 py-3" autoComplete='off' style={{background: 'none',color:'#fff'}}
                                onChange={(e)=>setUserPassword(e.target.value)} /> 
                                <i className="fa-solid fa-lock fa-2xl my-auto"></i>
                            </div>
                            <button type="submit" className="btn btn-primary mx-auto mt-4 px-3 py-2">Login</button>
                            <div className="user-sign-up mx-2 mt-3 mb-1 px-3 py-1 text-align-center">
                                <p>Don't have an account? <Link to="/filldetails">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Login;