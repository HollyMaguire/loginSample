import React, {useState} from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import $ from 'jquery';

export const validLogin = (password, email) => validPassword(password) && validEmail(email)

export const validPassword = (password) => password.length > 0

export const validEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

export function App() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [type, setType] = useState('password')
const [icon, setIcon] = useState(eyeOff)

const login = () => {
  if(!validLogin(password, email)) {
    alert("Invalid login")
    return
  }

  $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
        password,
        email
    },
    success: function(){
        alert("login successful")
    },
    error: function(response){
      alert(response.responseJSON.error)
  }

})

}

const handleToggle = () => {
   if (type==='password'){
      setIcon(eye);
      setType('text')
   } else {
      setIcon(eyeOff)
      setType('password')
   }
}
  return (
    <div className="login-App">
      <div className="login-form">
        <form>
          <div className="login-header">
          <header>
            Log In 
          </header>
          </div>
          <div className= "email">
            <input
              type="email"
              name="email"
              placeholder="myEmail@email.com" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address" 
              
              autoFocus={true}/>
            </div>  
          <div className= "password">
            <input 
            type={type}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password" 
            autoFocus={true} />
              <span className="show-password" onClick={handleToggle}>
                    <Icon icon={icon} size={15}/>
                </span>
            </div>
            
        </form>
        <button 
        className="submit" 
        onClick={login} >
              Submit
        </button>
      </div>
    </div>
  );
}

export default App;
