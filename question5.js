import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from './styles';

export default function Question5({ navigation }) {

  const [answer, setAnswer] = useState();
  const Question = "Who is often called the father of the computer?";
  var ScoreQ5 = 0;

  const pressHandler = () => {
    navigation.goBack();
  }

  const fowardHandler = () => {
      if (answer == "Charles Babbage"){
        scoreQ5 = scoreQ5 + 1;
      }
      navigation.navigate('Results')
  }
  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>QUESTION 5</Text>
        <Text></Text>
        <Text style={globalStyles.titleText}>{Question}</Text>
        <TextInput style={globalStyles.input} ></TextInput>
        <Button title='Finish' onPress={fowardHandler} />
        <Text></Text>
        <Button title='Go Back' onPress={pressHandler} />
      </View>
    );
  }
