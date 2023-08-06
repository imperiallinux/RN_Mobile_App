import { View , Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { themeColors as tc } from '../themes'

export default function WelcomeScreen() {
    return (
        <SafeAreaProvider className="flex-1" style={{backgroundColor: tc.bg}}>
            <View style={tc.container}>
                <Text style={tc.fill}>
                    Welcome!!!
                </Text>
            </View>
        </SafeAreaProvider>
    )
}