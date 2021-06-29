import React, { useRef } from "react";
//import { Image, Text, View } from "react-native";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function RouteMap() {
  const map = useRef(null);
  const mapState = {
    center: [47.94809795465031,37.69364626826168],
    zoom: 12,
  };

  const addRoute = (ymaps) => {
    const pointA = [47.94809795465031,37.69364626826168]; // Москва
    const pointB = [47.94809795465031,37.66364626826168]; // Санкт-Петербург

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          // routingMode: "pedestrian"
        //    "auto" — автомобильная маршрутизация;
  //"masstransit" - маршрутизация с использованием общественного транспорта.
  //"pedestrian" — пешеходная маршрутизация.
  //"bicycle" - велосипедный маршрут.
          routingMode: "auto",
        },
      },
      {
        boundsAutoApply: true,
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <YMaps
      style={{ flex: 1, width: "100%", height: "100%" }}
      query={{ apikey: "-1d6e-4ba9-be6c-dfe62831be7a" }}
    >
      <Map
        style={{ flex: 1, width: "100%", height: "100%" }}
        modules={["multiRouter.MultiRoute"]}
        state={mapState}
        instanceRef={map}
        onLoad={addRoute}
      ></Map>
    </YMaps>
  );
}
