import React,{useState, useContext, useRef} from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import ButtonComp from '../../components/ButtonComp';
import {observer} from 'mobx-react';
import PersonStore from '../../store/PersonStore';
import colors from '../../consts/colors';



export const SignUp = observer(({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retry, setRetry] = useState('');

    const personStore = useContext(PersonStore);

    const inputRef = useRef();

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleContent}>Sign Up</Text>
            </View>

            <View style={styles.formContainer}>
                <ScrollView style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>Username</Text>
                    <TextInput
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}


                        style={styles.inputStyle}
                        value={username}
                        onChangeText={(username) => {
                            setUsername(username);
                            console.log(username);
                        }}
                    />
                    <Text style={styles.textStyle}>Email</Text>
                    <TextInput
                        returnKeyType = { "next" }
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}

                        style={styles.inputStyle}
                        value={email}
                        onChangeText={(email) => {
                            setEmail(email);
                            console.log(email);
                        }}
                    />
                    <Text style={styles.textStyle}>Password</Text>
                    <TextInput
                        returnKeyType = { "next" }
                        ref={(input) => { this.thirdTextInput = input; }}
                        onSubmitEditing={() => { this.fourthTextInput.focus(); }}

                        style={styles.inputStyle}
                        value={password}
                        onChangeText={(password) => {
                            setPassword(password);
                            console.log(password);
                        }}
                    />

                    <Text style={styles.textStyle}>Password(Retry)</Text>
                    <TextInput
                        returnKeyType = { "next" }
                        ref={(input) => { this.fourthTextInput = input; }}

                        style={styles.inputStyle}
                        value={retry}
                        onChangeText={(retry) => {
                            setRetry(retry);
                            console.log(retry);
                        }}
                    />

                    {/*// Sign Up Button*/}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.signUpButton} onPress={() => {
                            let person = {};
                            person[username] = {
                                username,
                                email,
                                password,
                                retry
                            }
                            personStore.addAnimal(person);

                            console.log(person);
                        }}>
                            <Text style={styles.textButton}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                </ScrollView>
            </View>
            <View style={styles.backArea}>

                <ButtonComp
                    backgroundColor={'#AD5E5D'}
                    color={'#ffffff'}
                    text={'Geri'}
                    navigation={navigation}
                    navigateTo={'Login'}
                >

                </ButtonComp>



            </View>

        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BackgroundsColor
    },
    titleContainer: {
        flex: 0.15,
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 50,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'red'
    },
    titleContent: {
        fontSize: 20
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
    textStyle: {
        marginHorizontal: 50,
    },
    formContainer: {
        flex: 0.6,
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'red',
        backgroundColor: 'blue'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    signUpButton: {
        paddingVertical: 9,
        paddingHorizontal: 70,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AD5E5D'
    },
    textButton: {
        fontSize: 14,
        color: '#fff'
    },
    backArea: {
        flex: 0.2,
        backgroundColor: 'yellow'
    }
});

export default SignUp;


