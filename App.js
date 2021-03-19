import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log("Rerendering Component"); // will be run whenever it is rerendered (whenever the state changes)
  console.log(courseGoals);

  const addGoalHandler = goalTitle => {
    console.log(goalTitle)
    if (goalTitle.length != 0) {
      setCourseGoals(currGoals => [...currGoals, {id: Math.random().toString(), value: goalTitle} ]) // making it into key-val obj, handles key uniqueness
    }
    setIsAddMode(false);  
    
    
    // setCourseGoals([...courseGoals, enteredGoal])  // ...courseGoals pulls all elements from array so we can append new items
    
  };

  const removeGoalHandler = goalId => {
    console.log("To be deleted: ", goalId);
    console.log(courseGoals);
    setCourseGoals(currGoals => {

      return currGoals.filter((goal) => goal.id !== goalId); // filters out goal with id of gaolId, returns list
    })
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      
      <GoalInput visible={isAddMode} onCancel={cancelGoalHandler} onAddGoal={addGoalHandler}
      // pass the function as a prop to GoalInput
      /> 
      <FlatList 
        keyExtractor={ (item, idx) => item.id }
        data={courseGoals} 
        // renderItem= { i => <View style={styles.listItem}><Text>{i.item.value}</Text></View>}/>
        renderItem = {i => <GoalItem id={i.item.id} onDelete={removeGoalHandler} title={i.item.value}/>}  // set properties inside our custom components as 'props'
      />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  

});
