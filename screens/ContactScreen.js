import React, { PureComponent, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ActivityIndicator
        color="#3235fd"
        size="large"
        style={styles.IndicatorStyle}
      />
      <WebView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        source={{
          uri: "https://discord.com/channels/886050993802985492/930509147231895682",
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.IndicatorLoadingView}
        startInLoadingState={true}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#313338",
    maxWidth: "100%",
    paddingTop: "10%",
    // max-width: '100%',
    // overflow-x: hidden,
  },
  IndicatorStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  webview: {
    flex: 1,
    backgroundColor: "#000",
    maxWidth: "100%",
    paddingTop: "10%",
    // max-width: '100%',
    // overflow-x: hidden,
  },
});
