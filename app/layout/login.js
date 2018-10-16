import React, {Component} from 'react';
import {ActivityIndicator , StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from '../components/header';
import CustomTextInput from '../components/customTextInput';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            error: '',
            data:[]
        }
    }

    componentDidMount(){
        fetch("http://www.json-generator.com/api/json/get/ckNckvlAGG?indent=2")
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({isLoading: false, data: data})
        })
        .catch(error => {
            this.setState({isLoading: false, error: error})
        })
    }

    render(){
        if(this.state.isLoading){
            return (
                <View style={styles.view}>
                    <View style={{height:80}}>
                        <Header title='Message' screenType='signin'/>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <ActivityIndicator/>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.view}>
                <View style={{height:80}}>
                    <Header title='Message' screenType='signin'/>
                </View>
                <View style={{flex:1}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => <CustomTextInput item={item}>{item.name}</CustomTextInput>}
                        keyExtractor={({name}, index) => name}/>
                </View>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#ffffff'
    }
})