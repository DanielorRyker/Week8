import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function SecondScreen({ navigation }) {
  const data = [
    {
      id: '1',
      category: 'smartphone',
      name: 'Iphone',
      image: require('../assets/images/1.png'),
      price: '748',
    },
    {
      id: '2',
      category: 'smartphone',
      name: 'Samsung',
      image: require('../assets/images/2.png'),
      price: '545',
    },
    {
      id: '3',
      category: 'smartphone',
      name: 'Xiaomi',
      image: require('../assets/images/3.png'),
      price: '454',
    },
    {
      id: '4',
      category: 'smartphone',
      name: 'Gaming phone',
      image: require('../assets/images/4.png'),
      price: '784',
    },
  ];
  const [categoryValue, setCategoryValue] = useState('all');
  const filteredData = categoryValue === 'all' ? data : data.filter(item => item.category === categoryValue);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.column_center_flex,
        { justifyContent: 'space-between' },
        styles.container,
      ]}>
      <View style={[styles.row_space_between_flex, { width: 'auto' }]}>
        <View style={styles.row_center_flex}>
          <TouchableOpacity onPress={() => navigation.navigate('First Screen')}>
            <Image source={require('../assets/images/backspace.png')} />
          </TouchableOpacity>
          <Text>Electronics</Text>
        </View>
        <View style={styles.row_center_flex}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/cart.png')}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <Image source={require('../assets/images/girl_avatar.png')} />
        </View>
      </View>
      <View
        style={[
          styles.row_space_between_flex,
          { width: '80%' },
          styles.input_card,
        ]}>
        <View style={styles.row_center_flex}>
          <Image source={require('../assets/images/search.png')} />
          <TextInput placeholder="Search" style={styles.text_input} />
        </View>
        <TouchableOpacity>
          <Text>V</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row_space_between_flex}>
        <Text style={{ gap: 2 }}>Categories</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row_space_around_flex, { gap: 10 }]}>
        <TouchableOpacity
          onPress={() => setCategoryValue('smartphone')}
          style={styles.categories_button}>
          <Image
            source={require('../assets/images/smart.png')}
            style={{ height: 80, width: 80 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategoryValue('tablet')}
          style={styles.categories_button}>
          <Image
            source={require('../assets/images/ipad.png')}
            style={{ height: 80, width: 80 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategoryValue('laptop')}
          style={styles.categories_button}>
          <Image
            source={require('../assets/images/macbook.png')}
            style={{ height: 80, width: 80 }}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.row_space_around_flex]}>
        <Text style={{ color: 'lightcyan', backgroundColor: 'aqua', padding: 2 }}>
          Best Sell
        </Text>
        <Text>Best Matches</Text>
        <Text>Popular</Text>
      </View>
      <FlatList
        contentContainerStyle={{ height: 'auto' }}
        data={filteredData}
        renderItem={({ item }) => (
          <View style={[{ borderWidth: 1, width: 'auto' }, styles.row_space_between_flex]}>
            <View style={styles.row_center_flex}>
              <Image source={item.image} />
              <View style={styles.column_center_flex}>
                <Text>{item.name}</Text>
                <Image source={require('../assets/images/rating.png')} />
              </View>
            </View>
            <Text>{item.price} $</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => setCategoryValue('all')}
        style={[
          {
            color: 'white',
            backgroundColor: 'lightgray',
            height: 30,
            borderWidth: 1,
          },
          styles.row_center_flex,
        ]}>
        <Text>See all</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/images/banner.png')}
        style={{ height: 100, width: 'auto' }}
      />
      <View
        style={[styles.row_space_around_flex, { borderWidth: 1, padding: 2 }]}>
        <View style={styles.column_center_flex}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/home.png')}
              style={{ height: 30, width: 30 }}
            />
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column_center_flex}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/search.png')}
              style={{ height: 30, width: 30 }}
            />
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column_center_flex}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/heart.png')}
              style={{ height: 30, width: 30 }}
            />
            <Text>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column_center_flex}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/inbox.png')}
              style={{ height: 30, width: 30 }}
            />
            <Text>Inbox</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column_center_flex}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/account.png')}
              style={{ height: 30, width: 30 }}
            />
            <Text>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categories_button: {
    backgroundColor: 'pink',
    borderWidth: 1,
  },
  input_card: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    gap: 5,
    width: 'auto',
  },
  text_input: {
    width: '100%',
    borderWidth: 0,
  },
  container: {
    backgroundColor: 'white',
    gap: 10,
    height: '100%',
    alignItems: 'flex-start',
    padding: '100%',
  },
  row_center_flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_left_flex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row_right_flex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row_space_between_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row_space_around_flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  column_center_flex: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});