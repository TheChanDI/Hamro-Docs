import React, { Component } from 'react';
import {  
    StyleSheet,
    Image,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

export default class AboutUsScreen extends Component {

    render() {
        return (
            <ScrollView style = {styles.mainContainer}>
                <Image
                    source = {require('../assets/images/hamrodocs.png' )}
                    resizeMode = {'contain'}
                    style = {styles.img}
                />
                <Text style = {{ fontSize: 15, textAlign: 'justify', marginLeft: 5, marginRight: 5, color: '#696969' }}>
                This application developed by KEIV Technologies Pvt. Ltd. 
                It provides a platform for user to search for documents through 
                the app and also can request for any new type of document if not 
                listed in app or not found in app after searching.
                This is a very simple yet very useful app as it allow users to 
                search for anytype of documents and also add them in their app 
                for future use incase of lack of internet connection. User can 
                also search according to the categories the documents are listed 
                in. You can also provide valuable feedback which will help us to 
                improve our app and provide better user interface.

                {'\n'}
                {'\n'}
                <Text style = {{ fontWeight: 'bold', color: '#000000', fontSize: 20 }}>About KEIV Technologies</Text>
                {'\n'}
                {'\n'}

                KEIV Technologies is a Nepali-based startup/software company. 
                Established in 2015 as an incubator company of Kathmandu University 
                Business Incubation Center(KUBIC), the company was founded by a 
                group of Master. We are a research-based software company continuously 
                providing our services in the field of Analytics 
                (ranging from data mining to text mining), Organization Automation, 
                Social Web Mining, Sentiment Analysis etc. 
                For more info: www.keivtech.com.np, contact: 9869151535, 9847269197.</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    mainContainer: {
        backgroundColor: '#F8F8FF',
        height: Dimensions.get('window').height
     },
    img: {
        width: '100%',
    },
})
