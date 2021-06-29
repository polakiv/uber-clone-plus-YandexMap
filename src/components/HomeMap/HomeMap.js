import React from "react";
import { Image, Text, View } from "react-native";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import cars from "../../assets/data/cars";

const mapState = { center: [47.94809795465031, 37.69364626826168], zoom: 12 };
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
    <YMaps
      style={{ flex: 1, width: "100%", height: "100%" }}
      query={{ apikey: "77344b8e-1d6e-4ba9-be6c-dfe62831be7a" }}
    >
      <Map
        modules={["templateLayoutFactory", "layout.ImageWithContent"]}
        state={mapState}
        width={"100%"}
        height={600}
        rotate="85deg"
      >
        {cars.map((car) => (
          <Placemark
            style={{
              width: 10,
              transform: [{ rotate: "90deg" }],
            }}
            key={car.id}
            geometry={{
              type: "Point",
              coordinates: [car.latitude, car.longitude],
            }}
            properties={{
              hintContent: car.type,
              balloonContent: car.type,
              iconCaption: car.type,
              iconImageRotation: 150,
            }}
            modules={["geoObject.addon.hint"]}
            options={{
              iconLayout: "default#image",
              iconImageHref: getImage(car.type),
              iconImageSize: [74, 61],
              iconImageOffset: [-3, -42],
              iconImageRotation: 150,
            }}
          />
        ))}
      </Map>
    </YMaps>
  );
};
export default HomeMap;
