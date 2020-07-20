import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Geojson, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from 'react-redux'
import BackgroundTimer from 'react-native-background-timer';
import { actions } from '../../actions/locations'
import styles from './style'
// import { Container } from './styles';

const myPlace = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [64.165329, 48.844287],
            }
        }
    ]
};

const Map = ({ navigation }) => {

    function addLocationAction(latitude, longitude, date) {
        return { type: 'LOCATION_CREATE', location: { latitude, longitude, date } }
    }

    function sendLocation(latitude, longitude) {
        let date = new Date()
        dispatch(addLocationAction(latitude, longitude, date))
    }

    const myLocation = useSelector(state => state.myLocationReducers.location)
    const locations = useSelector(state => state.locationReducers.locations)
    const dispatch = useDispatch()

    const handleMylocation = (latitude, longitude) => dispatch(actions.create({ latitude, longitude }))
    const [myLocate, getMylocate] = useState(myLocation)



    

    useEffect(async () => {
        Geolocation.getCurrentPosition(info => {
            getMylocate({ latitude: info.coords.latitude, longitude: info.coords.longitude })
            sendLocation(info.coords.latitude, info.coords.longitude)
            
        })
        
        BackgroundTimer.start()
        const timer =   await  BackgroundTimer.runBackgroundTimer(() => { 
            alert('virou')
            Geolocation.getCurrentPosition(info => {
                
              
                sendLocation(info.coords.latitude, info.coords.longitude)
               
            })  
          
            }, 180000);

    
    }, []);
    return <SafeAreaView style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: myLocate.latitude,
                longitude: myLocate.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
           
            <Marker coordinate={{ latitude: myLocate.latitude, longitude: myLocate.longitude }} />




        </MapView>
        <TouchableOpacity style={styles.btnHistory} onPress={() => navigation.navigate('Location_History')}>
                <Image source={require('../../assets/imgs/iconHistory.png')} resizeMode="contain" style={{width:40, height:40}}></Image>
            </TouchableOpacity>
    </SafeAreaView>;
}

export default Map;