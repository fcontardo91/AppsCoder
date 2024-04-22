import { Button, TextInput, View, StyleSheet, Text } from "react-native";

const App = () => {
  return(
    <View style={styles.container}>
      <View style= {styles.inputContainer}>
        <TextInput style={styles.textInput}/>
        <Button title="ADD"/>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 3</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 4</Text>
        </View>
      </View>
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
      borderWidth: 1,
      marginTop: 15,
      alignItems: "center",
      width: "90%",
      paddingVertical: 10,
    },
    card: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgrey",
      width: "90%",
      paddingVertical: 15,
      marginVertical: 10,
      borderRadius: 5,
    },
    taskText: {
      color: "blue",
      fontSize: 20,
      fontWeight: "bold",
    }
})