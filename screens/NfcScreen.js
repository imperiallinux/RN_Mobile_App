import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NfcManager from 'react-native-nfc-manager';

export default function NfcScreen(){
  const [tag, setTag] = useState('');

  useEffect(() => {
    NfcManager.start()
      .then(result => {
        NfcManager.registerTagEvent(setTag);
      })
      .catch(console.error);

    return () => {
      NfcManager.unregisterTagEvent()
        .then('NfcManager stopped')
        .catch(console.error);
    };
  });

  return (
    <View style={styles.container}>
      {tag ? (
        <Text style={styles.text}>tag ID: {tag}</Text>
      ) : (
        <Text style={styles.text}>Scan NFC tag</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0ebf2',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#833191',
  },
});

