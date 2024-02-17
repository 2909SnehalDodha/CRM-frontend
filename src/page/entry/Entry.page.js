import React from 'react'
import LoginForm from '../../components/login/Login.comp'

import './entry.style.css'
import { useState } from 'react'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'

const Entry = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [frmLoad, setfrmLoad]= useState('login');

const handleOnChange = (e) =>{
const{name, value}= e.target
switch(name){
    case 'email':
        setEmail(value);
        break;

        case 'password':
            setPassword(value);
            break;

        default:
            break;
}

};
const handleOnSubmit = (e) =>{
    e.preventDefault();

    if(!email || !password){
        return alert("Fill up all the form!");
    }
    //To do call api to submit the form
   console.log(email, password);
};

const handleOnResetSubmit = (e) =>{
    e.preventDefault();

    if(!email ){
        return alert("Please enter the email!");
    }
    //To do call api to submit the form
   console.log(email);
};
const formSwitcher = (frmtype) =>{
    setfrmLoad(frmtype);
}

  return (
    <div className='entry-page bg-info '>
        <div class="form-box  p-5 bg-light">
        {frmLoad === 'login' &&
            <LoginForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
            />}

            {frmLoad === 'reset' &&
            <ResetPassword 
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher} 
            email={email}
            />}
            </div>
            </div>
  )
}

export default Entry
