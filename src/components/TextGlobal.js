import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TextGlobal = () => {

    const greeting = <Text style={styles.container}>Global</Text>;

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

export default TextGlobal;