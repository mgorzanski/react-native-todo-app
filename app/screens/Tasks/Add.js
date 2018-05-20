import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';

export default class Add extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'Add task',
        tabBarIcon: () => (
            <Icon type="Entypo" name="add-to-list" />
        )
    });

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}