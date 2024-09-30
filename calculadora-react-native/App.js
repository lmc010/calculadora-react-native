import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
    
  const [operacao, setOperacao]=useState(0)
  const [resultado, setResultado]=useState(0)

  const calcular=()=>{
    setResultado(eval(operacao))
  }


  return (
    <SafeAreaView style={styles.display}>
      <Text>Calculadora</Text>
      <View>
        <TextInput
          styles={styles.displayOperacao}
          value={String(operacao)}
          onChangeText={(text)=>{setOperacao(text)}}
        ></TextInput>



        <TextInput
          styles={styles.displayResultado}
          value={String(resultado)}
          onChangeText={(text)=>{setResultado(text)}}
        ></TextInput>
      </View>
      
      <View>
       <TouchableHighlight
         style={styles.btn}
         onPress={()=>calcular()}
        ><Text>Calcular</Text>
       </TouchableHighlight>
      </View>
      </SafeAreaView>
       
      

  );
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  display:{
    marginTop:150,
    padding:10,
    borderWidth:1,
    borderRadius:5,
  },
  displayOperacao:{
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginBottom:10,
    
  },
  displayResultado:{
    marginTop:30,
    padding:10,
    borderWidth:10,
    borderColor:'#000000',
    borderRadius:5,
  },
  btn:{
    backgroundColor:'#ADD8E6',
    marginTop:30,
    padding:20,
  }


  
  


});
