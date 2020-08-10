
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
    Alert} from 'react-native';
import axios from 'axios';
//import {cheerio} from 'react-native-cheerio';
//import DOMParser from 'react-native-html-parser';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    title: {
        fontSize: 16,
        color: '#000',
        paddingBottom:4,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        backgroundColor:"#EEE",
        padding:4,
        margin:4,
        borderRadius:100,
        flexDirection:"row",
        alignSelf:'baseline',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

export default class CustomRow extends Component{
    state={
        url:"",
        keyword:"",
        title:"",
    }
    
    constructor(props){
        super(props);
    }
    async crawler (url) {
        const response = await axios(url);
        if(response.status==200){
            //const $ = cheerio.load(response.data);
            //let doc = new DOMParser().parseFromString(response.data,'text/html');
            let title = response.data.substr(response.data.indexOf("<title>")+7);
            title = title.substr(0,title.indexOf("</"));
            if(title.length==0){
                title = response.data.substr(response.data.indexOf("<meta name=\"title\" content=\"")+28);
                title = title.substr(0,title.indexOf("\""));
            }
            this.setState({title:title});
            console.log(this.state.title);

        }
    }
    render(){
        const { url, keyword,index } = this.props;
        const _onPressRow= () => {
            Linking.openURL(url).catch((err)=>console.error('An error occurred', err));
        }
        if(this.state.title.length==0){
            this.crawler(url);
        }
        return(
            <TouchableOpacity style={styles.container}
            onPress={_onPressRow}
            >
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {this.state.title}
                    </Text>
                    <Text style={styles.description}>
                        {keyword}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
