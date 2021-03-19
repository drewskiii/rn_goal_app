import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Button, Modal, ProgressBarAndroid } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    };

    const addGoalAndCleanup = () => {
        props.onAddGoal(enteredGoal);
        
        setEnteredGoal("")
    };

    const cancelAndCleanup = () => {
        props.onCancel()
        setEnteredGoal("")
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                            placeholder="Course Goal" 
                            onChangeText={goalInputHandler}
                            value={enteredGoal}/>
                {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/> */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={cancelAndCleanup} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalAndCleanup}/>
                    </View>
                    
                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      },
      buttonContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
      },
      button: {
        width: "30%"
      }

});

export default GoalInput;