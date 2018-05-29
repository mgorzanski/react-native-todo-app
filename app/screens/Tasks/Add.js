import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Text } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { View } from 'react-native';

export default class Add extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'Add task',
        tabBarIcon: () => (
            <Icon type="Entypo" name="add-to-list" />
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            taskDate: this.getCurrentDate(),
            taskName: ''
        }
    }

    getCurrentDate() {
        const date = new Date();
        const mm = date.getMonth() + 1;
        const dd = date.getDate();

        return date.getFullYear() + '-' + (mm > 9 ? '' : '0') + mm + '-' + (dd > 9 ? '' : '0') + dd;
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input onChangeText={(text) => this.setState({ taskName: text })} />
                        </Item>
                        <View style={{ marginLeft: 15, marginTop: 21 }}>
                            <Label>Date</Label>
                            <DatePicker
                                date={this.state.taskDate}
                                mode='date'
                                placeholder='Select date'
                                format='YYYY-MM-DD'
                                confirmBtnText='Select'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => this.setState({ taskDate: date })}
                                iconComponent={<Icon type="MaterialIcons" name="date-range" />}
                            />
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}