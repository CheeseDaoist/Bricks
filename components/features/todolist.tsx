import { StyleSheet, View } from "react-native";

export default function ToDoList(){
    return(
    <View style={styles.toDoContainer}>
        <View>
            <h1>ToDo</h1>
        </View>
        <View>
            <View style={styles.entry}>
                <View style={{height: '100%', width: 40, backgroundColor: 'black'}}>
                    {/* checkbox button */}
                </View>
                <View style={{height:'100%', width:250, backgroundColor: 'gray'}}>
                    {/* title */}
                </View>
                <View>
                    {/* Options */}
                </View>
            </View>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    toDoContainer:{
        width: '95%',
        height: 400,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        padding: 12,
        display: 'flex'
        // backgroundColor: 'black'
    },
    entry:{
        width: "90%",
        height: 80,
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row'
    }
})