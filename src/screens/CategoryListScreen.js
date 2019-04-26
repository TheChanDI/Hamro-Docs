import React, { Component } from 'react'
import { 
    SafeAreaView,
    FlatList
 } from 'react-native';
import { ListItem } from 'react-native-elements';
import ResultScreen from '../screens/ResultScreen';

 export default class CategoryListScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            listdata: [],
            item: this.props.data,
            };
        }
      showTasklist = (user) => {
        fetch("http://192.168.1.71:8000/category_data",{
             method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                query: user
            })
        })
        .then(res => res.json())
        .then(res =>
            {
                this.setState({listdata: res.data})
        });
        console.log(this.state.listdata)
      }

     render() {
         return (
            <SafeAreaView>
                <FlatList
                    data = {this.props.navigation.getParam('item', 'item')}
                    renderItem = {({ item }) => (
                        <ListItem
                        title = {item}
                        />
                    )}
                />
            </SafeAreaView>
         );
     }
 }