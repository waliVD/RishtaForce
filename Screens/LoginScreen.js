import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Login Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20242F',
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
  },
});

export default LoginScreen;
