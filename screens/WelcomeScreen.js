import { View , Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { themeColors as tc } from '../themes'

export default function WelcomeScreen() {
    return (
        <SafeAreaView className="flex-1" style={{backgroundColor: tc.bg}}>
            <View style={tc.container}>
                <Text style={tc.fill}>
                    Welcome!!!
                </Text>
            </View>
        </SafeAreaView>
    )
}