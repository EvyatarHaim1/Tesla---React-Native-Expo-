import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const CarItem = ({ car:{name, tagline,taglineCTA, image }}) => {
    return (
   <View style={styles.carContainer}>
      <ImageBackground 
        source={image}
        style={styles.image}
        />
    <View style={styles.titles}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subtitle}> {tagline} {' '}
             <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
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