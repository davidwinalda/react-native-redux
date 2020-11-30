import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import {
  addOrderAction,
  deleteOrderAction,
} from '../../redux/actions/orderAction';

const Home = (props) => {
  console.log(props);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.status}>
        <Text>Total Pesanan: {props.count.totalItem}</Text>
        <Button
          title="Checkout"
          onPress={() => props.navigation.navigate('Checkout')}
        />
      </View>
      <View>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Paket Holysteak 1</Text>
        <Text style={styles.subtitle}>1 Grain fed Sirlion Steak + 1 Ades</Text>
        <Text style={styles.price}>99.000</Text>
      </View>
      <View>
        <View style={styles.button}>
          <Button title="Tambah Pesanan" onPress={() => props.addOrder()} />
        </View>
        <View>
          <Button title="Kurangi Pesanan" onPress={() => props.deleteOrder()} />
        </View>
        <View style={styles.button}>
          <Button
            title="Tambah Menu"
            onPress={() => props.navigation.navigate('ManageFood')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 100,
    padding: 8,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  status: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
  },
});

// Menggunakan state yang ada di Redux kedalam komponen/page App.js
const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.order,
    food: state.foods,
  };
};

// Menggunakan state method yang ada di Redux ke dalam komponen/pages ini
const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: () => dispatch(addOrderAction),
    deleteOrder: () => dispatch(deleteOrderAction),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
