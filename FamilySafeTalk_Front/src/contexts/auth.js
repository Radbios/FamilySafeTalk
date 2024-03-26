import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from '../services/auth';
import api from "../services/api";
import io from 'socket.io-client';



const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const socketRef = useRef(null);

    async function loadStorageData(){
        const storagedUser = await AsyncStorage.getItem('@FST-Auth:user');
        const storagedToken = await AsyncStorage.getItem('@FST-Auth:token');
        
        if(storagedUser){
            setUser(JSON.parse(storagedUser));
            api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        }
        else{
            setLoading(false)
        }

        
    }
    useEffect( () => {
        loadStorageData();
    }, []);

    useEffect( () => {
        if(user)
        {
            socketRef.current = io("https://socket.radbios.com:3000");

            socketRef.current.on("connect", () => {
                console.log("Conectado ao socket");
                socketRef.current.emit('user-connect', user.id);
            });
    
            socketRef.current.on("disconnect", () => {
                console.log("Desconectado do socket")
            });

            setLoading(false);
    
            return () => {
                socketRef.current.disconnect();
            };
        }
    }, [user])

    async function singIn(email, password) {
        setLoading(true)
        const response = await auth.singIn(email, password);
        
        if(response.error)
        {
            setLoading(false);
            return;
        }
        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@FST-Auth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@FST-Auth:token', response.token);
    }

    async function singOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, singIn, singOut, socket: socketRef}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
