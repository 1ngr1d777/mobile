import React from 'react'

import {View, Text, Image, StyleSheet} from 'react-native';

export default function PaoScreen(){
  return(
    <View style={sttle.container}
   <Text style=style.title}>um pao caseiro fresco </text>
   <Image source={{ uri: 'https://recipesblob.oetker.com.br/assets/18efac19eac14ceb8c1e1006f5944dbf/636x382/po-caseiro-super-fofinho.jpg'}}
   style={styles.Image}></Image>
   </View>
  );
} 

const styles=StyleSheet.create({
  container.{
    flex:1,
    justifiContent:'center',
    alignitems: 'center',
    backgroundColor:'#fffaf0',
    padding:20,
  },
  title;{
    fontSize:24,
    fontWeight:20,
    color:'#8b4513'
  },

  Image:{
    width:200,
    height:200,
    borderRadiuns:100,
    marginBottom:20,
    borderColor: '#d2b48c'
    border:3,
  },

  description:{
    fontSize:18,
    textAlign:'center',
    color:'a0522d',
    margingHorizontal:15,
    lineHeight:25,
  },
});
  