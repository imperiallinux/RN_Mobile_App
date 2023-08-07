import { View , Text , Image, TouchableOpacity} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { themeColors as tc } from '../themes'
import {useNavigation} from '@react-navigation/native'

export default function WelcomeScreen() {
    
    const navigation = useNavigation();

    return (
        <SafeAreaProvider className="flex-1" style={{backgroundColor: tc.bg}}>
            <View style={tc.container}>
                <View style={tc.v}>
                    <Image source={require("../assets/images/welcome.png")} style={{width: 350, height: 200}}/>
                </View>
                <Text style={tc.fill2}>2</Text>
                <Text style={tc.fill}>4 IN 1</Text>
                <View style={tc.btn}>
                    <TouchableOpacity  style={tc.bs} onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={tc.bts}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={tc.v}>
                        <Text style={tc.ubt}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
                            <Text style={tc.lit}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>   
        </SafeAreaProvider>
    )
}