import React from 'react';
import { View,KeyboardAvoidingView,Platform, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

// Components
import LoginForm from './LoginForm';
import LoginLogo from './LoginLogo';






const LoginPage = ({navigation}) => {
  return(

    <View style={styles.container}>

        <View style={styles.headerBackground}/>
            <View style={styles.logoContainer}>
                <LoginLogo/>
            </View>

            <View style={styles.formContainer}>
                <View style={{marginTop: 10, marginHorizontal: 50 }}>
                    <Text style={styles.loginText}>Log In</Text>
                </View>
                <View style={styles.formContent}>
                    <LoginForm navigation={navigation}/>
                </View>
                <View
                    style={{
                        borderColor: '#813232',
                        borderBottomWidth: 2,
                        marginTop: 20
                    }}
                />
                <View style={{ marginTop: 15, flex: 1,flexDirection:'row', alignItems:'flex-start'}}>
                    <View style={{flex: 0.44, alignItems: 'flex-end', marginTop: 2, paddingRight: 10 }}>
                        <Text style={{fontSize: 12}}>Don't have an account? </Text>
                    </View>
                    <View style={{flex: 0.56, alignItems: 'flex-start' }}>
                        <TouchableOpacity style={{ alignItems:'center'}} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{fontSize: 14,color: '#255BA1'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 800,
        width: '100%',
        backgroundColor: '#C78180',

    },
    loginText: {
        color: '#ffffff'
    },
    logoContainer: {
        flex: 0.45,
        justifyContent: 'flex-end',
        paddingTop: 10


    },
    formContainer: {
        flex: 0.55
    },
});

export default LoginPage;