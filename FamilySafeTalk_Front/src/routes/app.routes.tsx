import React, { useEffect, useState, useRef } from 'react';

import BottomTabNavigator from "../components/bottomTab";
import io from 'socket.io-client';

const AppRoutes = () => {
    const socketRef = useRef(null);
    useEffect(() => {
        socketRef.current = io("https://radbios.com:3000");

        // socketRef.current.on("message", msg => {
        //     console.log(msg)
        // });

        socketRef.current.on("connect", () => {
            console.log("Conectado ao socket")
        });

        socketRef.current.on("disconnect", () => {
            console.log("Desconectado do socket")
        });

        return () => {
        socketRef.current.disconnect();
        };
    }, []);
    return(
        <BottomTabNavigator socket={socketRef}/>
    );
}

export default AppRoutes;