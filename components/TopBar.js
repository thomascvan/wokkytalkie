import React from 'react';
import { View, Text, StyleSheet } from 'react-native';``
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <MaterialIcons name="circle" size={35} color="#000" />
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.title}>Chats</Text>
      </View>
      <View style={styles.rightSection}>
        <Ionicons name="camera-outline" size={24} color="#000" style={styles.icon} />
        <Ionicons name="pencil-outline" size={24} color="#000" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0, // Adjust the value as needed
    height: 60, // Adjust the value as needed
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  leftSection: {
    justifyContent: 'center',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 8,
  },
});