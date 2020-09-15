import React from 'react';
import { View,Image, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

const LoginLogo = () => {
  return(
    <View style={styles.container}>
        <Image
            style={styles.imageContainer}
            source={require('../../assets/images/pedigree.jpg')}>
        </Image>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#AD5E5D'
    }
});

export default LoginLogo;