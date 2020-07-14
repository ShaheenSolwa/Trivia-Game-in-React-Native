import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';
import Home from './home';
import Results from './results';

const screens = {
  Home: {
    screen: Home,
  },
  Question1: {
    screen: Question1,
  },
  Question2:{
    screen: Question2,
  },
  Question3:{
    screen: Question3,
  },
  Question4:{
    screen: Question4,
  },
  Question5:{
    screen: Question5,
  },
  Results:{
    screen: Results,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);