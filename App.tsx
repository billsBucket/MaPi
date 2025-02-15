import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { supabase } from './supabaseClient';
import SolanaWallet from './SolanaWallet';

const App: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    // Fetch user data
    const fetchUserData = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setErrorMsg(error.message);
      } else {
        setUserData(data);
      }
    };

    fetchUserData();
  }, []);

  if (errorMsg) {
    return <View><Text>{errorMsg}</Text></View>;
  }

  if (!location) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <SolanaWallet />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="You are here"
        />
      </MapView>
      {userData ? (
        <Text>User Data: {JSON.stringify(userData.user)}</Text>
      ) : (
        <Text>No user data found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default App;