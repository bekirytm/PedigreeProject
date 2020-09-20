import React from 'react';
import { View, Text,TextInput,Alert,KeyboardAvoidingView, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';


const logoutAlert = (navigation) => {
    Alert.alert(
        "Çıkış Yapılsın Mı ?",
        "",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Çıkış Iptal"),
                style: "cancel"
            },
            { text: "OK", onPress: () => {
                console.log('Çıkış Yapıldı')
                navigation.push('Login')}}
        ],
        { cancelable: false }
    );
}


const HomePage = ({navigation}) => {
    return(
        <KeyboardAvoidingView style={{flex: 1}}>

            <View style={styles.container}>
                <View style={styles.homeArea}>
                    <View style={styles.profileContainer}>
                        <View style={styles.avatarArea}>
                            <Text>Avatar</Text>
                        </View>
                        <View style={styles.infoArea}>
                            <Text>Info</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contentArea}>
                    <View style={styles.statisticContainer}>
                        <View style={styles.titleArea}>
                            <Text>My Statistics</Text>
                        </View>
                        <View style={styles.statisticArea}>
                            <Text>Statistics</Text>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>


            // {/*<Text>Home Page</Text>*/}
            // {/*<Button*/}
            // {/*    title={"Logout"}*/}
            // {/*    onPress={() => logoutAlert(navigation)}*/}
            // {/*>*/}
            // {/*</Button>*/}



    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    homeArea: {
        flex: 0.35,
        backgroundColor: 'red'
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1
    },
    contentArea: {
        flex: 0.65,
        backgroundColor: 'green'
    },
    statisticContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1
    },
    titleArea: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'blue'
    },
    statisticArea: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'yellow'
    },
    avatarArea: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'purple'
    },
    infoArea: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'orange'
    }


});

export default HomePage;