import React, {useContext, useEffect} from 'react'
import UserContext from '../contexts/userContext'
import app from "../axiosConfig"

export default function Page() {
  const [token, setToken] = useContext(UserContext)
  const refreshToken = async () => {
    const headers = { 
        'Content-Type': 'application/json'
    };
    const req = await app.post("http://localhost:9000/tokens/refresh", {
      withCredentials: true,
      headers,
    })
    const resp = req.data
    setToken(resp.access_token)
    console.log(resp.access_token);
}
useEffect(() => {
  refreshToken()
}, [])
  return (
    <div>
        {token}
    </div>
  )
}
