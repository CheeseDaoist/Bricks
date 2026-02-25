import { Button, Icon, InputItem, List, Modal } from "@ant-design/react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ToDoEntry } from './todoentry';

export default function ToDoList() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState<{ id: string, text: string }[]>([]);

    // LOAD DATA: When the page opens, grab data from browser memory
    useEffect(() => {
        const savedData = localStorage.getItem('my_todos');
        if (savedData) {
            setTaskList(JSON.parse(savedData));
        }
    }, []);

    // SAVE DATA: Every time the list changes, update browser memory
    useEffect(() => {
        localStorage.setItem('my_todos', JSON.stringify(taskList));
    }, [taskList]);

    function onAddingEntry() {
        if (taskName.trim().length === 0) return;

        const newEntry = { 
            id: Date.now().toString(), 
            text: taskName 
        };

        setTaskList([...taskList, newEntry]);
        setTaskName("");
        setIsModalVisible(false);
    }

    const deleteEntry = (id: string) => {
        setTaskList(taskList.filter(item => item.id !== id));
    };

    return (
        <View style={styles.toDoContainer}>
            <View style={{ gap: 10, marginBottom: 20 }}>
                {taskList.map((item) => (
                    <ToDoEntry 
                        key={item.id} 
                        text={item.text} 
                        // onDelete={() => deleteEntry(item.id)} 
                    />
                ))}
            </View>

            <View style={{ alignItems: 'center' }}>
                <Button onPress={() => setIsModalVisible(true)} style={styles.circleButton}>
                    <Icon name="plus" color="black" />
                </Button>
            </View>

            <Modal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                transparent
                footer={[
                    { text: "Cancel", onPress: () => setIsModalVisible(false) },
                    { text: "Add", onPress: onAddingEntry },
                ]}>
                <List>
                    <InputItem
                        clear
                        value={taskName}
                        onChange={(value) => setTaskName(value)}
                        placeholder="What needs to be done?"
                    />
                </List>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    toDoContainer: {
        width: '90%',
        padding: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOpacity: 0.1,
        elevation: 3,
    },
    circleButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
    }
});