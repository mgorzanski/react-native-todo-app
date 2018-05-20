import React from 'react';
import { Container, Content, ListItem, Text, Separator, Icon } from 'native-base';

export default class TasksList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'Tasks',
        tabBarIcon: () => (
            <Icon type="Entypo" name="list" />
        )
    });

    render() {
        return (
            <Container>
                <Content>
                    <Separator bordered>
                        <Text>20.05.2018</Text>
                    </Separator>
                    <ListItem>
                        <Text>Testowe zadanie</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>21.05.2018</Text>
                    </Separator>
                    <ListItem>
                        <Text>Testowe zadanie</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Testowe zadanie</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Testowe zadanie</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}