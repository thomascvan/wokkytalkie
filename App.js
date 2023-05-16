import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TopBar from './components/TopBar';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';

export default function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackPress = () => {
    setSelectedChat(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <TopBar />
      </View>
      {selectedChat ? (
        <ChatView chat={selectedChat} onBackPress={handleBackPress} />
      ) : (
        <View style={styles.chatListContainer}>
          <ChatList onChatClick={handleChatClick} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    height: 60, // Adjust the value as needed
  },
  chatListContainer: {
    flex: 1,
  },
});
