import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const Checkout = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Checkout Page</Text>
      <Text>Jumlah pesanan {props.count.totalItem}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
    padding: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.order,
  };
};
export default connect(mapStateToProps, null)(Checkout);
