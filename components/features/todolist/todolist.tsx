import { Button, Icon, InputItem, List, Modal } from "@ant-design/react-native";
import * as SQLite from 'expo-sqlite';
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ToDoEntry } from './todoentry';
const db = SQLite.openDatabaseSync('todo_db');

export default function ToDoList() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState<{id: number, text: string }[]>([]);

    useEffect(() => {
        db.execSync(`
            CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                text TEXT NOT NULL
            );
        `);
        fetchTasks();
        
    }, []);

    const fetchTasks = () => {
        const allRows = db.getAllSync('SELECT * FROM todos') as {id: number, text:string }[];
        setTaskList(allRows);
    }


    function onAddingEntry() {
        if (taskName.trim().length === 0) return;

        db.runSync('INSERT INTO todos (text) VALUES(?)', taskName);

        setTaskName("");
        setIsModalVisible(false);
        fetchTasks();
    }

    const deleteEntry = (id: Number) => {
        db.runSync('DELETE FROM todos WHERE id = ?', id + "");
        fetchTasks();
    };

    return (
        <View style={styles.toDoContainer}>
            <View style={{ gap: 10, marginBottom: 20 }}>
                {taskList.map((item) => (
                    <ToDoEntry 
                        key={item.id.toString()} 
                        id={item.id.toString()}
                        text={item.text} 
                        onDelete={() => deleteEntry(item.id)} 
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