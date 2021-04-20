import { ChangeEvent, useState } from 'react';
import Link from 'next/link'

export default function login() {
  debugger;
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState('');
  
  function handleClick(e: React.ChangeEvent<HTMLButtonElement>)
  {
    
    if(username!="")
    {
      localStorage.setItem("username",username);
      localStorage.setItem("password",email);
    }
    else
    {
        alert("please enter username");
    }

  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // No longer need to cast to any - hooray for react!
    // alert(e.target.id);
    if(e.target.id == "login__username"){
      setUserName(e.currentTarget.value)
    }else{
      setEmail(e.currentTarget.value)
    }

  }

  // function handleChange(id,e)
  // {
    
  //   if(id=="username")
  //   {
  //     setUserName(e.currentTarget.value)
  //   }
  //   else
  //   {
  //     setEmail(e.currentTarget.value)
  //   }
  // }
   return (
      <div className="clsLogin">
        
  <div className="grid">

<div className="form login">

  <div className="form__field">
    <label ><svg className="icon">
    
      </svg><span className="hidden">Username</span></label>
    <input  id="login__username" onChange={handleChange} value={username} type="text" name="username" className="form__input" placeholder="Username" required />
  </div>

  <div className="form__field">
    <label ><svg className="icon">

      </svg><span className="hidden">Password</span></label>
    <input id="login__email" type="text" name="email" onChange={handleChange} value={email} className="form__input" placeholder="Enter Email" required />
  </div>

  <div className="form__field">
            <Link href="/">
            <input type="submit" onClick={() => handleClick}  value="Sign In" />
            </Link>       
  </div>
</div>
</div>


         
      </div>	  
   )
}