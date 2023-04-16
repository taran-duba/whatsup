import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IMessageBubble = ({ message }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bubble}>
                <Text style={styles.text}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    bubble: {
        backgroundColor: '#007aff',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});

export default IMessageBubble;