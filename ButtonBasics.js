import React from 'react';
import { Button, View, StyleSheet } from 'react-native';


export default class ButtonBasics extends React.Component{
    _onPressButton(){
        alert("You tapped the button!");
    }
    render(){
        return(
            <View style={styles.container}>
                <Button onPress={this._onPressButton} title='Press Me'/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
    buttonContainer:{
        margin: 20
    },
    alternativeLayoutButtonContainer:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

// export (ButtonBasics);