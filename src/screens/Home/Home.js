import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';



const HomePage = ({navigation}) => {
    return(
        <View>
            <Text>Home Page</Text>
            <Button
                title={"Exit"}
                onPress={() => navigation.push('Login')}
            >
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({});

export default HomePage;