import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import styles from './style'
export default function Location_History({navigation}) {

    const locations = useSelector(state => state.locationReducers.locations)

    function transformDate(date) {
        let day = date.getDate()
        let month = date.getMonth() + 1
        if (month < 10) {
            month = `0${month}`
        }
        let year = date.getFullYear()
        let hour = date.getHours()
        if (hour < 10) {
            hour = `0${hour}`
        }
        let minute = date.getMinutes()
        if (minute < 10) {
            minute = `0${minute}`
        }
        return `${day}/${month}/${year} - ${hour}:${minute}`
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                {locations.reverse().map((place, index) => {
                    let date = new Date(place.date)
                    return (

                        <View key={index} style={styles.card}>
                            <Text style={styles.textHistory}>{transformDate(date)}</Text>
                            <Text style={styles.textHistory}>Latitude: {place.latitude}</Text>
                            <Text style={styles.textHistory}>Longitude: {place.longitude}</Text>
                        </View>

                    )

                })}
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.footer}><Text style={styles.footerTxt}>Voltar</Text></TouchableOpacity>
        </SafeAreaView>
    );
}