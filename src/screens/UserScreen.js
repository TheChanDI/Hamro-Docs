import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default class UserScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/images/underConstruction.png")}
          style={{ height: "30%", width: "100%" }}
          resizeMode="contain"
        />

        <Card
          containerStyle={{
            height: "35%",
            width: "90%",
            backgroundColor: "#f2f2f2"
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "OpenSans-Bold",
              textAlign: "center"
            }}
          >
            List of new features
          </Text>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ fontFamily: "Oswald-Light", fontSize: 25 }}>
              1.Users can save their own documents.
            </Text>
            <Text style={{ fontFamily: "Oswald-Light", fontSize: 25 }}>
              2.Users can create to-do-list for their documents.
            </Text>
          </View>
        </Card>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: "ChelseaMarket-Regular",
            marginTop: "20%"
          }}
        >
          Thank you for your patience!
        </Text>
        <SimpleLineIcons
          name="emotsmile"
          color="#3399ff"
          size={25}
          style={{ textAlign: "center" }}
        />
      </View>
    );
  }
}
