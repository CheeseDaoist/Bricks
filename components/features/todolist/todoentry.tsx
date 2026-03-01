import { Checkbox, List } from "@ant-design/react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface ToDoEntryProps {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}
export function ToDoEntry({text, onDelete, id}:ToDoEntryProps) {
    const [checked, setChecked] = useState(false);

    return(
        <List.Item  thumb={<Checkbox    checked={checked} 
                                        onChange={(e) => { 
                                                            setChecked(e.target.checked);
                                                            onDelete(id);
                                        }} 
                            />}
                    styles={{
                        Line: { borderBottomWidth: 0 }, 
                        }}
        >
            {text}
        </List.Item>
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