import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

 //const GOOGLE_MAPS_APIKEY = "AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk";
//const GOOGLE_MAPS_APIKEY = "AIzaSyAGs6J8iZJ7mZeP6de9SyenOcA6MwFrwJc";
const GOOGLE_MAPS_APIKEY = "AIzaSyAludDavPzTut9L6LzaxTWIp6Uiboxrbyw";
 
const RouteMap = (props) => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.150127,
    longitude: -16.269045,
  };
  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.45062,
        longitude: -16.263055,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotpink"
      >
      </MapViewDirections>
       <Marker
        coordinate={origin}
        title={'origin'} 
      />
      <Marker 
        coordinate={destination}
        title={'destination'} 
      />
    </MapView>
  );
};
export default RouteMap;
