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
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import BottomSheet from "@gorhom/bottom-sheet";

function Recommended() {
  const [followersJson, setFollowersJson] = useState(null);
  const [followingJson, setFollowingJson] = useState(null);
  const [output, setOutput] = useState("");
  const { height } = useWindowDimensions();

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

  const processJsonFiles = () => {
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
      }
    } catch (error) {
      console.log(error);
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Image
          source={require("../assets/karah.png")}
          style={[styles.logo, { height: height * 0.2 }]}
        />
        <Text style={styles.title}>Login to your account</Text>

        <TouchableOpacity
          onPress={handleFollowersJsonUpload}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>Folowers.json</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFollowingJsonUpload}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>Following.json</Text>
        </TouchableOpacity>

        <CustomButton text="Submit" onPress={processJsonFiles} />
        <CustomButton
          text="Have an account? Sign up"
          onPress={onSignupPressed}
          type="tertiary"
        />

        {/* <Text style={{ marginTop: 20, fontWeight: "bold" }}>
          Unfollowers List
        </Text>
        <FlatList
          data={output}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: `https://ui-avatars.com/api/?name=${item.string_list_data[0].value}&background=0D8ABC&color=fff`,
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <Text
                onPress={() =>
                  Linking.openURL(
                    `https://instagram.com/${item.string_list_data[0].value}`
                  )
                }
                style={{ color: "blue" }}
              >
                {item.string_list_data[0].value}
              </Text>
            </View>
          )}
        /> */}

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
                Unfollowers
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

export default Recommended;

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
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 10,
    resizeMode: "cover",
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    backgroundColor: "#202020",
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
});
