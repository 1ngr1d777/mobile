import React from 'react'

import {View, Text, Image, StyleSheet} from 'react-native';

export default function Boloscreen(){
  return(
    <View style={sttle.container}
   <Text style=style.title}> Um bolo de chocolate </text>
   <Image source={{ uri: 'https://casaeconstrucao.org/wp-content/uploads/2023/10/26-bolo-de-chocolate-decorado-@docee_gourmet.jpg'}}
   style={styles.Image}></Image>
   </View>
  );
} 

const styles=StyleSheet.create({
  container.{
    flex:1,
    justifiContent:'center',
    alignitems: 'center',
    backgroundColor:'#f8f8ff',
    padding:20,
  },
  title;{
    fontSize:24,
    fontWeight:20,
    color:'#4a2c2a'
  },

  Image:{
    width:200,
    height:200,
    borderRadiuns:100,
    marginBottom:20,
    borderColor: '#6b3e2e'
    border:3,
  },

  description:{
    fontSize:18,
    textAlign:'center',
    color:'5e403d',
    margingHorizontal:15,
    lineHeight:25,
  },
});




































