import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Button, Text,Header,Icon,Left, Body,Title, Right,Content, Form, Item, Input} from 'native-base';
export default class GeneralExample extends Component {
  render() {
    return (
        // <View style={{flex: 1,justifyContent: 'center', alignContent: 'center', borderWidth:2, borderColor: 'red'}}>

      <Container>
      <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Jasper</Title>
          </Body>
          <Right />
          </Header>
          {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'green'}}> */}
               <Content>
          <Form>
              <View style={{flex: 1, borderWidth:2, flexDirection: 'row', borderColor: 'red', height: 300}}>
            <View >

            {/* <Item style={{borderWidth: 1, borderColor: 'blue', height: 100,}}> */}
              <Input placeholder="Username" />
            {/* </Item> */}
            </View>
            <Item>
              <Input placeholder="Password" />
            </Item>
              </View>
          </Form>
          </Content>
                {/* <Button>
                    <Text>
                        Buttons
                    </Text>
                </Button> */}
        {/* </View> */}
      </Container>
        // </View>
    );
  }
}