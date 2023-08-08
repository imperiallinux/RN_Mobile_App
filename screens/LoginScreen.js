import { View , Text , Image, TouchableOpacity} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { themeColors as tc } from '../themes'
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

export default function LoginScreen() {
    return (
        <View style={{backgroundColor: tc.bg}}>
            <SafeAreaProvider>
            <StatusBar
        animated={false}
        backgroundColor="#61dafb"
        hidden={true}
      />
                <View style={tc.vlogin}>
                    <TouchableOpacity style={tc.lit}>
                        <Text>
                        <FontAwesomeIcon icon={faArrowLeft} /></Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider>
        </View>
    )
}