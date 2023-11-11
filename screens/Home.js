import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const data = [
  {
    id: "1",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card9.png"),
    screen: "Development",
  },

  {
    id: "2",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card7.png"),
    screen: "Development",
  },
  {
    id: "3",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card11.png"),
    screen: "Development",
  },

  {
    id: "4",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card4.png"),
    screen: "Development",
  },
  {
    id: "5",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card5.png"),
    screen: "Development",
  },

  {
    id: "6",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card6.png"),
    screen: "Development",
  },
  {
    id: "7",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card2.png"),
    screen: "Development",
  },

  {
    id: "8",
    title: "$5,000,000",
    description: "Total Savings",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("../assets/card12.png"),
    screen: "Development",
  },
];
const CardData = [
  {
    id: "3",
    image: require("../assets/trade.json"),
    description: "Trade",
    screen: "Development",
  },
  {
    id: "4",
    image: require("../assets/transfer.json"),
    description: "Transfer",
    screen: "Development",
  },
  {
    id: "5",
    image: require("../assets/ben.json"),
    description: "Beneficiaries",
    screen: "Development",
  },
  {
    id: "6",
    image: require("../assets/qr.json"),
    description: "QR Code",
    screen: "Development",
  },
];

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
