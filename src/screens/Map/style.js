import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    btnHistory: {
        position: 'absolute',
        top: '10%', 
        alignSelf: 'flex-end',
        right: 20,
        backgroundColor: '#dfdfdf',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 50
    },
    btnTxt:{
        fontFamily:'Roboto-Medium'
    }

})

export default styles

