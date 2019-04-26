import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  SafeAreaView,
  Dimensions
} from "react-native";
import { Button, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default class RequestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      userid: ""
    };
  }

  request = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        request: this.state.text,
        emailid: this.state.userid
      })
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    this.setState({
      text: "",
      userid: ""
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <View
            style={{
              height: 220,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../assets/images/hamrodocs.png")}
              style={styles.img}
              resizeMode={"contain"}
            />
          </View>
          <TextInput
            style={styles.reqdoc}
            placeholder=" What related document you want ? "
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TextInput
            style={styles.reqdoc}
            placeholder=" Enter your email address(optional) "
            onChangeText={userid => this.setState({ userid })}
            value={this.state.userid}
          />
          <Button
            title="Submit"
            buttonStyle={{
              borderRadius: 10,
              width: "100%",
              backgroundColor: "#1E90FF"
            }}
            onPress={this.request}
          />
          <Card title="Why you should enter email address ?">
            <Text
              style={{
                fontSize: 15,
                textAlign: "justify",

                color: "#696969"
              }}
            >
              If you provide us with your email address then we can directly
              send the documents you searched for in your email address as soon
              as we find the related documents you searched for.{"\n"}Thank You
              !!
            </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    marginHorizontal: "3%"
  },
  img: {
    width: "100%"
  },
  reqdoc: {
    marginTop: 0,
    marginBottom: 30,
    borderWidth: 1.5,
    borderColor: "#000000",
    borderRadius: 10,
    width: "96%",
    marginLeft: "2%",
    fontSize: 20
  }
});
