import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from './styles';

export default function Question3({ navigation }) {

  const [answer, setAnswer] = useState();
  const Question = "Which boxer was known as 'The Greatest' and 'The People's Champion'?";
  var ScoreQ3 = 0;

  const pressHandler = () => {
    navigation.goBack();
  }

  const fowardHandler = () => {
      if (answer == "Muhammad Ali"){
        scoreQ3 = scoreQ3 + 1;
      }
      navigation.navigate('Question4')
  }
  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>QUESTION 3</Text>
        <Text></Text>
        <Text style={globalStyles.titleText}>{Question}</Text>
        <TextInput style={globalStyles.input} ></TextInput>
        <Button title='Question 3' onPress={fowardHandler} />
        <Text></Text>
        <Button title='Go Back' onPress={pressHandler} />
      </View>
    );
  }