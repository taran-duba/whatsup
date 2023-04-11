import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg' }} 
                style={styles.image} 
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>Vishal</Text>
                    <Text style={styles.subtitle}>8:30</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>
                    Hello There
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5, 
        height: 70,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: "bold",
    },
    subtitle: {
        color: "gray",
    },
});

export default ChatListItem;