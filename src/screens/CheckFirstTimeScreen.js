import React, { Component } from "react";
import { AsyncStorage } from "react-native";

export default class CheckFirstTimeScreen extends Component {
  componentDidMount() {
    this.appLoad();
  }

  appLoad = async () => {
    const UserToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(UserToken ? "AppContinue" : "WorkAround");
  };

  render() {
    return null;
  }
}
