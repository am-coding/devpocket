import UserContext from '../contexts/userContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const AppProvider = ({children}) => {
    const [token, setToken] = useState<string>("");
   
    return (
        <UserContext.Provider value={[token, setToken]}>
            {children} 
        </UserContext.Provider>
    )
}