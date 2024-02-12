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
import _card from './_card';
const {height, width} = Dimensions.get('screen');
const ShowImage = ({url}) => {
  return (
    <Card.Cover
      source={url}
      style={{
        width: width - 20,
        height: height / 3,
        alignSelf: 'center',
      }}
    />
  );
};
const _romms = () => {
  return (
    <>
      <ScrollView>
        <Header title="Romms" />
        <View style={styles.show}>
          <FlatList
            data={[img1, img2, img3]}
            keyExtractor={(item, index) => item}
            renderItem={({item, index}) => <ShowImage url={item} />}
            horizontal
            id={item => item}
          />

          <View style={styles.Details}>
            <View style={styles.head}>
              <Text style={styles.headText}>Romm: 1 | </Text>
              <Text style={styles.headText}>Guest: 1 | </Text>
              <Text style={styles.headText}>Sofa: 1</Text>
            </View>
            <View>
              <Card>
                <Card.Actions>
                  <View style={styles.headContent}>
                    <Text style={styles.SecondText}>Single Romm in center</Text>
                    <Text style={styles.PrixText}>$89/night</Text>
                  </View>
                </Card.Actions>
                {/* <Text style={styles.SecondText}>Single Romm in center</Text> */}
                {/* </Card.Title> */}
                <Card.Content>
                  <Text style={styles.AbtText}>
                    Drainée par l'Arc qui coule d'est en ouest et divise le
                    territoire en deux parties sensiblement égales, la commune
                    présente un patrimoine naturel riche : deux sites Natura
                    2000 avec une frange du parc de la Vanoise au nord{' '}
                  </Text>
                </Card.Content>
              </Card>
            </View>

            <View style={{marginTop: 15}}>
              <TouchableOpacity>
                <Button mode="contained" buttonColor="#f72585">
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      letterSpacing: 3,
                      textTransform: 'uppercase',
                      color: 'black',
                    }}>
                    check avaibility
                  </Text>
                </Button>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{fontWeight: '700', fontSize: 20, marginLeft: 10}}>
              You may also be interested in :
            </Text>
            <View>
              <FlatList
                renderItem={() => <_card />}
                data={[1, 2, 3]}
                numColumns={2}
                id={item => {
                  item;
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default _romms;

const styles = StyleSheet.create({
  show: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  Details: {
    marginTop: 10,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headText: {
    fontWeight: '500',
    fontSize: 17,
    color: '#0077b6',
  },
  SecondText: {
    fontWeight: '800',
    fontSize: 25,
    color: 'black',
    marginTop: 15,
  },
  AbtText: {
    fontWeight: '500',
    fontSize: 18,
  },
  headContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PrixText: {
    color: '#f72585',
    fontWeight: '500',
    fontSize: 20,
  },
});
