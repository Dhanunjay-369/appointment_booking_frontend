import './Details.css';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Details()
{
    const [fullname,setFullName]=useState();
    const [age,setAge]=useState();
    // const [gender,setGender]=useState();
    const [email,setEmail]=useState();
    const [mobileNumber,setMobileNumber]=useState();

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/filldetails',{FullName:fullname,Age:age,Email:email,MobileNumber:mobileNumber})
        .then(result=>{console.log(result);
            if(result.data==="Success")
                alert("Details Saved Successfully");
            navigate('/signup');
        })
        .catch(err=>console.log(err))
    }

    return(
        <body>
            <div class="details-wrapper">
                <div class="details-form mx-auto my-auto px-5 py-3">
                    <form onSubmit={handleSubmit}>
                        <h3>Register with Ethnus Hospitals</h3>
                        <div class="full-name px-1 py-2">
                            <label for="full_name" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Full Name</label>
                            <input name="full_name" class="input-box form-control py-2" autocomplete="off" type="text" placeholder="Ex:YS Jagan"
                            style={{fontSize:'18px',fontFamily:'sans-serif'}} onChange={(e)=>setFullName(e.target.value)}/>
                        </div>
                        <div class="age px-1 py-2">
                            <label for="age_num" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Age</label>
                            <input name="age_num" class="input-box form-control py-2" autocomplete="off" type="text" placeholder="Ex:50"
                            style={{fontSize:'18px',fontFamily:'sans-serif'}} onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <div class="gender px-1 py-2">
                            <label for="gender" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Gender</label>
                            <select name="gen" class="form-control">
                                <option>--Select--</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div> 
                        <div class="job px-1 py-2">
                            <label for="job" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Job</label>
                            <input name="job" class="input-box form-control py-2" autocomplete="off" type="text" placeholder="Ex:Chief Minister"
                            style={{fontSize:'18px',fontFamily:'sans-serif'}}/>
                        </div>
                        <div class="mobile-number px-1 py-2">
                            <label for="phone" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Mobile Number</label>
                            <input name="phone" class="input-box form-control py-2" autocomplete="off" type="tel" placeholder="Ex:##########"
                            maxlength="10" pattern="[0-9]{10}" style={{fontSize:'18px',fontFamily:'sans-serif'}} onChange={(e)=>setMobileNumber(e.target.value)}/>
                        </div>
                        <div class="address px-1 py-2">
                            <label for="addr" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Address</label>
                            <textarea type="address" name="addr" class="form-control input-box form-control py-2" autocomplete="off" placeholder="Ex:RishiKonda"
                            style={{fontSize:'18px',fontFamily:'sans-serif'}}></textarea>
                        </div>
                        <div class="email px-1 py-2">
                            <label for="email-id" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Email Address</label>
                            <input type="email" class="input-box form-control py-2" autocomplete="off" name="email-id" placeholder="Ex:cm@ap.gov.in"
                             onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="surgery_query px-1 py-2">
                            <label for="surgery" class="label mx-1 my-1">Mention if undergone any surgery</label>
                            <textarea name="surgery" class="form-control input-box form-control surgery-query py-2" placeholder="No Surgeries yet."
                            style={{fontSize:'18px',fontFamily:'sans-serif'}}></textarea>
                        </div>
                        <button type="submit" class="btn btn-sucess mx-auto my-auto">Next</button>
                    </form>
                </div>
            </div>
        </body>
    );
}
export default Details;