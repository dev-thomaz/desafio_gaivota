import React, {useEffect, useState} from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './style'
// import { Container } from './style';

const splashscreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
        
      },[]);
  return <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/imgs/logo.png')} style={styles.img} resizeMode="contain"></Image>
  </SafeAreaView>;
}

export default splashscreen;