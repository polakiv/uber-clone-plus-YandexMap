import React, { useState } from "react";
import { StatusBar, Text, View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles.js";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = (props) => {
  const initialState = "";
  const [fromText, setFromText] = useState(initialState);
  const [destinationText, setDestinationText] = useState(initialState);

  
  const[originPlace,setOriginPlace] = useState('');
  const [destinationPlace,setDestinationPlace] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}> 

        <GooglePlacesAutocomplete style={styles.TextInput}
          onChangeText={setFromText}
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "",
            language: "en",
          }}
          requestUrl={{
            useOnPlatform: 'web', // or "all"
            url:
              'https://api./get?url=https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
          }}
        />
        <GooglePlacesAutocomplete style={styles.TextInput}
          onChangeText={setDestinationText}
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "",
            language: "en",
          }}
          requestUrl={{
            useOnPlatform: 'web', // or "all"
            url:
              'https://api/get?url=https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
          }}
        />
      </View>

    </SafeAreaView>
  );
};
export default DestinationSearch;
