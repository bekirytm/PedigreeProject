import React,{useState, useContext} from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import ButtonComp from '../../components/ButtonComp';
import {observer} from 'mobx-react';
import PersonStore from '../../store/PersonStore';



export const SignUp = observer(({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retry, setRetry] = useState('');

    const personStore = useContext(PersonStore);

    return(
        <View>
            <Text>SignUp Page</Text>
            <Text>{personStore.name}</Text>

            <View style={styles.formContainer}>
                <Text style={styles.textStyle}>Username</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={username}
                    onChangeText={(username) => {
                        setUsername(username);
                        console.log(username);
                    }}
                />
                <Text style={styles.textStyle}>Email</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={email}
                    onChangeText={(email) => {
                        setEmail(email);
                        console.log(email);
                    }}
                />
                <Text style={styles.textStyle}>Password</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={password}
                    onChangeText={(password) => {
                        setPassword(password);
                        console.log(password);
                    }}
                />
                <Text style={styles.textStyle}>Password(Retry)</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={retry}
                    onChangeText={(retry) => {
                        setRetry(retry);
                        console.log(retry);
                    }}
                />

                <Button
                    title={'Sign Up'}
                    onPress={() => {
                        let person = {};
                        person[username] = {
                            username,
                            email,
                            password,
                            retry
                        }
                        personStore.addAnimal(person);

                        console.log(person);
                    }}
                />



            </View>


            <View>
                <Button
                    title={"change"}
                    onPress={() => personStore.changeName()}
                />
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
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#C78180'
    }
});

export default SignUp;