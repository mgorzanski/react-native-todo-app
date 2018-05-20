import React from 'react';
import { Container, Content, ListItem, Text, Separator, Icon } from 'native-base';

export default class Settings extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Settings'
    });

    render() {
        return (
            <Container>
                <Content>
                <Separator bordered>
                    <Text>FORWARD</Text>
                </Separator>
                <ListItem >
                    <Text>Aaron Bennet</Text>
                </ListItem>
                <ListItem>
                    <Text>Claire Barclay</Text>
                </ListItem>
                <ListItem last>
                    <Text>Kelso Brittany</Text>
                </ListItem>
                <Separator bordered>
                    <Text>MIDFIELD</Text>
                </Separator>
                <ListItem>
                    <Text>Caroline Aaron</Text>
                </ListItem>
                </Content>
            </Container>
        );
    }
}