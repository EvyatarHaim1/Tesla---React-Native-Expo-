import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const CarItem = ({ title, subtitle, imageURL }) => {
    return (
   <View style={styles.carContainer}>
      <ImageBackground 
        source={imageURL}
        style={styles.image}
        />
    <View style={styles.titles}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subtitle}> {subtitle} </Text>
    </View>

    <View style={styles.buttonContainer}>
      <StyledButton 
          type="primary" 
          content="Custom Order" 
          onPress={() => {
            console.warn( "custom order was pressed");
          }} 
      />
      <StyledButton 
      type="secondary" 
      content="Exiting Inverntory" 
      onPress={() => {
        console.warn("Exiting Inventory");
      }} 
      />
    </View>
  </View>
    )
}

export default CarItem;