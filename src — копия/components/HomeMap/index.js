import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import cars from "../../assets/data/cars";

const HomeMap = (props) => {
  const getImage = (type) => {
    if (type === "UberX") {
      //    alert("../../assets/images/UberXL.png");
      return require("../../assets/images/UberX.png");
    }
    if (type === "Comfort") {
      //   alert("../../assets/images/UberXL.png");
      return require("../../assets/images/Comfort.png");
    }
    if (type === "UberXL") {
      //  alert("../../assets/images/UberXL.png");
      return require("../../assets/images/UberXL.png");
    }
  };
  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}
        >
          <Image
            style={{ width: 70, height: 70, resizeMode: "contain" }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};
export default HomeMap;
