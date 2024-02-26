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

    useEffect( () => {
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

        loadStorageData();
    }, []);

    useEffect( () => {
        socketRef.current = io("https://radbios.com:3000");

        socketRef.current.on("connect", () => {
            console.log("Conectado ao socket");
            socketRef.current.emit('user-connect', user.id);
            setLoading(false);
        });

        socketRef.current.on("disconnect", () => {
            console.log("Desconectado do socket")
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [user])

    async function singIn(email, password) {
        setLoading(true)
        const response = await auth.singIn(email, password);

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@FST-Auth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@FST-Auth:token', response.token);

        socketRef.current = io("https://radbios.com:3000");
    
        socketRef.current.on("connect", () => {
            console.log("Conectado ao socket")
            socketRef.current.emit('user-connect', response.user.id);
            setLoading(false);
        });

        socketRef.current.on("disconnect", () => {
            console.log("Desconectado do socket")
        });

        return () => {
            socketRef.current.disconnect();
        };
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
