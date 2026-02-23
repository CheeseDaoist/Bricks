import { Button, Icon, InputItem, List, Modal } from "@ant-design/react-native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ToDoEntry } from './todoentry';
export default function ToDoList(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState<{id: string, text: string}[]>([]);
    function onAddingEntry(){
        if (taskName.trim().length === 0) return;

        const newEntry = {
            id: Date.now().toString(),
            text: taskName
        }

        setTaskList([...taskList, newEntry]);
        setTaskName("");
        setIsModalVisible(false);
        debugger;
    }

    return(
    <View style={styles.toDoContainer}>
        <View style={{display: 'flex', gap:10, marginBottom: 10}}>
            {/* <ToDoEntry text="sample" />      */}
            {
                taskList.map((item) => (
                    <ToDoEntry text = {item.text} />
                ))
            }
        </View>
        <View style={{alignItems:'center'}}>
            <Button onPress={()=>setIsModalVisible(true)} style={{width:40, height: 40, borderRadius: 50}}>
                <Icon name="plus" color="black"/>
            </Button>
        </View>

        <Modal  visible={isModalVisible} 
                onClose={()=>setIsModalVisible(false)} 
                transparent
                footer={[
                    {text: "Cancel", onPress: () => setIsModalVisible(false)},
                    {text: "Add", onPress: onAddingEntry},
        ]}>
            <List>
                <InputItem  clear
                            value={taskName} // why is the bottom needed? isnt this automatic?
                            onChange={(value) => setTaskName(value)}
                            placeholder="What needs to be done?">
                </InputItem>
            </List>
        </Modal>
    </View>
    )
}
const styles = StyleSheet.create({
    toDoContainer:{
        width: '90%',
        height: 300,
        padding: 12,
        display: 'flex',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 20,
        justifyContent: 'space-around'

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