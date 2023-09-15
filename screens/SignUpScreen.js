import { View , Text , Image, TouchableOpacity, TextInput} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React,{ useState } from "react"
import { themeColors as tc } from '../themes'
import {useNavigation} from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async ()=>
    {
        if(email && password){
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('got error: ',err.message);
            }
        }
    }
    return (
        <View style={tc.container}>
            <Image source={require("../assets/images/logo_rn.png")} style={tc.image}/>
            <StatusBar style="auto" />
            <View style={tc.inputView}>
                <TextInput
                style={tc.textInput}
                value={email}
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
            <TouchableOpacity style={tc.bsuli} onPress={handleSubmit}>
                    <Text style={tc.suliText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={tc.v}>
                <Text style={tc.ubt}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
                    <Text style={tc.lit}>Log In.</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
}