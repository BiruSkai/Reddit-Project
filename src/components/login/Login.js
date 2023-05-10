
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
        const [details, setDetails] = useState({user:"", password:""});
        const [login, setLogin] = useState(false);
        
        const access = {
                userOri: "admin",
                passwordOri: "admin"
        }

        function handleSubmit(e) {
                e.preventDefault();
                if(details.user == access.userOri && details.password == access.passwordOri) {
                        return setLogin = true;
                }
        }

        const loginForm = 
                (
                        <form id="login-form" onSubmit={handleSubmit}>
                                <div className="login-item">
                                        <div>User:</div>
                                        <input type="text" value={details.user} placeholder="user" onChange={e=>setDetails({...details, user: e.target.value})}/>
                                </div>
                                <div className="login-item">
                                        <div>Password:</div>
                                        <input type="password" value={details.password} placeholder="password" onChange={e=>setDetails({...details, password: e.target.value})}/>
                                </div>      
                                        
                                        <button type="submit">Submit</button>
                                        
                        </form>
                )

  return (
    <div className="login-container">
        {login?  <Link to="/main"/>: loginForm }
    </div>
  )
}
