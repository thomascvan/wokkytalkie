import { PROJECT_ID } from "@env"

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Pressable, Text } from 'react-native';
import TopBar from './components/TopBar';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';

import { Web3Modal, Web3Button, useWeb3Modal } from '@web3modal/react-native';

const projectId = PROJECT_ID;

const providerMetadata = {
  name: 'YOUR_PROJECT_NAME',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
};

export default function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const { isOpen, open, close, provider, isConnected } = useWeb3Modal();

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackPress = () => {
    setSelectedChat(null);
  };

  return (
    <SafeAreaView style={styles.container}>
        {/* <Pressable onPress={open}>
        <Text>{isConnected ? 'View Account' : 'Connect'}</Text>
      </Pressable> */}
      <Web3Button />
      <Web3Modal projectId={projectId} providerMetadata={providerMetadata}  />
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