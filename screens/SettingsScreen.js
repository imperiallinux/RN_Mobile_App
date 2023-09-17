import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default  function SettingsScreen() {
  const [username, setUsername] = useState(''); 
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleLogout = () => {}

  const handleDeleteProfile = () => {
    if (showDeleteConfirmation) {
      // Implement profile deletion logic here
      // This might include clearing user data, account deletion, etc.
      // After deleting, navigate back to the login or home screen
    } else {
      // Show a confirmation dialog before deleting
      setShowDeleteConfirmation(true);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
      <TextInput
        placeholder="Change Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Log Out" onPress={handleLogout} />
      <Button
        title={showDeleteConfirmation ? 'Confirm Delete' : 'Delete Profile'}
        onPress={handleDeleteProfile}
      />
    </View>
  );
}
