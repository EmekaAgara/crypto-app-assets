import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import Lottie from "lottie-react-native";
import CustomInput from "../components/CustomInput";
const data = [
  {
    id: "1",
    // image: require("../assets/chatbot.png"),
    image: require("../assets/tride.png"),
    title: "Instagram Unfollowers",
    description: "Get a list of your instagram unnfollowers",
    screen: "Karah",
  },

  {
    id: "2",
    // image: require("../assets/recommended.png"),
    image: require("../assets/tride.png"),
    title: "Engagements Community",
    description: "For Twitter and Instagram Engagements",
    screen: "Recommended",
  },

  {
    id: "3",
    // image: require("../assets/shopproducts.png"),
    image: require("../assets/tride.png"),
    title: "Tech School",
    description: "Learn a Tech Skill",
    screen: "ProductsScreen",
  },

  {
    id: "5",
    // image: require("../assets/shopproducts.png"),
    image: require("../assets/tride.png"),
    title: "About Us",
    description: "View products in 3D/AR Rendered scene",
    screen: "ArProductsScreen",
  },

  {
    id: "4",
    // image: require("../assets/seller.png"),
    image: require("../assets/tride.png"),
    title: "Contact Us",
    description: "Create a seller account and sell Products",
    screen: "ProductsScreen",
  },
];

const Home = () => {
  const location = "Lagos";

  const navigation = useNavigation();

  const onHomePress = () => {
    navigation.navigate("Home");
  };

  const onKarahPress = () => {
    navigation.navigate("Karah");
  };

  return (
    <View style={styles.container} behavior="padding">
      <Text style={styles.HelloText}>Tride Social</Text>
      <CustomInput name="search" placeholder="Search" />
      <Text style={styles.HelloText2}>Tride Social</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={styles.ButtonContainer}
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.profileContainer}>
              <Text style={styles.mainText}>{item.title}</Text>
              <Text style={styles.descText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 120,
    padding: 6,
    paddingHorizontal: 15,
    // display: "flex",
  },

  HelloText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "left",
    paddingBottom: 10,
  },

  cardImage: {
    // padding: 55,
    // margin: 20,
    marginLeft: 4,
    // marginTop: 1,
    height: 70,
    width: 70,
    resizeMode: "contain",
    // alignSelf: "middle",
    // position: "absolute",
  },

  mainText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "left",
    paddingBottom: 5,
    paddingLeft: 0,
  },

  descText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "left",
    paddingLeft: 0,
  },

  ButtonContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    padding: 16,
    marginBottom: 16,
  },

  CardContainer: {
    backgroundColor: "#5659C6",
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 140,
    marginBottom: 0,
    height: 100,
  },
  profileContainer: {
    flexDirection: "column",
    marginLeft: 0,
    paddingLeft: 16,
    // flex: 1,
    justifyContent: "center",
  },
});
