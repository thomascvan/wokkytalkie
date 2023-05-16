import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopBar from './TopBar';

export default function ChatView({ chat, onBackPress }) {
  const { person, conversation } = chat;

  return (
    <View style={styles.container}>
      <TopBar
        leftContent={<BackButton onPress={onBackPress} />}
        rightContent={<ChatActions />}
        centerContent={
          <>
            <PersonIcon person={person} />
            <Text style={styles.personName}>{person.name}</Text>
          </>
        }
      />
      <View style={styles.conversationContainer}>
        <Text style={styles.conversationText}>{conversation}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conversationContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  conversationText: {
    fontSize: 16,
  },
  personName: {
    marginLeft: 8,
    fontSize: 16,
  },
});
