import './LoginValidation.css';
function LoginValidation()
{

    return(
        <div class="login-validation">
            <div class="login-validation-form mx-auto my-auto">
            `   <form>
                    <h3 class="mx-2 my-1">Mobile Number:</h3>
                    <div class="mobile-number mx-1 my-1 px-2 py-2">
                        {/* <label for="phone" class="label mx-1 my-auto" style={{paddingRight:'10px'}}>Mobile Number</label><br/> */}
                        <input name="phone" class="input-box form-control py-2" autocomplete="off" type="tel" placeholder="Ex:##########"
                            maxlength="10" pattern="[0-9]{10}" style={{fontSize:'18px',fontFamily:'sans-serif'}}/>

                    <button type="submit" class="btn btn-success mx-2">Confirm</button>

{/* onChange={(e)=>setMobileNumber(e.target.value)} */}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginValidation;