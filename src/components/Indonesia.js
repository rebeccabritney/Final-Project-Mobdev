import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';

export default class Indo extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            refreshing: true
        }


    }

    componentDidMount = () => {
        this.getDataApi();
    } 

    getDataApi = async () => {
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        const json = await response.json();
        this.setState({data: json.data, refreshing: false})
    }

    // componentDidMount = () => {
    //     fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    //     .then(response => response.json())
    //     .then(json => this.setState({data: json.data, refreshing: false}))
    // }


    render(){
        // console.log(this.state.data)

        // const list = this.state.data.map( passingDisini => passingDisini.id)
        return(
            <View style={{flex: 1}}>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={item => item.fid.toString()}
                    renderItem = {
                        ({item}) => (
                            <View style={{height: 50, flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', borderWidth: 2, borderColor:'white', borderRadius: 10, margin: 5}}>
                                <View style={{marginLeft: 5}}>
                                    <Text>{item.provinsi}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: '#FFFF99', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text>{item.kasusPosi}</Text>
                                    </View>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: '#87CEFA', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text>{item.kasusSemb}</Text>
                                    </View>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: '#FF3366', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text>{item.kasusMeni}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    
                    refreshing= {this.state.refreshing}
                    onRefresh={this.onRefresh}
                    onRefresh = {() => {
                        this.getDataApi();
                    }}
                    
                />
            </View>
        )
    }
}