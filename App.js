import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchResults from './src/screens/SearchResults/SearchResults.js';
import UberTypes from './src/screens/UberTypes/UberTypes'; 
import HomeMap from './src/components/HomeMap/HomeMap.js';
import HomeScreen from './src/screens/HomeScreen/HomeScreen.js';
import DestinationSearch from './src/screens/DestinationSearch/DestinationSearch.js'

export default function App() {
  return (
    <View  > 
     <StatusBar />  
      <DestinationSearch style="auto" /> 
    </View>
  );
}
 