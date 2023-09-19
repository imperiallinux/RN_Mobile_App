import { View , Text , Image, TouchableOpacity, TextInput} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React,{ useState } from "react"
import { themeColors as tc } from '../themes'
import {useNavigation} from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async ()=>{
      if(email && password){
          try{
              await signInWithEmailAndPassword(auth, email, password);
          }catch(err){
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
              placeholder="email@mail.com"
              placeholderTextColor="#61216d"
              value={email}
              onChangeText={value=> setEmail(value)}
              autoCapitalize='none'
            /> 
          </View> 
          <View style={tc.inputView}>
            <TextInput
              style={tc.textInput}
              placeholder="Password"
              placeholderTextColor="#61216d"
              secureTextEntry={true}
              value={password}
              onChangeText={value=> setPassword(value)}
              autoCapitalize='none'
            /> 
          </View> 
          <TouchableOpacity style={tc.bsuli} onPress={handleSubmit}>
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