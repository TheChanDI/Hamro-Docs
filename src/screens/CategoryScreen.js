import React, { Component } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import CustomCategoriesCard from "../components/CustomCategoriesCard";

const image1 = require("../assets/images/abroad.png");
const image2 = require("../assets/images/education.png");
const image3 = require("../assets/images/personal.png");
const image4 = require("../assets/images/government.jpg");

export default class CategoryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            width: "100%",
            backgroundColor: "#242855"
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontFamily: "OpenSans-Bold"
            }}
          >
            {" "}
            Categories
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate("CategoryList", {
                aboutText: "Abroad"
              })
            }
          >
            <CustomCategoriesCard
              aboutText="Abroad"
              image={image1}
              textColor="#242855"
              navigation={this.props.navigation}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate("CategoryList", {
                aboutText: "Education"
              })
            }
          >
            <CustomCategoriesCard
              aboutText="Education"
              image={image2}
              navigation={this.props.navigation}
              textColor="#17139C"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate("CategoryList", {
                aboutText: "Personal document"
              })
            }
          >
            <CustomCategoriesCard
              aboutText="Personal"
              image={image3}
              navigation={this.props.navigation}
              textColor="#FA5A26"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate("CategoryList", {
                aboutText: "Government document"
              })
            }
          >
            <CustomCategoriesCard
              aboutText="Government"
              image={image4}
              navigation={this.props.navigation}
              textColor="#49772F"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
