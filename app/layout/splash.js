import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default class Splash extends Component{

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2000)
    }

    render(){
        return (
            <Image 
                source={require('../assets/splash.png')}
                style={styles.view}
            />
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        height:'100%',
        width:'100%'
    }
})