import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';



const DetailPage = ({route, navigation}) => {
    const {nickname,id,mother,father,birthday,gender,image} = route.params;

    return(
        <View>
            <Text>Detail Page</Text>
            <Text>{nickname}</Text>
            <Text>{id}</Text>
            <Text>{mother}</Text>
            <Text>{father}</Text>
            <Text>{birthday}</Text>
            <Text>{gender}</Text>

        </View>
    )
};

const styles = StyleSheet.create({});

export default DetailPage;
