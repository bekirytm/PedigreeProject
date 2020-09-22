import React,{useState, useContext} from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    Picker,
    Modal,
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
import PersonStore from "../../store/PersonStore";

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

    const animalStore = useContext(AnimalStore);

const setDates = (e) => {
    setDate(e)
    console.log(date, e)
    let valueDate = `${e.getDate()}/${e.getMonth() +1}/${e.getFullYear()}`;
    console.log(valueDate);
}
    return(
        <KeyboardAvoidingView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <View style={styles.titleArea}>
                        <Text style={styles.titleContent}>Add Animal</Text>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formArea}>
                        <TextInput
                            value={nickname}
                            onChangeText={(nickname) => {
                                setNickname(nickname);
                                console.log(nickname);
                            }}
                            placeholder={'Nickname : '}
                            style={styles.inputStyle}
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
                        />
                        <TextInput
                            value={mother}
                            onChangeText={(mother) => {
                                setMother(mother);
                                console.log(mother);
                            }}
                            placeholder={'Mother : '}
                            style={styles.inputStyle}
                        />
                        <TextInput
                            value={father}
                            onChangeText={(father) => {
                                setFather(father);
                                console.log(father);
                            }}
                            placeholder={'Father : '}
                            style={styles.inputStyle}
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

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.addAnimalButton} onPress={() => {

                                let animalId = Math.floor(Math.random() * 10000000000);
                                let now = Date.now();
                                let now2 = date.getTime();
                                console.log("NOW",now);
                                console.log("NOW2",now2);
                                console.log(typeof date);
                                console.log(nickname,id,mother,father,selectedValue,date,animalId);
                                if(nickname === "" || id === "" || mother === "" || father === "" || selectedValue === "" || typeof date !== 'object'){
                                    inputAlert('Tüm alanları doldurmalısınız.','You must fill in all fields.');
                                }else if(now2 > now){
                                    inputAlert('Bugünden daha ileri bir tarih verilemez.', 'No later date can be given than today.');
                                }else{
                                    let animal = {};
                                    animal[animalId] = {
                                        nickname,
                                        id,
                                        mother,
                                        father,
                                        selectedValue,
                                        date,
                                        animalId
                                    }

                                    animalStore.addAnimal(animal);

                                    console.log(animal);
                                }
                                // if(nickname === "" || id === "" || mother === "" || father === "" || ){
                                //     inputAlert('Tüm alanları doldurmalısınız.');
                                // }
                                // else if(password !== retry){
                                //     inputAlert('Password aynı değil');
                                // }
                                // else{
                                //     let animal = {};
                                //     person[username] = {
                                //         username,
                                //         email,
                                //         password,
                                //         retry
                                //     }
                                //     personStore.addPerson(person);
                                //
                                //     console.log(person);
                                // }
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
    titleContainer: {
        flex: 0.15,
        backgroundColor: '#8E8C8C',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    titleArea: {

    },
    titleContent: {
        fontSize: 20
    },
    formContainer: {
        flex: 0.85,
        backgroundColor: '#D7D7D7'
    },
    formArea: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    }
});

export default Addanimal;
