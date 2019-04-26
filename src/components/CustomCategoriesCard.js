import React from "react";
import { Text, View, ImageBackground } from "react-native";

const CustomCategoriesCard = props => {
  return (
    <View
      style={{
        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: "5%"
      }}
    >
      <ImageBackground
        source={props.image}
        style={{
          height: 100,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.8
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: props.textColor,
            fontFamily: "OpenSans-Bold",
            opacity: 1
          }}
        >
          {props.aboutText}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CustomCategoriesCard;
