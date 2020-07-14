import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from './styles';

export default function Results({ navigation }) {

    const pressHandler = () => {
      navigation.navigate('Home');
    }

    const score1 = navigation.getParam('scoreQ1');
    const score2 = navigation.getParam('scoreQ2');
    const score3 = navigation.getParam('scoreQ3');
    const score4 = navigation.getParam('scoreQ4');
    const score5 = navigation.getParam('scoreQ5');
    const total = score1+score2+score3+score4+score5;
  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>RESULTS</Text>
        <Text>YOUR RESULT IS: {score1}</Text>
        <Button title='Exit' onPress={pressHandler} />
      </View>
    );
  }