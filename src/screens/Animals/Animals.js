import React,{useState,useContext} from 'react';
import { View, Text,TextInput,Image, StyleSheet, TouchableOpacity,FlatList,KeyboardAvoidingView, Button, ScrollView, SafeAreaView} from 'react-native';
import ButtonComp from "../../components/ButtonComp";
import {GenderFemale,GenderMale, Detailarrow,Godetail} from '../../components/icons/index';

import {observer} from 'mobx-react';
import AnimalStore from '../../store/AnimalStore';

export const Animals = observer(({navigation}) => {
    const animalStore = useContext(AnimalStore);

    const Item = ({ item, index }) => (
        <TouchableOpacity>


            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>

                    <Image
                        style={styles.imageContent}
                        source={require('../../assets/images/cow.jpg')}>
                    </Image>
                </View>
                <View style={styles.genderContainer}>
                    {
                        item.gender === 'female' ? (<GenderFemale style={styles.genderIcon}/>) : (<GenderMale style={styles.genderIcon}/>)
                    }

                </View>
                <View style={styles.textArea}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textContent}>Nickname: {item.nickname}</Text>
                        <Text style={styles.textContent}>ID: {item.animalId}</Text>
                    </View>
                </View>
                <View style={styles.DetailContainer}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('Detail', {
                        nickname: item.nickname,
                        id: item.id,
                        mother: item.mother,
                        father: item.father,
                        birthday: item.date,
                        gender: item.gender,
                        image: item.image
                    })}>
                        <Text style={{fontSize: 15}}>Detail</Text>
                        <Detailarrow style={[styles.genderIcon , {marginTop: 1}]}/>
                    </TouchableOpacity>

                </View>
            </View>

        </TouchableOpacity>
    );



    const renderItem = ({item, index}) => {
        return(
            <Item item={item} index={index} />
        )
    }



    return(
        <SafeAreaView style={{flex: 1}}>

        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchContent}>
                    <Text style={styles.titleArea}>My Animals</Text>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={animalStore.animals}
                    renderItem={renderItem}
                    keyExtractor={item => item.animalId}
                    // ItemSeparatorComponent={itemFlat}
                    // ListHeaderComponent={flatListHeaderComp()}
                    // ListFooterComponent={loadingComp}
                />
            </View>
        </View>




            {/*<View>*/}
            {/*    <Text>Animal Page</Text>*/}
            {/*    <Button*/}
            {/*        title={'Go to Detail'}*/}
            {/*        onPress={() => navigation.navigate('Detail')}*/}
            {/*    >*/}
            {/*    </Button>*/}
            {/*</View>*/}
        </SafeAreaView>

    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flex: 0.1,
        backgroundColor: 'gray'
    },
    searchContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleArea: {
        fontSize: 22
    },
    listContainer: {
        flex: 0.9,
        backgroundColor: '#C78180',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#D9BCBC'
        // justifyContent: 'space-around'
    },
    imageContainer: {
        flex: 0.21,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    genderContainer: {
        flex: 0.13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textArea: {
        flex: 0.46,
        justifyContent: 'center',
        paddingLeft: 5,
        // alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
    },
    DetailContainer: {
        flex: 0.17,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    imageContent: {
        width: 60,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#AD5E5D',
    },
    textContent: {
        fontSize: 13
    },
    genderIcon : {
        width: 20,
        height: 20,
        color: 'black',
        padding: 10
    }
});

export default Animals;
