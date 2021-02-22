import React from 'react'
import { View, Text, ImageBackground} from 'react-native'
import styles from './styles'
const CarItem = ({ title, subtitle, imageURL }) => {
    return (
   <View style={styles.carContainer}>
      <ImageBackground 
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
        />
    <View style={styles.titles}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subtitle}> {subtitle} </Text>
    </View>
  </View>
    )
}

export default CarItem;