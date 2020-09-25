import React,{useState,useContext,useEffect} from 'react';
import { View, Text,TextInput,Image, StyleSheet,KeyboardAvoidingView, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

import {observer} from 'mobx-react';
import AnimalStore from '../../store/AnimalStore';

export const DetailPage = observer(({route, navigation}) => {

    const {nickname,id,mother,father,birthday,gender,image} = route.params;
    const animalStore = useContext(AnimalStore);


    // const [mom, setMom] = useState([]);
    // const [dad, setDad] = useState([]);
    const [sibling, setSibling] = useState([]);
    const [children, setChildren] = useState([]);


    useEffect(() => {
        const siblings = animalStore.animals.filter(e=> e.mother === mother || e.father === father)
        setSibling(siblings);

        const childrens = animalStore.animals.filter(e => gender === 'male' ? e.father === id : e.mother === id);
        setChildren(childrens);
        console.log(childrens);



    }, []);


    // const pedigreeSearch = (id) => {
        // let pedigree = animalStore.animals;
        // let idPed = pedigree.find(search => search.id === id);
        // let pedMom = idPed.mother;
        // let pedDad = idPed.father;
        // let parentPed = "a";
        // pedigree.forEach(e => {
        //     if(e.id === pedMom){
        //         setMom(e.id);
        //     }else if(e.id === pedDad){
        //         setDad(e.id);
        //     }else if(e.mother === pedMom && e.father === pedDad){
        //      console.log(e)
        //     }
        // });



        // console.log("Parent",parentPed);
        // console.log(pedigree);
        // console.log("Bulunan");
        // console.log(idPed);
        // console.log("Info");
        // console.log(idPed.mother);
        // console.log(idPed.father);

    // }

    const siblingCount = () => {
        return (sibling.map((item,i) => {
            return (<View key={i} style={[styles.siblingContainer , {backgroundColor: item.gender === 'male' ? '#1E90FF' : '#FF69B4'}]}>
                <Text>{item.id}</Text>
            </View>)
        }))
    };


    const childrenCount = () => {
        return (children.map((item,i) => {
            return (<View key={i} style={[styles.childrenContainer , {backgroundColor: item.gender === 'male' ? '#1E90FF' : '#FF69B4'}]} >
                <Text>{item.id}</Text>
            </View>)
        }))
    }

    return(


        <KeyboardAvoidingView style={{flex: 1}}>
            <View style={styles.container}>


                <View style={styles.infoContainer}>
                    <View style={styles.animalImage}>
                        {
                            image === undefined ? (<Image
                                style={styles.imageContent}
                                source={require('../../assets/images/cow.jpg')}>
                            </Image>) : (<Image
                                style={styles.imageContent}
                                source={{ uri: image}}>
                            </Image>)
                        }
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

                <View style={{flex:1, flexDirection: 'row', }}>
                    <ScrollView>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                            <View style={[styles.parentContainer, {backgroundColor: '#1E90FF'}]}>
                                <Text style={{justifyContent: 'center', alignItems: 'center'}}>{father}</Text>
                            </View>
                            <View style={[styles.parentContainer, {backgroundColor: '#FF69B4'}]}>
                                <Text style={{justifyContent: 'center', alignItems: 'center'}}>{mother}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                            {sibling ? siblingCount() : null}
                        </View>

                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                            {children ? childrenCount() : null}
                        </View>
                    </ScrollView>
                </View>

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
    parentContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    siblingContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    childrenContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    }
});

export default DetailPage;
