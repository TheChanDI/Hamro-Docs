import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Button, Divider } from "react-native-elements";

export default class Mainscreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Image
              source={require("../assets/images/hamrodocs.png")}
              style={styles.img}
            />
            <Button
              icon={{
                name: "search",
                color: "#000000"
              }}
              title="PRESS HERE TO SEARCH"
              titleStyle={{
                color: "#888888",
                fontWeight: "normal"
              }}
              buttonStyle={{
                backgroundColor: "#ffffff",
                borderWidth: 1.5,
                borderColor: "#000000",
                marginHorizontal: "2%",
                borderRadius: 10
              }}
              onPress={() => this.props.navigation.navigate("search")}
            />
          </View>

          <View style={styles.body}>
            <View style={styles.categoryRow}>
              <View style={styles.category}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("category")}
                >
                  <Image
                    source={require("../assets/icons/menu.png")}
                    style={{ height: "85%" }}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
                <Text style={styles.categoryName}>Categories</Text>
              </View>
              <View
                style={{
                  borderColor: "#777777",
                  borderWidth: 1,
                  height: "98%",
                  marginTop: "2%"
                }}
              />
              <View style={styles.category}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("user")}
                >
                  <Image
                    source={require("../assets/icons/user.png")}
                    style={{ height: "85%" }}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
                <Text style={styles.categoryName}>User</Text>
              </View>
            </View>
            <Divider
              style={{
                marginHorizontal: "2%",
                backgroundColor: "#777777",
                height: 2
              }}
            />
            <View style={styles.categoryRow}>
              <View style={styles.category}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("request")}
                >
                  <Image
                    source={require("../assets/icons/request.png")}
                    style={{ height: "85%" }}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
                <Text style={styles.categoryName}>Request</Text>
              </View>
              <View
                style={{
                  borderColor: "#777777",
                  borderWidth: 1,
                  height: "98%",
                  marginBottom: "2%"
                }}
              />
              <View style={styles.category}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("feedback")}
                >
                  <Image
                    source={require("../assets/icons/survey.png")}
                    style={{ height: "85%" }}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
                <Text style={styles.categoryName}>Feedback</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              icon={{
                name: "info"
              }}
              buttonStyle={{
                backgroundColor: "#00BFFF",
                marginHorizontal: "2%",
                borderWidth: 1.5,
                borderRadius: 10
              }}
              title="ABOUT US"
              onPress={() => this.props.navigation.navigate("aboutus")}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F8F8FF",
    height: "100%"
  },
  header: {
    height: "40%"
  },
  body: {
    height: "50%"
    // `width: Dimensions.get('window').height
  },
  footer: {
    height: "10%",
    width: "100%",
    justifyContent: "center"
  },
  img: {
    width: "100%",
    height: "39%",
    marginTop: 50,
    marginBottom: 40
  },
  categoryName: {
    fontSize: 20,
    color: "#000000",
    marginTop: 10
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    width: "49.5%",
    height: "50%"
  },
  categoryRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: Dimensions.get("window").width
  }
});
