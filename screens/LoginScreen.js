import { View , Text , Image, TouchableOpacity, TextInput} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React,{ useState } from "react"
import { themeColors as tc } from '../themes'
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

export default function LoginScreen() {
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
              placeholder="email@mail.com"
              placeholderTextColor="#61216d"
              onChangeText={(email) => setEmail(email)}
              autoCapitalize='none'
            /> 
          </View> 
          <View style={tc.inputView}>
            <TextInput
              style={tc.textInput}
              placeholder="Password"
              placeholderTextColor="#61216d"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              autoCapitalize='none'
            /> 
          </View> 
          <TouchableOpacity style={tc.bsuli} onPress={()=>navigation.navigate()}>
                    <Text style={tc.suliText}>Log In</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate()}>
            <Text style={tc.ubt}>Forgot Password?</Text> 
          </TouchableOpacity> 
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={tc.lit}>Sign Up.</Text> 
          </TouchableOpacity> 
        </View> 
      );
}