import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { BallIndicator } from "react-native-indicators";
import Modal from "react-native-modal";

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docdata: [],
      item: this.props.data,
      modalVisible: false,
      loading: false
    };
  }

  showModal = user => {
    this.setState({ loading: true });
    fetch("http://192.168.0.108:8000/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: user
      })
    })
      .then(res => res.json())
      .then(response => {
        this.setState({ docdata: response.data, loading: false });
      })
      .catch(error => {});
    this.setState({
      modalVisible: true
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.showModal(this.state.item)}>
          <ListItem title={this.state.item} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Modal
            animationIn="slideInUp"
            animationOutTiming={1}
            onBackButtonPress={() => this.setState({ modalVisible: false })}
            onBackdropPress={() => this.setState({ modalVisible: false })}
            backdropOpacity={0.5}
            hasBackdrop={true}
            animationOut="fadeOut"
            visible={this.state.modalVisible}
          >
            <View
              style={{
                height: 550,
                borderRadius: 4,
                elevation: 4,
                marginHorizontal: "5%",
                backgroundColor: "#f2f2f2",
                alignItems: "center"
              }}
            >
              {this.state.loading ? <BallIndicator color="#3399ff" /> : null}
              {this.state.docdata.map(eachitem => (
                <View>
                  {eachitem.doc.map(eachdoc => (
                    <Text
                      style={{
                        color: "#464443",
                        marginTop: 12,
                        textAlign: "left",
                        fontSize: 15
                      }}
                    >
                      {eachdoc}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </Modal>
        </View>
        {/* <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({ modalVisible: false });
            }}
          >
            {this.state.loading ? <BallIndicator color="#3399ff" /> : null}
            <View>
              <View>
                {this.state.docdata.map(eachitem => (
                  <View>
                    {eachitem.doc.map(eachdoc => (
                      <Text
                        style={{
                          color: "#464443",
                          marginTop: 12,
                          textAlign: "left",
                          fontSize: 15
                        }}
                      >
                        {eachdoc}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </Modal>
        </View> */}
      </View>
    );
  }
}
