import React,{useEffect} from 'react'
import validate from '../validation/ValidatFunction'
function SignIn () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const handleValidate = (e) => {
        const err = validate('username', e.target.value)
        document.getElementById('err').innerHTML = err
        if(!err) {
            document.getElementById('input1').style.border = '2px solid green'
        } else {
            document.getElementById('input1').style.border = '2px solid red'
        }
    }
    const handleValidate2 = (e) => {
      const err = validate('password', e.target.value)
      document.getElementById('err2').innerHTML = err
      if(!err) {
          document.getElementById('input2').style.border = '2px solid green'
      } else {
          document.getElementById('input2').style.border = '2px solid red'
      }
  }
    return  <div className="signin">
                <i class="fas fa-sign-in-alt"></i>
                <h2>Sign In</h2>
                <div className='user'>
                  <p>UserName :</p>
                  <input type="text" placeholder='username' id='input1' onChange={handleValidate}/>
                </div>
                <p id="err"></p>
                <div className='user'>
                  <p>Password :</p>
                  <input type="text" placeholder='password' id='input2' onChange={handleValidate2}/>
                </div>
                <p id="err2"></p>
                <button>Sign In</button>
            </div>
}
export default SignIn