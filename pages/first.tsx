import { ChangeEvent, useState } from 'react';
import Link from 'next/link'
import { register } from '@lib/user-api';
import IconLogo from './../components/icons/icon-logo';
import PlatformLogo from '@components/icons/icon-platform';


export default function login() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState('');
  
  async function handleClick()
  {
    
    if(username!="")
    {
      localStorage.setItem("username",username);
      localStorage.setItem("password",email);

      await register(email);
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
     <>


      <div className="clsLogin  mt-2">
       
        
<div className="grid">

<div className="form login">

    <div className="margin-auto">
        <img src="/logo-full.png"  className="margin-auto"/>
    </div>


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
          <input type="submit" onClick={handleClick}  value="Sign In" />
          </Link>       
</div>
</div>
</div>


       
    </div>
     </>
     	  
   )
}