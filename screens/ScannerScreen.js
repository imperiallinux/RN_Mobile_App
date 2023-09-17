import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { themeColors as tc } from '../themes'

export default function ScannerScreen() {
    const [hasPermission, setHasPermission] = React.useState(false);
    const [scanData, setScanData] = React.useState();
  
    useEffect(() => {
      (async() => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);
  
    if (!hasPermission) {
      return (
        <View style={tc.barCode}>
          <Text>Please grant permissions to use Camera</Text>
        </View>
      );
    }
  
    const handleBarCodeScanned = ({type, data}) => {
      setScanData(data);
      console.log(`Data: ${data}`);
      console.log(`Type: ${type}`);
    };
  
    return (
      <View style={tc.barCode}>
        <BarCodeScanner 
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
        
        {scanData && (
        <View style={{ backgroundColor: 'white', padding: 16 }}>
          <Text>Scanned Data: {scanData}</Text>
        </View>
        )}
        {scanData &&
        <View style={{ backgroundColor: 'white', padding: 16 }}>
          <Button  title='Scan Again?' onPress={() => setScanData(undefined)} />
        </View>}
        <StatusBar style="auto" />
      </View>
    );
}
