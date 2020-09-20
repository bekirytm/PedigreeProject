import React,{useState, useContext, useRef} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Button,
    ScrollView,
    SafeAreaView,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import ButtonComp from '../../components/ButtonComp';
import {observer} from 'mobx-react';
import PersonStore from '../../store/PersonStore';
import colors from '../../consts/colors';

// Input Alert
const inputAlert = (text) => {
    Alert.alert(
        "Hata",
        text,
        [
            { text: "OK", onPress: () => {

            }}
        ],
        { cancelable: false }
    );
}

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
                <View
                style={{
                    borderBottomColor: '#813232',
                    borderBottomWidth: 3,
                    borderRadius: 3,
                    borderColor: '#813232',
                    marginTop: 2
                }}
            />

            </View>

            <View style={styles.formContainer}>
                <ScrollView style={{width: '100%', height: '100%'}}>
                <View>
                    <Text style={styles.textStyle}>Username</Text>
                    <TextInput
                        // returnKeyType = { "next" }
                        // onSubmitEditing={() => { this.secondTextInput.focus(); }}


                        style={styles.inputStyle}
                        value={username}
                        onChangeText={(username) => {
                            setUsername(username);
                            console.log(username);
                        }}
                    />
                    <Text style={styles.textStyle}>Email</Text>
                    <TextInput
                        // returnKeyType = { "next" }
                        // ref={(input) => { this.secondTextInput = input; }}
                        // onSubmitEditing={() => { this.thirdTextInput.focus(); }}

                        style={styles.inputStyle}
                        value={email}
                        onChangeText={(email) => {
                            setEmail(email);
                            console.log(email);
                        }}
                    />
                    <Text style={styles.textStyle}>Password</Text>
                    <TextInput
                        // returnKeyType = { "next" }
                        // ref={(input) => { this.thirdTextInput = input; }}
                        // onSubmitEditing={() => { this.fourthTextInput.focus(); }}

                        secureTextEntry={true}
                        style={styles.inputStyle}
                        value={password}
                        onChangeText={(password) => {
                            setPassword(password);
                            console.log(password);
                        }}
                    />

                    <Text style={styles.textStyle}>Password(Retry)</Text>
                    <TextInput
                        // returnKeyType = { "done" }
                        // ref={(input) => { this.fourthTextInput = input; }}

                        secureTextEntry={true}
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

                            if(username === "" || email === "" || password === "" || retry === ""){
                                inputAlert('Tüm alanları doldurmalısınız.');
                            }
                            else if(password !== retry){
                                inputAlert('Password aynı değil');
                            }
                            else{
                                let person = {};
                                person[username] = {
                                    username,
                                    email,
                                    password,
                                    retry
                                }
                                personStore.addAnimal(person);

                                console.log(person);
                            }
                        }}>
                            <Text style={styles.textButton}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styles.backArea}>
                    <View>
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
                </ScrollView>
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
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 50,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#C78180',
        borderColor: '#C78180'

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
        flex: 0.85,
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#C78180',
        backgroundColor: '#C78180'
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
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#C78180',
    }
});

export default SignUp;


