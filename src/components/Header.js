import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {

    const greeting = <Text style={styles.container}>Data Covid-19 Global & Indonesia</Text>;

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

export default Header;