import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Routes from './src/Routes'


const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};


export default App;
