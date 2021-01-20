import {FC, useState, useContext} from 'react';
import app from '../axiosConfig';
import Router from 'next/router'
import UserContext from '../contexts/userContext'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [token, setToken] = useContext(UserContext)

    const handleEmailChange =  (e: any) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange =  (e: any) => {
        setPassword(e.target.value)
    }
    const data = JSON.stringify({
        "email": email,
        "password": password,
    });
     const handleSubmit =  async (e: any) => { 
         e.preventDefault();
        const headers = { 
            'Content-Type': 'application/json'
        };
        const req = await app.post("http://localhost:9000/login", data, {headers, withCredentials: true})
        if (req.status === 200) {
            Router.push("/dashboard")
        }                
        const resp = req.data;
        setToken(resp.access_token)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login here</h1>
            <p>email</p>
            <input onChange={handleEmailChange} placeholder="email" />
            <p>password</p>
            <input onChange={handlePasswordChange} type="password" placeholder="password" />
            <button>Login</button><br/>
            <p>{token}</p>
        </form>
    )
}

export default LoginForm;