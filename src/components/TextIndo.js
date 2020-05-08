import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TextIndo = () => {

    const greeting = <Text style={styles.container}>Indonesia</Text>;

    return (
        <View>
            {greeting}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        color: 'black'
    }
})

export default TextIndo;