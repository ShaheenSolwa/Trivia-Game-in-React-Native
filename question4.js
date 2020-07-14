import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from './styles';

export default function Question4({ navigation }) {

  const [answer, setAnswer] = useState();
  const Question = "In what year was the first ever Wimbledon Championship held?";
  var ScoreQ4 = 0;

  const pressHandler = () => {
    navigation.goBack();
  }

  const fowardHandler = () => {
      if (answer == "1877"){
        scoreQ4 = scoreQ4 + 1;
      }
      navigation.navigate('Question5')
  }

  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>QUESTION 4</Text>
        <Text></Text>
        <Text style={globalStyles.titleText}>{Question}</Text>
        <TextInput style={globalStyles.input} ></TextInput>
        <Button title='Question 4' onPress={fowardHandler} />
        <Text></Text>
        <Button title='Go Back' onPress={pressHandler} />
      </View>
    );
  }