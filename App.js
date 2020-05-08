import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Global from './src/components/Global';
import Indonesia from './src/components/Indonesia';
import TextGlobal from './src/components/TextGlobal';
import TextIndo from './src/components/TextIndo';


const App = () => {
      return (
        <View style={styles.container}>
          <View style={styles.boxHeader}>
            <Header/>
          </View>
          <View style={styles.boxSub}>
            <TextGlobal/>
            <Global/>
          </View>
          <View style={styles.boxBody}>
            <TextIndo/>
            <Indonesia/>
          </View>
        </View>
      );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFE4E1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxHeader: {
      flex: 0.2,
      alignItems: 'center',
      backgroundColor: '#FFE4E1'
    },
    boxSub: {
      flex: 0.6,
      alignItems: 'center',
      backgroundColor: '#FFE4E1'
    },
    boxBody: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: '#FFE4E1'
    }
  });


  export default App;
