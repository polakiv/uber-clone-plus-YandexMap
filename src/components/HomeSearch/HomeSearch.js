import React from "react";
import { StatusBar, Text, View } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Entypo from "react-native-vector-icons/Entypo";

import styles from './styles.js';

const HomeSearch = (props) => {
  return (
    <View>
      {/* Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>

        <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} />
            <Text>Now</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16} />

        </View>
      </View>
      {/* Previous destination */}
        <View style={styles.row} >
            <View style={styles.iconContainer}>
                <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
            </View>
            <Text style={styles.destinationText}>
                Spin Ngtclub
            </Text>
        </View>
      {/* Home destination */}
      <View style={styles.row} >
            <View style={[styles.iconContainer, {backgroundColor:'#218cff'}]}>
                <Entypo name={'home'} size={20} color={'#ffffff'} />
            </View>
            <Text style={styles.destinationText}>
                Spin Ngtclub
            </Text>
        </View>
    </View>
  );
};
export default HomeSearch;
