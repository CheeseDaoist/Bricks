import { Button } from "@ant-design/react-native";
import { StyleSheet, View } from "react-native";

interface ToDoEntryProps {
    text: string;
}
export function ToDoEntry({text}:ToDoEntryProps) {
    return(
        <View style={styles.entry}>
                <View style={{height: '100%', width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {/* checkbox button */}
                    <Button style={{height: 20, width: 20}}>
                    </Button>
                </View>
                <View style={{height:'100%', width:250}}>
                        <p>{text} </p>
                    
                </View>
                <View>
                    {/* Options */}
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