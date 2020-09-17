import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import ButtonComp from '../../components/ButtonComp';



const SignUp = ({navigation}) => {
    return(
        <View>
            <Text>SignUp Page</Text>
            <ButtonComp
                backgroundColor={'#AD5E5D'}
                color={'#ffffff'}
                text={'Geri'}
                navigation={navigation}
                navigateTo={'Login'}
            >

            </ButtonComp>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SignUp;