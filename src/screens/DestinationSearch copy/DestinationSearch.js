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
          onChangeText={setDestinationText}
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyAbt7wA6dKmcgzcd6ORVjLgzNNN8uET7UA",
            language: "en",
          }} 
        />
      </View>

    </SafeAreaView>
  );
};
export default DestinationSearch;
