import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
// import { Container } from './styles';

const Home = ({navigation}) => {
  return <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/imgs/logo.png')} style={styles.img} resizeMode="contain"></Image>
      <Svg height="100%" width="100%" viewBox="0 0 90 20">
          <Circle
            cx="50"
            cy="50"
            r="100"
            fill="#3F91DF"
          />
          <Circle
            cx="50"
            cy="50"
            r="97.5"
            fill="#0B67BA"
          />
          <Circle
            cx="50"
            cy="50"
            r="95"
            fill="#00328F"
          />
         
         
          
          </Svg>
         <View style={{justifyContent:'center', position:'absolute', width:'100%', height:'100%',alignItems:'center', top:'20%'}}>
           <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:18}}>Olá esse protótipo foi desenvolvido por: </Text>
           <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:18}}>Thomaz Bittencourt </Text>
           <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:18, marginVertical: 30}}>Vamos começar? </Text>

           <TouchableOpacity style={styles.btnInit} onPress={() => navigation.navigate('Map')}>
             <Text>Abrir mapa</Text>
           </TouchableOpacity>
         </View>
        
  </SafeAreaView>;
}

export default Home;