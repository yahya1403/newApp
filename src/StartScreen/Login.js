import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,

    Alert,
} from 'react-native';
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.username}>
                <Text>UserName :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => { setUsername(val) }}
                    value={username}
                    placeholder="useless placeholder"
                />
            </View>
            <View style={styles.password}>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => { setPassword(val) }}
                    value={password}
                    placeholder="Password"
                />
            </View>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },
    username: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    password: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});