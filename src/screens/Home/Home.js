import React from 'react';
import { View, Text,TextInput,Alert, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';


const logoutAlert = (navigation) => {
    Alert.alert(
        "Çıkış Yapılsın Mı ?",
        "",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Çıkış Iptal"),
                style: "cancel"
            },
            { text: "OK", onPress: () => {
                console.log('Çıkış Yapıldı')
                navigation.push('Login')}}
        ],
        { cancelable: false }
    );
}


const HomePage = ({navigation}) => {
    return(
        <View>
            <Text>Home Page</Text>
            <Button
                title={"Logout"}
                onPress={() => logoutAlert(navigation)}
            >
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({});

export default HomePage;