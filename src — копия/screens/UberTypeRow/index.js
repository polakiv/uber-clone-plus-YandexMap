import React, { useState } from "react";
import { StatusBar, Text, View, Image, SafeAreaView } from "react-native";
import styles from "../UberTypeRow/styles";
//import styles from "./styles.js";
import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {
  console.log(props);

  const {type}=props;

  const getImage =()=>{
    if(type.type === 'UberX'){
      return require('../../assets/images/UberX.png');
    }
    if(type.type === 'Comfort'){
      return require('../../assets/images/Comfort.png');
    }
    if(type.type === 'UberXL'){
      return require('../../assets/images/UberXL.png');
    }
  }
  return (
    <View style={styles.container}>
      {/* image */}
      
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={12} /> 
        </Text>
        <Text style={styles.time}>{type.duration}{' '}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={"#42d742"} />
        <Text style={styles.price}>est.  {type.price}{' '} </Text>
      </View>
    </View>
  );
};
export default UberTypeRow;
