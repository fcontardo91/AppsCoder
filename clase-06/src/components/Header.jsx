import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: colors.teal900,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.teal200
  }
})