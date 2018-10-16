import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Header extends Component{
    render(){
        
        //destructuring props...
        const {title} = this.props;
        return(
            <LinearGradient 
                colors={['rgb(255,63,178)', 'rgb(108,143,209)', 'rgb(37,204,199)']} 
                style={{flex:1, height:80, flexDirection:'row'}}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            >
                <StatusBar 
                    backgroundColor="transparent"
                    barStyle="light-content" 
                    hidden={false} 
                    translucent={true} 
                />
                <View style={styles.View}>
                    <Image 
                        source={require('../assets/back.png')}
                        style={styles.crossImage}
                    />
                    <View style={styles.text}>
                        <Text style={{color:'#ffffff', fontWeight:'bold', fontSize:18}}>{title}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{color:'#ffffff', fontSize:18}}>New</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        flexDirection:'row',
        padding:20,
        marginTop:20,
    },
    text:{
        flex:1,
        alignItems:'center',
    },
    crossImage:{
        height:20,
        width:20,
    }
})