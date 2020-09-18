import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import ButtonComp from "../../components/ButtonComp";



const Animals = ({navigation}) => {
    return(
        <View>
            <Text>Animal Page</Text>
            <Button
                title={'Go to Detail'}
                onPress={() => navigation.navigate('Detail')}
            >
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({});

export default Animals;