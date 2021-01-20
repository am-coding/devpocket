import {FC, useState, useContext} from 'react';
import axios from 'axios';
import Router from 'next/router'

const SignupForm: FC = () => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value)
    }
    const handleEmailChange =  (e: any) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange =  (e: any) => {
        setPassword(e.target.value)
    }
    const data = JSON.stringify({
        "username": username,
        "email": email,
        "password": password,
    });
     const handleSubmit =  async (e: any) => { 
        
         e.preventDefault();
        const headers = { 
            'Content-Type': 'application/json'
        };
        const req = await axios.post("http://localhost:9000/signup", data, {headers})
        if (req.status === 200) {
            Router.push("/login")
        }        
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>username</p>
            <input onChange={handleUsernameChange} placeholder="username" /><br />
            <p>email</p>
            <input onChange={handleEmailChange} placeholder="email" />
            <p>password</p>
            <input onChange={handlePasswordChange} type="password" placeholder="password" />
            <button>Sign up</button>
        </form>
    )
}

export default SignupForm;