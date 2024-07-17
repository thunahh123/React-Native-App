import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList } from 'react-native';
import ButtonBasics from './ButtonBasics';
// import FlatListBasics from './FlatList';
import SectionListBasics from './SectionList';

export default function App() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      {/* <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={text} onChangeText={text => setText(text)} />
      <Text>Text input: {text}</Text>
      <ButtonBasics/> */}
      {/* <FlatListBasics/> */}
      <FlatList
        ListHeaderComponent=
        {<SafeAreaView>
          <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={text} onChangeText={text => setText(text)} />
      <Text>Text input: {text}</Text>
      <ButtonBasics/>
        </SafeAreaView>}
        ListFooterComponent= {
          <SafeAreaView>
             <SectionListBasics/>
          </SafeAreaView>
        }
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'Jimmy'}
        ]}
        renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}/>
      {/* <SectionListBasics/> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
}
});
