import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

const ButtonComp = (props) => {
  const {color, backgroundColor, navigateTo} = props;

  return(
      <View style={styles.container}>
          <TouchableOpacity style={[styles.buttonContainer, {backgroundColor}]} onPress={() => props.navigation.navigate(navigateTo)}>
              <Text style={[styles.buttonText, {color}]}>{props.text}</Text>
          </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,

    },
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250

    },
    buttonText: {
        fontSize: 14
    }

});

export default ButtonComp;