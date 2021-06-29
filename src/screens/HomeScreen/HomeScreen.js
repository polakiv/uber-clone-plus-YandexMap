import React from "react";
import { Dimensions, StatusBar, Text, View } from "react-native";

import HomeMap from "../../components/HomeMap/HomeMap.js";
import HomeSearch from "../../components/HomeSearch/HomeSearch.js";

const HomeScreen = (props)=>{
    return(
        <View>
            <View style={{height:Dimensions.get('window').height - 400}}> 
            <HomeMap />
           </View>
            <HomeSearch />
        </View>
    )
}
export default HomeScreen;