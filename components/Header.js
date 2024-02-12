import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = ({title}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="home" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
