import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={styles.mainView}>
      <Image source={require('../../assets/to-do-list.png')} style={styles.fallbackImg} />
      <Text style={styles.mainTxt}>Start adding your task here</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({
    fallbackImg:{
        height:300,
        width:300,
    },
    mainView:{
        alignItems:'center'
    },
    mainTxt:{
        fontSize:20,
        fontStyle:'italic',
        marginTop:12
    }
})