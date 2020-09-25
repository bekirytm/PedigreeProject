import React,{useState, useContext, useRef} from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,

    Modal,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {observer} from 'mobx-react';
import AnimalStore from '../../store/AnimalStore';
import { Picker } from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import {Camera} from '../../components/icons/index';


const inputAlert = (text, textEng) => {
    Alert.alert(
        "Error",
        text + '\n' + '('+textEng+')',

        [
            { text: "OK", onPress: () => {
                }}
        ],
        { cancelable: false }
    );
}

export const Addanimal = observer(() => {
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [mother, setMother] = useState('');
    const [father, setFather] = useState('');
    const [selectedValue, setSelectedValue] = useState("");
    const [date, setDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const [image, setImage] = useState(null);

    const animalStore = useContext(AnimalStore);

    const myTextInput = React.createRef();

const setDates = (e) => {
    setDate(e)
    console.log(date, e)
    let valueDate = `${e.getDate()}/${e.getMonth() +1}/${e.getFullYear()}`;
    console.log(valueDate);
}

    const selectImage = async () => {
        ImagePicker.showImagePicker({noData:true,mediaType: 'photo'}, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {

            setImage(response.uri);
            }
        });
    }

    return(
        <KeyboardAvoidingView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.formArea}>
                        <View style={styles.titleArea}>
                            <Text style={styles.titleContent}>Add Animal</Text>
                        </View>
                        <TextInput
                            value={nickname}
                            onChangeText={(nickname) => {
                                setNickname(nickname);
                                console.log(nickname);
                            }}
                            placeholder={'Nickname : '}
                            style={styles.inputStyle}
                            ref={myTextInput}
                        />
                        <TextInput
                            value={id}
                            onChangeText={(id) => {
                                setId(id);
                                console.log(id);
                            }}
                            keyboardType={'number-pad'}
                            maxLength={10}
                            minLength={1}
                            placeholder={'ID : '}
                            style={styles.inputStyle}
                            ref={myTextInput}
                        />
                        <TextInput
                            value={mother}
                            onChangeText={(mother) => {
                                setMother(mother);
                                console.log(mother);
                            }}
                            placeholder={'Mother ID: '}
                            style={styles.inputStyle}
                            ref={myTextInput}
                        />
                        <TextInput
                            value={father}
                            onChangeText={(father) => {
                                setFather(father);
                                console.log(father);
                            }}
                            placeholder={'Father ID: '}
                            style={styles.inputStyle}
                            ref={myTextInput}
                        />
                        <View style={styles.genderArea}>
                            <Picker
                                selectedValue={selectedValue}
                                style={styles.inputStyless}
                                onValueChange={(itemValue) => {
                                    setSelectedValue(itemValue);
                                    console.log(itemValue);
                                }}
                            >
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                            </Picker>
                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Select the animal's birthday</Text>
                                    <DatePicker
                                        date={date}
                                        mode={'date'}
                                        onDateChange={(e) => setDates(e)}
                                        textColor={'#AD5E5D'}
                                        fadeToColor={'#DBD8D8'}
                                    />

                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#AD5E5D" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Okay</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableOpacity
                            style={styles.openButtonTest}
                            onPress={() => {
                                setModalVisible(true);
                            }}
                        >
                            <Text style={styles.textModal}>{`${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`}</Text>
                        </TouchableOpacity>



                        {/*ADD Photo*/}
                        <TouchableOpacity style={[styles.inputStyle, {justifyContent: 'center', alignItems: 'center'}]} onPress={selectImage}>
                            {/*{*/}
                            {/*    image && <Image source={{uri: image}} style={{width: 50,height:50}} resizeMode={'contain'}/>*/}
                            {/*}*/}
                            <Camera style={{width: 15, height: 15, color: 'black', padding: 5, }} opacity={0.4}/>
                        </TouchableOpacity>




                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.addAnimalButton} onPress={() => {

                                let animalId = Math.floor(Math.random() * 10000000000);
                                let now = Date.now();
                                let now2 = date.getTime();
                                let dateValue = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;
                                console.log(typeof nickname);
                                console.log(typeof id);
                                console.log(typeof mother);
                                console.log(typeof father);
                                console.log(typeof selectedValue);
                                console.log(typeof date);
                                console.log(typeof dateValue);
                                console.log("AnimalId");
                                console.log(typeof animalId);
                                console.log(typeof image);
                                console.log(nickname,id,mother,father,selectedValue,date,animalId);
                                if(nickname === "" || id === "" || mother === "" || father === "" || selectedValue === "" || typeof date !== 'object'){
                                    inputAlert('Tüm alanları doldurmalısınız.','You must fill in all fields.');
                                }else if(now2 > now){
                                    inputAlert('Bugünden daha ileri bir tarih verilemez.', 'No later date can be given than today.');
                                }else{
                                    let animal = {};
                                    animal = {
                                        nickname,
                                        id,
                                        mother,
                                        father,
                                        gender : selectedValue,
                                        date : dateValue,
                                        animalId,
                                        image
                                    }

                                    animalStore.addAnimal(animal);

                                    console.log(animal);
                                    myTextInput.current.clear();
                                }
                            }}>
                                <Text style={styles.textButton}>Add Animal</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>

    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    titleArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    titleContent: {
        fontSize: 21
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#D7D7D7'
    },
    formArea: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    inputStyle: {
        paddingHorizontal: 15,
        marginHorizontal: 50,
        marginTop: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D4ADAC',
        color: '#999',
        marginBottom: 8,
        fontSize: 14,
        backgroundColor: '#F5F3F4',
        elevation: 7,
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },
    genderArea: {
        paddingHorizontal: 15,
        marginHorizontal: 50,

        marginTop: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D4ADAC',
        color: '#999',
        marginBottom: 8,
        fontSize: 14,
        backgroundColor: '#F5F3F4',
        elevation: 7,
        shadowColor: 'black',
        shadowOpacity: 0.3,

    },
    inputStyless: {
        transform: [
            { scaleX: 0.85 },
            { scaleY: 0.85 },
        ],
        width: '120%',
        marginLeft: -32,
        height: 38,
        color: '#999999',
        // marginBottom: 8,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        elevation: 2,
        marginTop: 10
    },
    openButtonTest: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        marginHorizontal: 50,
        marginTop: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D4ADAC',
        marginBottom: 8,
        backgroundColor: '#F5F3F4',
        elevation: 7,
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },
    textModal: {
        color: '#999393',
        textAlign: "center",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",

    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    addAnimalButton: {
        paddingVertical: 9,
        paddingHorizontal: 40,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AD5E5D',
        marginTop: 10,
        height: 40,
    },
    textButton: {
        fontSize: 15,
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    }
});

export default Addanimal;
