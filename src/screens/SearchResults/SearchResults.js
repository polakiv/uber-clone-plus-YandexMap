import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
} from "react-native";
//import styles from "./styles.js";
import RouteMap from "../../components/RouteMap/RouteMap";
import HomeMap from "../../components/HomeMap/HomeMap";
import UberTypes from "../UberTypes/UberTypes";

const SearchResults = (props) => {
  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <HomeMap  />
      </View>
      <View style={{ height: 400 }}>
        <UberTypes />
      </View>
    </View>
  );
};  
export default SearchResults;
