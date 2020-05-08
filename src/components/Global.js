import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Global extends Component {
    constructor(){
        super();
        this.state = {
            positif: '',
            sembuh: '',
            meninggal: '',
        }

    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({positif: json.confirmed.value}),
        this.setState({sembuh: json.recovered.value}),
        this.setState({meninggal: json.deaths.value})
    }

    render(){

        return(

            <View style={{height: 80, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={[styles.box, {backgroundColor: '#FFFF99'}]}>
                    <Text style={styles.text}>Positif</Text>
                    <Text style={styles.text}>{this.state.positif}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: '#87CEFA'}]}>
                    <Text style={styles.text}>Sembuh</Text>
                    <Text style={styles.text}>{this.state.sembuh}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: '#FF3366'}]}>
                    <Text style={styles.text}>Meninggal</Text>
                    <Text style={styles.text}>{this.state.meninggal}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 75,
        width: 90,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

//export default Global;