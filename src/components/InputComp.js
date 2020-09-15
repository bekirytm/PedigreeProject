import React,{useState} from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

const InputComp = (props) => {
  const [text, setText] = useState('');

  return(
    <View>
      <TextInput
          {...props}
          style={styles.textInput}
          ref={props.inputRef}
          value={text}
          onChangeText={(text) => {
              setText(text);
              console.log(text);
          }}
      >
      </TextInput>
    </View>
  )
};

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 15,
    marginHorizontal: 50,
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D4ADAC',
    color: '#999',
    marginBottom: 8,
    fontSize: 14,
    backgroundColor: '#F5F3F4',
    elevation: 7,
    shadowColor: 'black',
    shadowOpacity: 0.3,



  }

});

export default InputComp;