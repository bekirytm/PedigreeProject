import React,{useRef} from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import InputComp from "../../components/InputComp";
import ButtonComp from '../../components/ButtonComp';


const LoginForm = ({navigation}) => {
  const passwordInput = useRef();

  return(
    <View style={styles.container}>
        <InputComp
            placeholder={'Username'}
            returnKeyType={'next'}
            autoCapitalize='none'
            onSubmitEditing={() => passwordInput.current.focus()}
        />
        <InputComp
            returnKeyType={'go'}
            secureTextEntry={true}
            placeholder={'Password'}
            inputRef={passwordInput}
        />
        <ButtonComp
            backgroundColor={'#AD5E5D'}
            color={'#ffffff'}
            text={'Buton'}
            navigation={navigation}
            navigateTo={'TabBar'}
        />

    </View>
  )
};

const styles = StyleSheet.create({
    container: {


    }
});

export default LoginForm;