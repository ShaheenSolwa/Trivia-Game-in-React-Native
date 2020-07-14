import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from './styles';

export default function Question1({ navigation }) {

    const [answer, setAnswer] = useState();
    const Question = "What was Nelson Mandela's middle name?";
    var ScoreQ1 = 0;

    const pressHandler = () => {
      navigation.goBack();
    }

    const fowardHandler = () => {
        if (answer == "Rolihlahla"){
          scoreQ1 = scoreQ1 + 1;
        }
        navigation.navigate('Question2')
    }

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>QUESTION 1</Text>
        <Text style={globalStyles.titleText}></Text>
        <Text style={globalStyles.titleText}>{Question}</Text>
        <TextInput style={globalStyles.input} ></TextInput>
        <Button title='Question 2' onPress={fowardHandler} style={globalStyles.button}/>
        <Text style={globalStyles.titleText}></Text>
        <Button title='Go Back' onPress={pressHandler} style={globalStyles.button}/>
      </View>
    );
  }