
import { useState } from 'react';
import {Main} from "../main/Main";

export const Login = () => {
        const [user, setUser]= useState("");
        const [password, setPassword]= useState("");
        const [login, setLogin] = useState(true);
        
        const access = {
                userOri: "admin",
                passwordOri: "admin"
        }

        function handleSubmit(e) {
                e.preventDefault();
                if(user === access.userOri && password === access.passwordOri) {
                        setLogin(true);
                }
        }

        const loginForm = 
                (
                        <form id="login-form" onSubmit={handleSubmit}>
                                <div className="login-item">
                                        <div>User:</div>
                                        <input type="text" value={user} placeholder="user" onChange={e=>setUser(e.target.value)}/>
                                </div>
                                <div className="login-item">
                                        <div>Password:</div>
                                        <input type="password" value={password} placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                                </div>      
                                        
                                <button type="submit" >Submit</button>
                                        
                        </form>
                )

  return (
    <div className="login-container">
        {login?  <Main setUser={setUser} setPassword={setPassword} setLogin={setLogin} loginForm={loginForm}/> : loginForm }
    </div>
  )
}
