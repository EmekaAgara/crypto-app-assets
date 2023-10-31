import React, { useState, useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
  Dimensions,
  StyleSheet,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import BottomSheet from "@gorhom/bottom-sheet";

function Unfollowers() {
  const [followersJson, setFollowersJson] = useState(null);
  const [followingJson, setFollowingJson] = useState(null);
  const [output, setOutput] = useState("");
  const { height } = useWindowDimensions();

  const [selectedFile, setSelectedFile] = useState(null);
  const [selecteddFile, setSelecteddFile] = useState(null);

  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const navigation = useNavigation();

  const onSignupPressed = () => {
    navigation.navigate("Signup");
  };

  const onLoginPressed = () => {
    navigation.navigate("Home");
  };

  const onOrganizationPressed = () => {
    navigation.navigate("Home");
  };

  const processJsonFiles = () => {
    try {
      if (followersJson && followingJson) {
        const followersData = followersJson;
        const followingData = followingJson;

        const followersList = followersData.map((follower) => {
          return follower.string_list_data[0].value;
        });

        const nonFollowers = followingData.relationships_following.filter(
          (following) => {
            const followingValue = following.string_list_data[0].value;
            return followersList.indexOf(followingValue) === -1;
          }
        );

        setOutput(nonFollowers);
        setIsBottomSheetOpen(true);
      } else {
        setOutput("Please select both JSON files.");
        Alert.alert(
          "Ooops 😩 ",
          "An error occurred while picking a JSON file."
        );
      }
    } catch (error) {
      // Handle errors by displaying an alert
      Alert.alert(
        "Ooops 😩 ",
        "An error occurred: Please Check if you selected the correct files"
      );
    }
  };

  const handleFollowersJsonUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/json",
      });

      if (result.type === "success") {
        const fileContents = await fetch(result.uri).then((res) => res.text());
        setFollowersJson(JSON.parse(fileContents));
        setSelectedFile(result);
      } else {
        setOutput("Please select both JSON files.");
        Alert.alert(
          "Ooops 😩 ",
          "An error occurred while picking a JSON file."
        );
      }
    } catch (error) {
      // console.log(error);
      Alert.alert("Ooops 😩 ", "Something went wrong");
    }
  };

  const handleFollowingJsonUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/json",
      });

      if (result.type === "success") {
        const fileContents = await fetch(result.uri).then((res) => res.text());
        setFollowingJson(JSON.parse(fileContents));
        setSelecteddFile(result);
      } else {
        setOutput("Please select both JSON files.");
        Alert.alert("Error", "An error occurred while picking a JSON file.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while picking a JSON file.");
      // console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Image
          source={require("../assets/tride.png")}
          style={[styles.logo, { height: height * 0.2 }]}
        />
        <Text style={styles.title}>Select Files</Text>

        <TouchableOpacity
          onPress={handleFollowersJsonUpload}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>
            {selectedFile ? selectedFile.name : "Select Folowers.json File"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFollowingJsonUpload}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>
            {selecteddFile ? selecteddFile.name : "Select Folowing.json File"}
          </Text>
        </TouchableOpacity>

        <CustomButton text="Submit" onPress={processJsonFiles} />
        <Text style={styles.text} onPress={onOrganizationPressed}>
          How it works ?
          <Text style={styles.link} onPress={onOrganizationPressed}>
            {/* How it works */}
          </Text>
        </Text>

        <Modal
          animationType="slide"
          transparent={true}
          // We use the state here to toggle visibility of Bottom Sheet
          visible={isBottomSheetOpen}
          // We pass our function as default function to close the Modal
          onRequestClose={handleCloseBottomSheet}
        >
          <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
            <View
              style={{
                flex: 0,
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Unfollowers List
              </Text>
              <TouchableOpacity onPress={handleCloseBottomSheet}>
                <Image source={require("../assets/close.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: 6 }}>
              <FlatList
                style={{
                  // flexDirection: "row",
                  // alignItems: "center",
                  width: "100%",
                }}
                data={output}
                // numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `https://instagram.com/${item.string_list_data[0].value}`
                      )
                    }
                    style={styles.FollowCard}
                  >
                    <Image
                      source={{
                        uri: `https://ui-avatars.com/api/?name=${item.string_list_data[0].value}&background=0D8ABC&color=fff`,
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10,
                        marginBottom: 1,
                      }}
                    />
                    <Text
                      onPress={() =>
                        Linking.openURL(
                          `https://instagram.com/${item.string_list_data[0].value}`
                        )
                      }
                      style={{ color: "gray" }}
                    >
                      {item.string_list_data[0].value}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>

    // <View
    //   style={{
    //     flex: 1,
    //     paddingTop: "30%",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Button
    //     title="Choose Followers.Json"
    //     onPress={handleFollowersJsonUpload}
    //   />
    //   <Button
    //     title="Choose Following.Json"
    //     onPress={handleFollowingJsonUpload}
    //   />
    //   <Button title="Submit" onPress={processJsonFiles} />
    //   <Text style={{ marginTop: 20, fontWeight: "bold" }}>
    //     Unfollowers List
    //   </Text>
    //   <FlatList
    //     data={output}
    //     keyExtractor={(item, index) => index.toString()}
    //     renderItem={({ item, index }) => (
    //       <View style={{ flexDirection: "row", alignItems: "center" }}>
    //         <Image
    //           source={{
    //             uri: `https://ui-avatars.com/api/?name=${item.string_list_data[0].value}&background=0D8ABC&color=fff`,
    //           }}
    //           style={{
    //             width: 50,
    //             height: 50,
    //             borderRadius: 25,
    //             marginRight: 10,
    //           }}
    //         />
    //         <Text
    //           onPress={() =>
    //             Linking.openURL(
    //               `https://instagram.com/${item.string_list_data[0].value}`
    //             )
    //           }
    //           style={{ color: "blue" }}
    //         >
    //           {item.string_list_data[0].value}
    //         </Text>
    //       </View>
    //     )}
    //   />
    // </View>
  );
}

export default Unfollowers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#080808",
  },

  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: "40%",
    backgroundColor: "#080808",
    height: "100%",
  },

  logo: {
    width: "70%",
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 10,
    resizeMode: "cover",
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
    margin: 10,
    alignSelf: "flex-start",
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#4765A9",
  },

  ButtonContainer: {
    backgroundColor: "#141518",
    width: "100%",
    // borderColor:'#899',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 6,
    padding: 18,
  },

  FollowCard: {
    backgroundColor: "#202020",
    width: "100%",
    // borderColor:'#899',
    borderWidth: 1,
    borderRadius: 5,
    // paddingHorizontal: 10,
    // marginVertical: 6,
    padding: 14,
    marginBottom: 10,

    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  ButtonText: {
    color: "#818589",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },

  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    // alignItems: "left",
    backgroundColor: "black",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 15,
    bottom: 0,
    borderWidth: 0.3,
    borderColor: "gray",
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "white",
  },
});
