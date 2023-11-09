import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import Lottie from "lottie-react-native";
import { ImageBackground } from "react-native";

const data = [
  {
    id: "1",
    // image: require("../assets/chatbot.png"),
    image: require("../assets/instagram.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card2.png"),
    screen: "Unfollowers",
  },

  {
    id: "2",
    // image: require("../assets/recommended.png"),
    image: require("../assets/like.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card9.png"),
    screen: "EngagementScreen",
  },
  {
    id: "3",
    // image: require("../assets/chatbot.png"),
    image: require("../assets/instagram.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card11.png"),
    screen: "Unfollowers",
  },

  {
    id: "4",
    // image: require("../assets/recommended.png"),
    image: require("../assets/like.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card4.png"),
    screen: "EngagementScreen",
  },
  {
    id: "5",
    // image: require("../assets/chatbot.png"),
    image: require("../assets/instagram.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card5.png"),
    screen: "Unfollowers",
  },

  {
    id: "6",
    // image: require("../assets/recommended.png"),
    image: require("../assets/like.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card6.png"),
    screen: "EngagementScreen",
  },
  {
    id: "7",
    // image: require("../assets/chatbot.png"),
    image: require("../assets/instagram.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card7.png"),
    screen: "Unfollowers",
  },

  {
    id: "8",
    // image: require("../assets/recommended.png"),
    image: require("../assets/like.json"),
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card12.png"),
    screen: "EngagementScreen",
  },
];
const CardData = [
  {
    id: "3",
    image: require("../assets/trade1.json"),
    description: "Trade",
    screen: "Unfollowers",
  },
  {
    id: "4",
    image: require("../assets/transfer.json"),
    description: "Transfer",
    screen: "Unfollowers",
  },
  {
    id: "5",
    image: require("../assets/ben.json"),
    description: "Beneficiaries",
    screen: "Unfollowers",
  },
  {
    id: "6",
    image: require("../assets/qr1.json"),
    description: "QR Code",
    screen: "Unfollowers",
  },
];

const Home = () => {
  const location = "Lagos";

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Karah");
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.HelloText}>Hello John</Text>
          <Text style={styles.descText1}>Feel free to Explore this App 🚀</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Image
            source={require("../assets/profile.png")}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        pagingEnabled
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            // style={styles.ButtonContainer}
          >
            <ImageBackground
              source={item.backgroundImage}
              style={styles.ButtonContainer}
            >
              <View style={styles.profileContainer}>
                <Text style={styles.descText}>{item.description}</Text>
                <Text style={styles.mainText}>{item.title}</Text>
                <Text style={styles.acctText}>{item.account}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
              <View style={styles.profileContainer}>
                <Image
                  source={require("../assets/Chips.png")}
                  // resizeMode="cover"
                  style={styles.chipimg}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.descText2}>Explore 🚀</Text>
      <FlatList
        horizontal
        pagingEnabled
        data={CardData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={styles.ServicesContainer}
          >
            <View style={styles.profileContainer}>
              <View>
                <Lottie
                  source={item.image}
                  autoPlay
                  loop
                  style={styles.serviceImg}
                />
              </View>
              <Text style={styles.serviceText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.descText2}>Recent Transactions 🚀</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HeaderContainer: {
    display: "flex",
    // padding: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  FlatList: {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
  },

  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnImg: {
    marginLeft: 4,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },

  chipimg: {
    marginLeft: 4,
    height: 70,
    width: 30,
    resizeMode: "contain",
  },

  container: {
    // flex: 1,
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
    fontSize: 25,
    fontWeight: 700,
    textAlign: "left",
    paddingBottom: 10,
    paddingLeft: 0,
    paddingTop: 20,
  },

  descText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "left",
    paddingLeft: 0,
    paddingBottom: 5,
  },
  acctText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 300,
    textAlign: "left",
    paddingLeft: 0,
    // paddingBottom: 5,
    paddingTop: 3,
  },
  nameText: {
    color: "#898A8B",
    fontSize: 11,
    fontWeight: 300,
    textAlign: "left",
    paddingLeft: 0,
    // paddingBottom: 5,
    paddingTop: 4,
  },
  descText1: {
    color: "#898A8B",
    fontSize: 13,
    fontWeight: 600,
    textAlign: "left",
    paddingBottom: 20,
    paddingLeft: 0,
  },
  descText2: {
    color: "#898A8B",
    fontSize: 15,
    fontWeight: 400,
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 0,
  },

  ButtonContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    padding: 9,
    marginBottom: 16,
    marginRight: 12,
    paddingRight: 23,
    paddingVertical: 20,
    borderRadius: 6,
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

  ServicesContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    padding: 9,
    marginBottom: 16,
    marginRight: 12,
    paddingRight: 20,
    // paddingVertical: 10,
    borderRadius: 6,
  },
  serviceImg: {
    // marginRight: 4,
    height: 55,
    width: 35,
    resizeMode: "contain",
    alignSelf: "center",
  },
  serviceText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    paddingLeft: 0,
    paddingBottom: 5,
  },
});
