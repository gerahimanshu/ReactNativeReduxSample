import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/listItem'
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';

class Dummy extends Component{

    constructor(props){
        super(props);
        this.state = {
            placeName: ''
        }
    }

    placeNameChangeHandler = (value) => {
        this.setState({
          placeName: value
        });    
    }

    placeSubmitHandler(dispatch){
        dispatch(addPlace(this.state.placeName))
    }

    navigateToOtherScreen(){
        this.props.navigation.navigate('Dummy')
    }
renderItem=( info) => {
    return(<ListItem 
        placeName={ info.item.value }
        navigate={this.navigateToOtherScreen.bind(this)}
    />)
    
    }
    placesOutput = () => {
        return (
            <FlatList style = { styles.listContainer }
                data = { this.props.places }
                keyExtractor={(item, index) => index.toString()}
                renderItem = {this.renderItem}
            />
        )
    }

    render(){
        const {dispatch} = this.props;
        return(
            <View style={ styles.container }>
                <View style = { styles.inputContainer }>
                    <TextInput
                        placeholder = "Search Places"
                        style = { styles.placeInput }
                        onChangeText = { this.placeNameChangeHandler }
                    ></TextInput>
                    <Button title = 'Add' 
                        style = { styles.placeButton }
                        onPress = { () => this.placeSubmitHandler(dispatch) } />
                </View>
                <View style = { styles.listContainer }>
                    { this.placesOutput() }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    placeInput: {
      width: '70%'
    },
    placeButton: {
      width: '30%'
    },
    listContainer: {
      width: '100%'
    }
  });

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(Dummy)