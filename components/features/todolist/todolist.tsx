import { StyleSheet, View } from "react-native";
import { ToDoEntry } from './todoentry';
export default function ToDoList(){
    return(
    <View style={styles.toDoContainer}>
        <View>
            <h1>ToDo</h1>
        </View>
        <View style={{display: 'flex', gap:10}}>
            <ToDoEntry text="klein"/>
            <ToDoEntry text="sample" />     
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    toDoContainer:{
        width: '100%',
        height: 400,
        // borderColor: 'black',
        // borderWidth: 1,
        // borderRadius: 20,
        padding: 12,
        display: 'flex',
        // backgroundColor: 'black',
    },
    entry:{
        width: "95%",
        minHeight: 52,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: 7,
        gap: 5
    }
})