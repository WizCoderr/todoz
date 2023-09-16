import {
    Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";
const TodoScreen = () => {
  // init Local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  // Add Todo
  const handleAddTodo = () => {
    if(todo === "") {
        Alert.alert('Add Todo', 'Please add a todo ', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        return;
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };
    // Del Todo
  const handleDelTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
    // Edit Todo
  const handleEditTodo = (todos) => {
    setEditTodo(todos);
    setTodo(todos.title);
  };
  // Save Todo
  const handleSaveTodo=()=>{
    const updatedTodo = todoList.map((item)=>{
        if(item.id === editTodo.id){
            return {...item,title:todo}
        }
        return item;
    })
    setTodoList(updatedTodo);
    setEditTodo(null);
    setTodo("")
  }
  // render Todo
  const renderTodo = ({ item, index }) => {
    return (
      <View style={styles.renderTodoView}>
        <Text style={styles.renderTodoViewText}>{item.title}</Text>
        <IconButton
          icon={"pencil"}
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon={"trash-can"}
          iconColor="#fff"
          onPress={() => handleDelTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.addTodo}
        placeholder="Add a todo"
        value={todo}
        onChangeText={(userInput) => {
          console.log(userInput);
          setTodo(userInput);
        }}
      />
      {/* Button */}
      {
        editTodo?(<TouchableOpacity style={styles.btn} onPress={() => handleSaveTodo()}>
        <Text style={styles.txt}>Save Todo</Text>
      </TouchableOpacity>):(
        <TouchableOpacity style={styles.btn} onPress={() => handleAddTodo()}>
        <Text style={styles.txt}>Add Todo</Text>
      </TouchableOpacity>
      )
      }
      {/* List of data */}
      <FlatList data={todoList} renderItem={renderTodo} />

      {todoList.length <= 0 &&<Fallback/>}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  addTodo: {
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1e90ff",
  },
  mainView: { margin: 16 },
  btn: {
    backgroundColor: "#000",
    borderRadius: 10,
    marginVertical: 12,
    alignItems: "center",
    marginHorizontal: 16,
    paddingVertical: 16,
  },
  txt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  renderTodoView: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: "#1e90ff",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: Platform.OS == "android" ? 10 : 0,
  },
  renderTodoViewText: {
    color: "#fff",
    fontSize: 18,
    fontStyle: "italic",
    flex: 1,
  },
});
