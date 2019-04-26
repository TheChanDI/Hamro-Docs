import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import ResultScreen from "./ResultScreen";
import Placeholder from "rn-placeholder";

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: null,
      data: [],
      error: null
    };

    this.arrayholder = [];
  }
  _isMounted = false;

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this._isMounted = true;
    // const url = `https://randomuser.me/api/?&results=20`;
    const url = "http://192.168.0.108:8000/available";
    // const url = 'http://192.168.1.71:8000/available';
    this.setState({ loading: true });

    fetch(url, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        if (this._isMounted) {
          this.setState({
            //   data: res.results,
            data: res.data,
            error: res.error || null,
            isReady: true
          });
          this.arrayholder = res.data;
        }

        // this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
          //marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
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
            renderItem={({ item }) => <ResultScreen data={item} />}
            //   renderItem={({ item }) => (
            //     <ListItem
            //       leftAvatar={{ source: { uri: item.picture.thumbnail } }}
            //       title={`${item.name.first} ${item.name.last}`}
            //       subtitle={item.email}
            //     />
            //   )}
            //   keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
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

export default SearchScreen;

// -----------------------------------------------------

// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     View,
//     FlatList,
//     SafeAreaView,
//     ActivityIndicator,
//     Text
// } from 'react-native';
// import { SearchBar, ListItem } from 'react-native-elements';
// import ResultScreen from './ResultScreen';

// export default class SearchScreen extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             loading: false,
//             data: [],
//             error: null,
//             refreshing: false,
//         };
//         this.arrayholder = [];
//     }

//     componentDidMount() {
//         this.makeRemoteRequest();
//     }

//     makeRemoteRequest = () => {
//         // const url = 'http://192.168.1.71:8000/available';
//         const url = 'http://192.168.1.71:8000/api/available/'
//         this.setState ({ loading: true });

//         console.log("hello")
//         fetch(url, {
//             method: 'POST',
//         })
//         .then(res => res.json())
//         .then(res => {
//             console.log('data:',res)
//             this.setState({
//                 data: res.data,
//                 error: res.error || null,
//                 loading: false,
//                 refreshing: false,
//             });
//             this.arrayholder = res.data;
//         }).catch(error => {
//             this.setState ({ error, loading: false});
//         });
//         this.setState({
//             loading: false,
//             refreshing: false
//         })
//     };

//     searchFilterFunction = (text) => {
//         const newData = this.arrayholder.filter(item => {
//             const itemData = `${item.toUpperCase()}`;
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;
//         });
//         console.log(newData)
//         this.setState({ data: newData });
//       };

//     handleRefresh = () => {
//         this.setState (
//             {
//                 refreshing: true
//             },
//             () => {
//                 this.makeRemoteRequest();
//             }
//         );
//     };

//     handleLoadMore = () => {
//         this.setState(
//             () => {
//                 this.makeRemoteRequest();
//             }
//         );
//     };

//     renderSeparator =() => {
//         return (
//             <View
//                 style = {{
//                     height: 1,
//                     width: "86%",
//                     backgroundColor: "CED0CE",
//                     marginLeft: "14%"
//                 }}
//             />
//         );
//     };

//     renderHeader = () => {
//         return (
//             <SearchBar
//                 placeholder="Type Here..."
//                 lightTheme
//                 onChangeText={text => this.searchFilterFunction(text)}
//                 autoCorrect={false}
//             />
//         )
//       };

//     renderFooter = () => {
//         if (!this.state.loading) {
//             return null;
//         }
//         else {
//             return (
//                 <View
//                   style={{
//                     paddingVertical: 20,
//                     borderTopWidth: 1,
//                     borderColor: "#CED0CE"
//                   }}>

//                   <ActivityIndicator animating size="large" />
//                 </View>
//             );
//         }
//     };

//     render() {
//         return (
//             <SafeAreaView style = {styles.mainContainer}>
//                 {/* <ListItem containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}> */}
//                     {/* {this.state.spinner ? <ActivityIndicator style = {{ justifyContent:"center", alignItems: 'center'}}/> : null} */}
//                         <FlatList
//                         data= {this.state.data}
//                         renderItem={({ item }) => <ResultScreen data={item}/>}
//                         // keyExtractor={item => item.task_name}
//                         // ItemSeparatorComponent={this.renderSeparator}
//                         // ListHeaderComponent={this.renderHeader}
//                         // ListFooterComponent={this.renderFooter}
//                         // onRefresh={this.handleRefresh}
//                         // refreshing={this.state.refreshing}
//                         // extraData = {this.state}
//                         // onEndReached={this.handleLoadMore}
//                         // onEndReachedThreshold={50}
//                         />
//                 {/* </ListItem> */}
//             </SafeAreaView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     mainContainer: {
//         backgroundColor: '#F8F8FF',
//         height: '100%'
//     },
//     searchBarContainer: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         height: 60,
//         borderBottomWidth: 2,
//         borderColor: 'lightgray',
//       },
//       textInputSearch: {
//         flex: 8,
//         borderColor: 'lightgray',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginRight: 5,
//         marginLeft: 5,
//         height: 45,
//         padding: 10
//       },
//       textSearchButton: {
//         flex: 1,
//         backgroundColor: 'lightgray',
//         borderRadius: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 10,
//         height: 45
//       },
// })
