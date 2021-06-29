import React from "react";
import { Image, Text, View } from "react-native";
import { YMaps, Map, Placemark, RouteButton, GeolocationControl,RoutePanel  } from "react-yandex-maps";
import  PlaceRow from '../PlaceRow/PlaceRow.js';
import cars from "../../assets/data/cars";

const options = {
  suppressMapOpenBlock: true
}
const mapState = { center: [47.94809795465031, 37.69364626826168], zoom: 12 };
const DestinationSearch = (props) => {
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
    <View>
    <YMaps
      style={{ flex: 1, width: "100%", height: "100%" }}
      query={{ apikey: "77344b8e-1d6e-4ba9-be6c-dfe62831be7a" }}
    >
      <Map
       options={options}
        modules={["templateLayoutFactory", "layout.ImageWithContent"]}
        state={mapState}
        width={"100%"}
        height={600}
        rotate="85deg"
        onApiAvaliable={(ymaps) => this.onApiAvaliable(ymaps)}
      >
         <RouteButton instanceRef={ref => {
            if (ref) {
              ref.routePanel.state.set({
                from: "Москва",
                to: "",
                type: "auto"
              });
              const obj = ref.routePanel.getRouteAsync()
              obj.then(function (multiRoute) {
                multiRoute.model.events.add('requestsuccess', function () {
                  const activeRoute = multiRoute.getActiveRoute()
                  if (activeRoute) {
                    var distance = activeRoute.properties.get('distance')
                    console.log('POPAL', distance);
                    db.collection('Trips').doc(id).set({
                      distance: distance
                    }, { merge: true })
                  }
                })
              })

            }
          }}  
          options={{
            float: "right",
            size: "large",
            popupWidth:'210px',
            maxWidth:'210px', 
          }}
          state={{
            expanded: "true", 
            popupWidth:'210px', 
          }}
          />
          
           <GeolocationControl options={{ float: 'left' }} />
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
    <PlaceRow  />
    </View>
  );
  console.log(this.router.url); //  /routename
  getRoute() 
  localStorage.setItem('lng', data)
};
export default DestinationSearch;
