import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  Keyboard
} from "react-native";
import { Button, Rating } from "react-native-elements";
import Dialog, { DialogContent } from "react-native-popup-dialog";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      visible: false
    };
  }

  get = () => {
    fetch("http://192.168.10.92:8000/doc_api/api//", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        feed: this.state.text
      })
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.log(error));

    this.setState({
      text: "",
      visible: true
    });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require("../assets/images/hamrodocs.png")}
          style={styles.img}
          resizeMode="contain"
        />
        <TextInput
          style={styles.feedback}
          placeholder=" Please provide your valuable feeback "
          onChangeText={text => this.setState({ text })}
          multiline={true}
          value={this.state.text}
        />
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          ratingBackgroundColor={"#F8F8FF"}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
        <Button
          title="Submit"
          buttonStyle={{
            borderRadius: 10,
            marginTop: 50,
            backgroundColor: "#1E90FF",
            marginHorizontal: "3%"
          }}
          onPress={this.get}
        />

        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
          onHardwareBackPress={() => {
            this.setState({ visible: false });
          }}
          height={100}
          width={100}
          style={styles.dialog}
        >
          <DialogContent>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000000",
                  textAlign: "center"
                }}
              >
                Thank you
              </Text>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height
  },
  img: {
    width: "100%"
  },
  feedback: {
    marginBottom: 5,
    borderWidth: 1.5,
    borderColor: "#000000",
    borderRadius: 10,
    height: "30%",
    width: "96%",
    marginLeft: "2%",
    fontSize: 20
  }
});
