import React, { useState } from "react";
import { StatusBar, Text, View, TextInput, SafeAreaView,Pressable } from "react-native";
import styles from "./styles.js";
import UberTypeRow from "../UberTypeRow/UberTypeRow.js";

import typesData from "../../assets/data/types"; 

const UberTypes = (props) => {
  const confirm = () =>{
   var data=`confirm`;
    console.log(data);
  }
  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type}/>
      ))} 
      <Pressable onPress={confirm} style={{
        flex:1,
        backgroundColor:'black',
        padding:10,
        margin:10,
        alignItems:'center',
      }} >
        <Text style={{
          color:'white',
          fontWeight:'bold',
          }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};
export default UberTypes;
