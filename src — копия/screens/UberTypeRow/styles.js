import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //justifyContent:'space-between',
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal:10, 
  },
  time: {
    color:'#5d5d5d',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom:5,
  },
  rightContainer: {
    width: 100, 
    flexDirection:'row',
    justifyContent:'flex-end',

  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:5,
  },
});

export default styles;
