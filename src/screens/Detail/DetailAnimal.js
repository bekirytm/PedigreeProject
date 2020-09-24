import React,{useState,useContext} from 'react';
import { View, Text,TextInput,Image, StyleSheet,KeyboardAvoidingView, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

import {observer} from 'mobx-react';
import AnimalStore from '../../store/AnimalStore';

export const DetailPage = observer(({route, navigation}) => {

    const {nickname,id,mother,father,birthday,gender,image} = route.params;
    const animalStore = useContext(AnimalStore);

    const pedigreeSearch = (id) => {
        animalStore.searchPedigree(id);
    }



    return(
        <KeyboardAvoidingView style={{flex: 1}}>
            <View style={styles.container}>


                <View style={styles.infoContainer}>
                    <View style={styles.animalImage}>
                        <Image
                            style={styles.imageContent}
                            source={{ uri: image}}>
                        </Image>
                    </View>
                    <View style={styles.animalInfo}>
                        <View style={styles.infoContent}>
                            <Text style={styles.titleText}>Nickname: {nickname}</Text>
                            <Text style={styles.titleText}>ID: {id}</Text>
                            <Text style={styles.titleText}>Mother: {mother}</Text>
                            <Text style={styles.titleText}>Father: {father}</Text>
                            <Text style={styles.titleText}>Birthday: {birthday}</Text>
                            <Text style={styles.titleText}>Gender: {gender}</Text>
                            <Text style={styles.titleText}>Image: {image}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.pedigreeContainer}>
                    <View
                        style={{
                            borderBottomColor: '#663635',
                            borderBottomWidth: 2,
                        }}
                    />
                    <TouchableOpacity onPress={() => {
                        pedigreeSearch(id);
                    }}>
                        <Text>Search</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </KeyboardAvoidingView>

    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    infoContainer: {
        flex: 0.4,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    animalImage: {
        flex: 0.4,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    animalInfo: {
        flex: 0.6,
        backgroundColor: 'orange',
    },
    infoContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },
    titleText: {
        paddingVertical: 5,
        fontSize: 13
    },



    pedigreeContainer: {
        flex: 0.6,
        flexDirection: 'column',
        backgroundColor: 'yellow'
    },

    imageContent: {
        width: 140,
        height: 140,
        marginTop: 20,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#AD5E5D',
    },
});

export default DetailPage;
