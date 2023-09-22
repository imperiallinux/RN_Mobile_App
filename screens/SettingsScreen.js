import React, { useState } from 'react';
import { View, Text, Button, TextInput,TouchableOpacity } from 'react-native';
import { themeColors as tc } from '../themes'
import { signOut } from 'firebase/auth'
import { deleteUser } from 'firebase/auth'
import { auth } from '../config/firebase'

export default  function SettingsScreen() {
  const [username, setUsername] = useState(''); 
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleLogout = async ()=>{
    await signOut(auth);
  }

  const handleDeleteProfile = () => {
    const user = auth.currentUser;
    deleteUser(user).then(()=> {
        navigation.navigate('SignUpScreen')
    }).catch((error) => {
        Alert.alert(error);
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <View style={tc.inputView}>
            <TextInput
                value={username}
                placeholder="Change Username"
                placeholderTextColor="#61216d"
                onChangeText={(username) => setUsername(username)}
            />
        </View> 
        <TouchableOpacity style={tc.bsuli} onPress={handleLogout}>
            <Text style={tc.suliText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tc.bsuli}
            onPress={handleDeleteProfile}>
            <Text style={tc.suliText}>{showDeleteConfirmation ? 'Confirm Delete' : 'Delete Profile'}</Text>
        </TouchableOpacity>
    </View>
  );
}
