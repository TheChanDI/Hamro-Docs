import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Placeholder from "rn-placeholder";
import axios from "axios";

export default class ListScreen extends Component {
  state = {
    isReady: null,
    data: []
  };
  _isMounted = false;

  componentDidMount = () => {
    const data = this.props.navigation.getParam("aboutText");
    this._isMounted = true;

    axios
      .post("http://192.168.0.108:8000/category_data", {
        query: data
      })
      .then(res => {
        console.log(res);
        // JSON.parse(res);
        // console.log(res.data);
      })
      .catch(error => console.log(error));
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderData = item => {
    const { userId, title, body } = item;

    return (
      <View style={{ flex: 1 }}>
        <Placeholder.Line
          textSize={16}
          // lineNumber={3}
          // animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        >
          <View style={{ borderWidth: 1 }}>
            <Text>{userId}</Text>
            <Text>{title}</Text>
            <Text>{body}</Text>
          </View>
        </Placeholder.Line>
      </View>
    );
  };

  render() {
    const data = this.props.navigation.getParam("aboutText");

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
            List of {data}
          </Text>
        </View>

        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        >
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.renderData(item)}
          />
        </Placeholder.Line>
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
        <Placeholder.Line
          style={{
            marginTop: 20,
            height: 40,
            backgroundColor: "#f2f2f2",
            marginLeft: "5%"
          }}
          textSize={16}
          animate="fade"
          width="77%"
          color="#2132"
          onReady={this.state.isReady}
        />
      </View>
    );
  }
}
