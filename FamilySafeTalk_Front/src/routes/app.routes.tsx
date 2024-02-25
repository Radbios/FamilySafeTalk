import React, { useEffect, useState, useRef } from 'react';

import BottomTabNavigator from "../components/bottomTab";
import io from 'socket.io-client';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

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