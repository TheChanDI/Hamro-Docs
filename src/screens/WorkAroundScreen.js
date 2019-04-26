import React, { Component } from "react";
import { Text, View, AsyncStorage, Image, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "screen1",
    title: "Simple but yet very useful app",
    images: require("../assets/images/simple.jpg"),
    text:
      "Finding documents has never been easier.\n With  few touches you can get what you want. ",

    backgroundColor: "#59b2ab"
  },
  {
    key: "screen2",
    title: "Saves your valuable time",
    images: require("../assets/images/save.jpeg"),
    text:
      "Our app not only have searching feature but also lists the documents into their respective categories.",

    backgroundColor: "#febe29"
  },
  {
    key: "screen3",
    title: "Your feedback matters!",
    images: require("../assets/images/feedback.jpg"),
    text:
      "Your opinions counts and is very highly appreciated and is important to us.",
    backgroundColor: "#22bcb5"
  }
];
export default class WorkAroundScreen extends Component {
  _renderItem = item => {
    return (
      <View style={{ flex: 1, backgroundColor: "#eaeff2" }}>
        <View style={{ marginHorizontal: "1%" }}>
          <Image
            source={item.images}
            style={{
              height: Dimensions.get("window").height - 450,
              width: "100%",
              marginTop: "15%",
              borderRadius: 4
            }}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 28,
            fontFamily: "Audrey-Normal",
            marginTop: "20%",
            color: "#696a6d",
            marginHorizontal: "1%",
            textDecorationLine: "underline"
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "ShadowsIntoLight",
            marginTop: "10%",
            color: "#7697a0",
            marginLeft: 5
            // textAlign: "justify"
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  _onDone = async () => {
    await AsyncStorage.setItem("userToken", "enterTheApp");
    this.props.navigation.navigate("home");
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
        showSkipButton
        buttonTextStyle={{ color: "#3399ff" }}
        onSkpip={this._onDone}
      />
    );
  }
}
