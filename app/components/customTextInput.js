import React, {Component} from 'react';
import {
    View, 
    Image, 
    Text, 
    StyleSheet
} from 'react-native';

export default class CustomTextInput extends Component{
    render(){
        const {item} = this.props;
        if(item.hasOwnProperty('messageCount')){
            return (
                <View style={styles.container}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    <View style={styles.textView}>
                        <Text style={styles.textInput}>{item.name}</Text>
                    </View>
                    <View style={styles.messageCountView}>
                        <Text style={styles.messageCountText}>{item.messageCount}</Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <View style={styles.textView}>
                    <Text style={styles.textInput}>{item.value}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        marginLeft:14,
        marginRight:14,
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
    },
    image:{
        height:40,
        width:40,
        borderRadius:20
    },
    textView:{
        flex:1, 
        alignItems:'flex-start'
    },
    textInput:{
        marginLeft:15,
        fontSize: 14,
        color:'#808080',
        fontWeight:'bold',
    },
    messageCountView:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#ff3fb2',
        alignItems:'flex-end',
        borderRadius:15
    },
    messageCountText:{
        color:'#ffffff',
    }
})