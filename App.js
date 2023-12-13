import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import Ejercicios from './src/screens/Ejercicios';
import {useFonts} from "expo-font"
import { useState } from 'react';

export default function AppGym() {

    const [selectedScreen, setSelectedScreen] = useState("Home");
    const [fontsLoaded] = useFonts({
        Lato:require('./assets/lato/Lato-Black.ttf')
    })

    if (!fontsLoaded) return null;

    return (
    <View style={styles.container}>
        {selectedScreen === "Home" ? <Home changePage={setSelectedScreen}/> : <Categories goHome={setSelectedScreen}/>}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: "100%",
        width: "100%",
        fontFamily: "Lato",
    }
});
