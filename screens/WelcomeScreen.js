import { View , Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { themeColors as tc } from '../themes'

export default function WelcomeScreen() {
    return (
        <SafeAreaView className="flex-1" style={{backgroundColor: tc.bg}}>
            <View className="flex-1 flex justify-around my-4">
                <Text className=" text-white font-bold text-4xl text-center">
                    Welcome!!!
                </Text>
            </View>
        </SafeAreaView>
    )
}