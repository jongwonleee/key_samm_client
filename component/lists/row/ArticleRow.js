
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
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
    },
    photo: {
        height: 50,
        width: 50,
    },
});
//const CustomRow = ({ url, keyword,index }) => (
export default class CustomRow extends Component{
    render(){
        const { url, keyword,index } = this.props;
        const _onPressRow= () => {
            Linking.openURL(url).catch((err)=>console.error('An error occurred', err));
          }
        return(
            <TouchableOpacity style={styles.container}
            onPress={_onPressRow}
            >
                <Image source={{ uri: url }} style={styles.photo} />
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {url}
                    </Text>
                    <Text style={styles.description}>
                        {keyword}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
}


//export default CustomRow;