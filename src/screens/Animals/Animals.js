import React,{useState,useContext} from 'react';
import { View, Text,TextInput,Image, StyleSheet, TouchableOpacity,FlatList,KeyboardAvoidingView, Button, ScrollView, SafeAreaView} from 'react-native';
import ButtonComp from "../../components/ButtonComp";
import {Male,Female,Plus, Arrow} from '../../components/icons/index';

import {observer} from 'mobx-react';
import AnimalStore from '../../store/AnimalStore';

export const Animals = observer(({navigation}) => {
    const animalStore = useContext(AnimalStore);

    const Item = ({ item, index }) => (
        <TouchableOpacity
            // style={[styles.item,  {backgroundColor: index % 2 === 1 ? '#A5A5A5' : '#A5A5A5'}]}
            // onPress={() => navigation.navigate('DetailScreen', {
            //     name: item.name,
            //     company: item.company,
            //     picture: item.picture,
            //     id: item._id,
            //     about: item.about
            // })}
        >


            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>

                    <Image
                        style={styles.imageContent}
                        source={require('../../assets/images/cow.jpg')}>
                    </Image>
                </View>
                <View style={styles.genderContainer}>
                    <Plus style={{flex: 1, width: 25, height: 25, color: 'black', padding: 15}}/>
                </View>
                <View style={styles.textArea}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textContent}>Nick: {item.nickname}</Text>
                        <Text style={styles.textContent}>Id: {item.id}</Text>
                    </View>
                </View>
                <View style={styles.DetailContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                        nickname: item.nickname,
                        id: item.id,
                        mother: item.id,
                        father: item.id,
                        birthday: item.birthday,
                        gender: item.gender,
                        image: item.image
                    })}>
                        <Text>Detail</Text>
                        <Arrow style={{width: 10, height: 10, color: 'black', marginLeft: 5}}/>
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

                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={animalStore.animals}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
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

    },
    listContainer: {
        flex: 0.9,
        backgroundColor: 'green'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginVertical: 5,
        // justifyContent: 'space-around'
    },
    imageContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    genderContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    textArea: {
        flex: 0.4,
        justifyContent: 'center',
        paddingLeft: 10,
        // alignItems: 'center',
        backgroundColor: 'yellow'
    },
    DetailContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    imageContent: {
        width: 60,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#AD5E5D',
    }
});

export default Animals;
