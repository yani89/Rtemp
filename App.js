import React, { Component } from 'react';
import { Container, Header, Content,Body, Title, Footer, FooterTab, Button, Icon, Left, Right, Text, Badge } from 'native-base';

import { Alert, TabNavigator ,AppRegistry, StyleSheet, View } from 'react-native';


export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical
				onPress={() => {
					Alert.alert('You tapped the button!');
				}}			
			>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical
				onPress={() => {
					Alert.alert('You tapped the button!');
				}}
			>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}