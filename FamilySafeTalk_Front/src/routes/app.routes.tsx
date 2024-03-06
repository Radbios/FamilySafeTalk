import React, { useEffect, useState } from 'react';

import BottomTabNavigator from "../components/bottomTab";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const AppRoutes = () => {
    

    return(
        <BottomTabNavigator/>
    );
  
}

export default AppRoutes;