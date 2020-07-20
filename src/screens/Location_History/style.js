import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    card: {
        borderWidth: 0.5,
        borderColor: '#666',
        marginVertical: 5,
        height: 80,
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,

    },
    textHistory: {
        fontFamily: 'Roboto-Medium',
        color: '#666'
    },
    scroll: {
        paddingHorizontal: 10,
        marginBottom:10
    },
    footer:{
        width:'100%',
        height:40,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center'
    },
    footerTxt:{
        fontFamily:'Roboto-Medium',
        color:'white'
    }
})

export default styles
