import React from "react";
import { Image, Text, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
  
const PlaceRow = (props) => {
  console.log(props);
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={20} color={'white'} />
      </View>
      <Text style={styles.locationText}>  </Text>
      </View>
  ); 
};
export default PlaceRow;
