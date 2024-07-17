import React from 'react';
import { FlatList, Text, View, StyleSheet, SafeAreaView } from 'react-native';



const FlatListBasics = ()=>{
     return (
            <FlatList data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'Jimmy'}
            ]}
            renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}/>
     )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});


export default FlatListBasics;