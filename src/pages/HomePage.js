// // HomePage.js

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const HomePage = ({ navigation }) => {
//   const [feedItems, setFeedItems] = useState([
//     {
//       id: '1',
//       user: 'John Doe',
//       post: 'Hello, this is my first post!',
//     },
//     {
//       id: '2',
//       user: 'Jane Smith',
//       post: 'Enjoying a beautiful day at the park.',
//     },
//     // Add more feed items as needed
//   ]);

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <Text style={styles.feedUser}>{item.user}</Text>
//       <Text style={styles.feedPost}>{item.post}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.postButton}
//           onPress={() => {}}
//         >
//           <Text style={styles.postButtonText}>Create a Post</Text>
//         </TouchableOpacity>

//         <FlatList
//           data={feedItems}
//           keyExtractor={(item) => item.id}
//           renderItem={renderFeedItem}
//         />

//         <TouchableOpacity
//           style={styles.logoutButton}
//           onPress={() => navigation.navigate('LandingPage')}
//         >
//           <Text style={styles.logoutButtonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#ffffff', // Background color of safe area
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   postButton: {
//     width: '100%',
//     backgroundColor: '#42b72a', // Facebook green color
//     borderRadius: 8,
//     padding: 15,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   postButtonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   logoutButton: {
//     width: '100%',
//     backgroundColor: '#1877f2', // Facebook blue color
//     borderRadius: 8,
//     padding: 15,
//     alignItems: 'center',
//   },
//   logoutButtonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   feedItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#dcdfe6',
//     paddingVertical: 10,
//     marginBottom: 10,
//   },
//   feedUser: {
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   feedPost: {
//     color: '#333333',
//   },
// });

// export default HomePage;
import { Icon, MD3Colors } from 'react-native-paper';

import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet, 
    Image
} from "react-native"; 
  
const HomePage = ({navigation}) => { 
    const [text, setText] = useState(""); 
    const [tasks, setTasks] = useState([]); 
    const [editIndex, setEditIndex] = useState(-1); 
  
    const AddTask = () => { 
        if (text) { 
            if (editIndex !== -1) { 
                // Edit existing task 
                const updatedTasks = [...tasks]; 
                updatedTasks[editIndex] = text; 
                setTasks(updatedTasks); 
                setEditIndex(-1); 
            } else { 
                // Add new task 
                setTasks([...tasks, text]); 
            } 
            setText(""); 
        }
    }; 
  
    const EditTask = (index) => { 
        const taskToEdit = tasks[index]; 
        setText(taskToEdit); 
        setEditIndex(index); 
    }; 
  
    const DeleteTask = (index) => { 
        const updatedTasks = [...tasks]; 
        updatedTasks.splice(index, 1); 
        setTasks(updatedTasks); 
    };
    
    const clearAllTodos = () => {
        setTasks([]);
    };

  
    const renderItem = ({ item, index }) => ( 
        <View style={styles.task}> 
            <Text 
                style={styles.itemList}>{item}</Text> 
            <View 
                style={styles.taskButtons}> 
                <TouchableOpacity 
                    onPress={() => EditTask(index)}> 
                    <Text 
                        style={styles.editButton}> + </Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => DeleteTask(index)}> 
                    <Text 
                        style={styles.deleteButton}>  X  </Text> 
                </TouchableOpacity> 
            </View> 
            
        </View> 
    ); 
  
    return ( 
      <SafeAreaView style={styles.safeArea}>
            <Text style={styles.header}>My Day</Text>


            <TouchableOpacity
               style={styles.logoutButton}
               onPress={() => navigation.navigate('LandingPage')}
            >
               <Text style={styles.logoutButtonText}>
                <Icon
                source="logout"
                color='#004AAD'
                size={35}
                />
                </Text>
            </TouchableOpacity>
        <View style={styles.container}> 
            
            {/* <Image
                style={{width: 300, height: 200}}
                source={require('./melogo.png')}
            /> */}
            <TextInput 
                style={styles.input} 
                placeholder="What's on your mind?"
                value={text} 
                onChangeText={(text) => setText(text)} 
            /> 
            
            
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={AddTask}> 
                <Text style={styles.addButtonText}> 
                    {editIndex !== -1 ? "Update Day" : "Post Day"} 
                </Text> 
            </TouchableOpacity> 

            <FlatList 
                data={tasks} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} 
            /> 
            
        </View> 
      </SafeAreaView>
    ); 
}; 
  
const styles = StyleSheet.create({ 
   safeArea: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    container: { 
        flex: 1, 
      //   padding: , 
      //   marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // flexDirection: 'row'
    }, 
    header: { 
        fontSize: 35, 
        fontWeight: "bold", 
        marginBottom: 10, 
        color: "#004AAD", 
        textAlign: "center",
        padding: 25,
    }, 
    input: { 
        height: 60,
        borderColor: '#dcdfe6',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 12,
        padding: 10,
        width: 300,
        margin: 10,
        // right: 20,
        alignItems: 'center',  
        position: 'relative'
    }, 
    addButton: { //change button 
        backgroundColor: "#004AAD", 
        padding: 10,
        // left: 130,
        // width: 50, 
        // borderRadius: 10, 
        // marginBottom: 25,
        // position: "absolute",
        // bottom: 0,
        // right: 16,
        
        borderRadius: 15, 
        // marginBottom: 12,
        margin: 7,
        width: 'auto',

    }, 
    addButtonText: { //change 
        textAlign: "center", 
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }, 
    task: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 7,
        marginTop: 7, 
        // margin: 5,
        fontSize: 18,
        padding: 10,
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: '#004AAD',
        width: '100%'
    }, 
    itemList: { 
        fontSize: 20, 
        borderRadius: 10,

    }, 
    taskButtons: { 
        flexDirection: "row", 
    }, 
    editButton: { 
        marginRight: 10, 
        color: "#009900", 
        fontWeight: "bold", 
        fontSize: 20, 
    }, 
    deleteButton: { 
        color: "#990000", 
        fontWeight: "bold", 
        fontSize: 20, 
    },
   logoutButton: {
      width: '100%',
      borderColor: '#004AAD', 
      alignItems: 'center',
      justifyContent: 'left',
      position: 'absolute',
      top: 55,
      left: 170,

   },
   logoutButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
   },
}); 
  

export default HomePage;