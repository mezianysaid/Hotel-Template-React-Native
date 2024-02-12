import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../Header';
import {Card, Button} from 'react-native-paper';
import img1 from '../assets/v2.jpg';
import img2 from '../assets/v1.jpg';
import img3 from '../assets/rm1.jpeg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('screen');
const buttonsData = [
  {id: '1', title: 'Pieza', onPress: () => console.log('Button 1 pressed')},
  {id: '2', title: 'Norj', onPress: () => console.log('Button 2 pressed')},
  {id: '3', title: 'Chamal', onPress: () => console.log('Button 3 pressed')},
  // Add more buttons as needed
];
// Function to render each item
const renderItem = ({item}) => (
  <View style={{marginVertical: 5, marginHorizontal: 8}}>
    <TouchableOpacity>
      <Button
        mode="contained"
        buttonColor="#ced4da"
        style={{height: 55, justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'black',
          }}>
          {item.title}
        </Text>
      </Button>
    </TouchableOpacity>
  </View>
);

const Features = () => {
  return (
    <View>
      <FlatList
        data={[1, 2]}
        renderItem={() => (
          <View
            style={{
              width: width - 50,
              marginHorizontal: 5,
              marginVertical: 5,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Card>
              <Card.Cover
                source={img1}
                style={{height: 300, width: '100%', alignSelf: 'center'}}
              />
              <Card.Content>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    color: 'black',
                  }}>
                  Superior Romm
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    letterSpacing: 3,
                    textTransform: 'capitalize',
                    color: 'gray',
                  }}>
                  Single Room
                </Text>
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-between'}}>
                <Button>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: '#900',
                    }}>
                    $98.4
                  </Text>
                </Button>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="cards-heart-outline"
                    size={45}
                    color="#900"
                  />
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
        )}
        keyExtractor={item => item}
        horizontal
      />
    </View>
  );
};

const Recommended = () => {
  return (
    <View>
      <FlatList
        data={[1, 2]}
        renderItem={() => (
          <View
            style={{
              width: width - 50,
              marginHorizontal: 5,
              marginVertical: 5,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Card>
              <View style={styles.cardRecommend}>
                <View style={{height: 150, width: '50%', padding: 10}}>
                  <Card.Cover
                    source={img1}
                    style={{height: '100%', width: '100%', alignSelf: 'center'}}
                  />
                </View>
                <View>
                  <Card.Content>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      Superior Romm
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        textTransform: 'capitalize',
                        color: 'gray',
                      }}>
                      Single Room
                    </Text>
                  </Card.Content>
                  <Card.Content
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Button>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: '500',
                            color: '#900',
                          }}>
                          $98.4
                        </Text>
                      </Button>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <MaterialCommunityIcons
                          name="star"
                          size={30}
                          color="gold"
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                          }}
                        />
                        <Text
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            fontSize: 18,
                          }}>
                          5.4
                        </Text>
                      </View>
                    </View>
                  </Card.Content>
                </View>
              </View>
            </Card>
          </View>
        )}
        keyExtractor={item => item}
        horizontal
      />
    </View>
  );
};
const _HotelHome = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={styles.headWrapper}>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'grey'}}>
            Find and Book
          </Text>
          <Text style={{fontSize: 27, fontWeight: '800', color: 'black'}}>
            The best Hotel Romms
          </Text>

          <FlatList
            data={buttonsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
          />
          <Text style={{fontSize: 27, fontWeight: '800', color: 'black'}}>
            Featured
          </Text>
          <Features />
        </View>
        <View style={styles.recommended}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: '800',
              color: 'grey',
              textTransform: 'capitalize',
            }}>
            recommended
          </Text>
          <Recommended />
        </View>
      </ScrollView>
    </>
  );
};

export default _HotelHome;

const styles = StyleSheet.create({
  btnTxt: {
    color: 'black',
  },
  headWrapper: {
    margin: 6,
  },
  recommended: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  cardRecommend: {
    flex: 1,
    flexDirection: 'row',
  },
});
