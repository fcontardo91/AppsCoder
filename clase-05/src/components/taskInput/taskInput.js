import { StyleSheet, TextInput, Button, View } from 'react-native'
import React from 'react'

const TaskInput = ({textItem, addItem, handleChangeText}) => {
  return (
    <View style= {styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleChangeText}
          value={textItem}
        />
        <Button title="ADD" onPress={addItem}/>
      </View>
  )
}

export default TaskInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "red",
        width: 200,
        fontSize: 16,
      },
})