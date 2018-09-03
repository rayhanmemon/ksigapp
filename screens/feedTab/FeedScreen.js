import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Card, CardItem, Thumbnail, Body, Text, Left, Right, Button, Image, Icon, Input } from 'native-base';

class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Announcements',
    headerStyle: {
      backgroundColor: '#ff0000',
    },
    headerTintColor: '#fff'
  };

  renderPosts = () => {
    return (
      <Text>Working</Text>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.messageBoxContainer}>
            <Input style={styles.messageBox} />
            <Button style={styles.sendButton}>
              <Text style={styles.sendButtonText}>POST</Text>
            </Button>
          </View>
          {this.renderPosts()}
        </Content>
      </Container>
    );
  }
}

const styles = {
  messageBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#cccccc',
    backgroundColor: '#eeeeee',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  messageBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
  },
  sendButton: {
    color: 'Blue',
    marginLeft: 10,
    marginRight: 5,
  },
  sendButtonText: {
    fontSize: 10,
    fontWeight: '500'
  }
};

export default FeedScreen;
