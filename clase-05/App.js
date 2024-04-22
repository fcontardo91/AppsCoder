import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import ModalCustom from "./src/components/modalCustom/modalCustom";
import TaskInput from "./src/components/taskInput/taskInput"

const taskExample = [
  {id:1, value: "Ir a comprar"},
  {id:2, value: "Sacar la basura"},
  {id:3, value: "Pasear perro"}
]

const App = () => {

  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState(taskExample)

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const handleChangeText = (text) => setTextItem(text)

  const addItem = () => {
    setItemList(currentValue => [
      ...currentValue,
      {id: Math.random().toString(), value: textItem}
    ])
    setTextItem("")
  }

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleDelete = () => {
    //guardo en filter las que no sean iguales a task
    const filter = itemList.filter( task => task!== itemSelected) 
    setItemList(filter)
    setModalVisible(false)
  }

  const handleCancelModal = () => {
    setModalVisible(false)
    setItemSelected({})
    
  }

  return(
    <View style={styles.container}>

      <TaskInput
        textItem={textItem}
        addItem={addItem}
        handleChangeText={handleChangeText}
      />

      <View style={styles.taskContainer}>  
        {/* lista optimizada */}
        <FlatList
          style={styles.flatlist}
          data={itemList}
          keyExtractor={task => task.id.toString()} //este seriaa ocmo el id del key
          renderItem={({item}) => 
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleModal(item)}>
            <Text style={styles.taskText}>{item.value}</Text>
          </TouchableOpacity>
          }
        />
      </View>

      <ModalCustom         
        handleCancelModal={handleCancelModal}
        handleDelete={handleDelete}
        itemSelected={itemSelected}
        modalVisible={modalVisible}
      />

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ff1",
      paddingTop: 60,
      alignItems: "center",
      flex: 1, // el contenedor principal ocupa toda l apantalla
    },
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
    taskContainer: {
      //borderWidth: 1,
      marginTop: 15,
      alignItems: "center",
      width: "90%",
      paddingVertical: 10,
    },
    card: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgrey",
      width: "100%",
      paddingVertical: 15,
      marginVertical: 10,
      borderRadius: 5,
    },
    taskText: {
      color: "blue",
      fontSize: 20,
      fontWeight: "bold",
    },
    flatlist: {
      width: "100%",
    },
    modalStyles: {
      backgroundColor: "#cccccc88",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    modalContainer: {
      backgroundColor: "white",
      width: "80%",
      alignItems: "center",
      gap: 20,
      paddingVertical: 20,
      borderRadius: 7
    },
    textContainer: {

    },
    btnContainer: {
      flexDirection: "row",
      gap: 20,
    },
    textModal: {
      fontWeight: "bold"
    }

})