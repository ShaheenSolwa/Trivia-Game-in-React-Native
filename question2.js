import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from './styles';

export default function Question2({ navigation }) {

    const [answer, setAnswer] = useState();
    const Question = "What is the name of the forth president of the United States of America?";
    var ScoreQ2 = 0;

    const pressHandler = () => {
      navigation.goBack();
    }

    const fowardHandler = () => {
        if (answer == "James Madison"){
          scoreQ2 = scoreQ2 + 1;
        }
        navigation.navigate('Question3')
    }
  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>QUESTION 2</Text>
        <Text></Text>
        <Text style={globalStyles.titleText}>{Question}</Text>
        <TextInput style={globalStyles.input} ></TextInput>
        <Button title='Question 3' onPress={fowardHandler} />
        <Text></Text>
        <Button title='Go Back' onPress={pressHandler} />
      </View>
    );
  }