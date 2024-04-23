import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({category}) => {
  return (
    <Card style={styles.cardStyle}>
      <Text style = {styles.text}>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: colors.teal900,
        width: 250,
        height: 40,
        shadowColor: "#000",
        shadowOffset:{
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardStyle:{
        backgroundColor: colors.teal600,
        borderRadius: 10,
    },
    text:{
        color: colors.teal200,
        textAlign: 'center',
        fontSize: 20,
    },
})