import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Card, Button} from 'react-native-paper';
const {height, width} = Dimensions.get('screen');
import img1 from '../assets/v1.jpg';
const _card = () => {
  return (
    <View style={{width: width / 2 - 10}}>
      <Card style={{marginHorizontal: 3, marginVertical: 10}}>
        <Card.Content>
          <Card.Cover
            source={img1}
            style={{height: 100, width: '100%', alignSelf: 'center'}}
          />
          <Text style={{fontWeight: '700', fontSize: 17, marginVertical: 5}}>
            Unique Activities with local experts
          </Text>
          <TouchableOpacity>
            <Button mode="outlined">
              <Text style={{color: '#f72585'}}>View Offer </Text>
            </Button>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default _card;

const styles = StyleSheet.create({});
