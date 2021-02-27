import React,{useEffect} from 'react'
import validate from '../validation/ValidatFunction'
import { withTranslation } from 'react-i18next';
function SignUp ({t}) {
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
      const err = validate('email', e.target.value)
      document.getElementById('err2').innerHTML = err
      if(!err) {
          document.getElementById('input2').style.border = '2px solid green'
      } else {
          document.getElementById('input2').style.border = '2px solid red'
      }
  }
  const handleValidate3 = (e) => {
    const err = validate('password', e.target.value)
    document.getElementById('err3').innerHTML = err
    if(!err) {
        document.getElementById('input3').style.border = '2px solid green'
    } else {
        document.getElementById('input3').style.border = '2px solid red'
    }
}

  const handleValidate4 = (e) => {
    const err = validate('password', e.target.value)
    document.getElementById('err4').innerHTML = err
    if(!err) {
        document.getElementById('input4').style.border = '2px solid green'
    } else {
        document.getElementById('input4').style.border = '2px solid red'
    }
}
    return  <div className="signup">
                <i class="fa fa-registered" aria-hidden="true"></i>
                <h2>Sign Up </h2>
                <div className='dokme'>
                  <p>UserName :</p>
                  <input type="text" placeholder='username' id='input1' onChange={handleValidate}/>
                </div>
                <p id="err"></p>
                <div className='dokme'>
                  <p>Email :</p>
                  <input type="text" placeholder='email'  id='input2' onChange={handleValidate2}/>
                </div>
                <p id="err2"></p>
                <div className="dokme">
                  <p>Password :</p>
                  <input type="text" placeholder='Password' id='input3' onChange={handleValidate3}/>
                </div>
                <p id="err3"></p>
                <div className="dokme">
                  <p>Confirm Password :</p>
                  <input type="text" placeholder='Confirm Password' id='input4' onChange={handleValidate4}/>
                </div>
                <p id="err4"></p>
                <button>Sign Up</button>
            </div>
}
export default withTranslation()(SignUp)