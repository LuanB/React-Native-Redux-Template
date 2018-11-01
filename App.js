import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterApp from './src/CounterApp'
  // connects the app to the redux

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  
  switch(action.type)
  {
    case 'INCREASE_COUNTER':
    return {counter: state.counter + 1}
    
    case 'DECREASE_COUNTER':
    return {counter: state.counter - 1 }
  }
  return state
}


const store = createStore(reducer)



class App extends React.Component {
  
  //  Internal state without Redux
  // state = {
  //   counter: 0
  // }
  // 
  // increaseCounter = () => {
  //   this.setState({counter:this.state.counter+1})
  // }
  // 
  // decreaseCounter = () => {
  //   this.setState({counter:this.state.counter-1})
  // }
  // 
  
  //**********************************************************************************
  // Store - holds all the application state
  // Action - State can be modified using actions - simple objects
  // Dispatcher - Action needs to be sent by something - dispatching an action  [onPress( () => {Dispatcher})]
  // Reducer - receives the action and modifies the state and returns the new state - pure function -
  //  only mandatory argument 
  // 
  //**********************************************************************************
  

  render() {
    return (
      // View that uses internal state:
      //
      // <View style={styles.container}>
      //   <View style={{flexDirection:'row', width:200, justifyContent: 'space-around'}}>
      //     <TouchableOpacity onPress={() => this.increaseCounter() }>
      //       <Text style={{fontSize:20}}>Increase</Text>
      //     </TouchableOpacity>
      //     <Text style={{fontSize:20}}>{this.state.counter}</Text>
      //     <TouchableOpacity onPress={() => this.decreaseCounter() }>
      //       <Text style={{fontSize:20}}>Decrease</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
      
      // counterApp
      <Provider store={store}>
      <CounterApp></CounterApp>
    </Provider>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
