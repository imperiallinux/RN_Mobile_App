import { View , Text , Image, TouchableOpacity, TextInput} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React,{ useState } from "react"
import { themeColors as tc } from '../themes'
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={tc.container}>
            <Image source={require("../assets/images/logo_rn.png")} style={tc.image}/>
            <StatusBar style="auto" />
            <View style={tc.inputView}>
                <TextInput
                style={tc.textInput}
                placeholder="Enter e-mail"
                placeholderTextColor="#61216d"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize='none'
                /> 
            </View> 
            <View style={tc.inputView}>
                <TextInput
                style={tc.textInput}
                placeholder="Enter password"
                placeholderTextColor="#61216d"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                autoCapitalize='none'
                /> 
            </View> 
            <View style={tc.inputView}>
                <TextInput
                style={tc.textInput}
                placeholder="Confirm password"
                placeholderTextColor="#61216d"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                autoCapitalize='none'
                /> 
            </View> 
            <View style={tc.v}>
                <Text style={tc.ubt}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
                    <Text style={tc.lit}>Log In.</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
}