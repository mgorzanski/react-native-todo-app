import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Text, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class Add extends React.Component {
    static navigationOptions = () => ({
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

    clearText = () => {
        this._textInput.setNativeProps({ text: '' });
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
                            <Input onChangeText={(text) => this.setState({ taskName: text })} ref={component => this._textInput = component} />
                        </Item>
                        <View style={styles.date}>
                            <Label>Date</Label>
                            <DatePicker
                                date={this.state.taskDate}
                                mode='date'
                                placeholder='Select date'
                                format='YYYY-MM-DD'
                                confirmBtnText='Select'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => this.setState({ taskDate: date })}
                                style={styles.datepicker}
                                iconComponent={<Icon type="MaterialIcons" name="date-range" />}
                            />
                            <Button light block style={styles.btn} onPress={() => {
                                this.props.addTodo(this.state.taskName, this.state.taskDate);
                                this.clearText();
                            }}><Text> Add </Text></Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (name, date) => dispatch(addTodo(name, date))
    };
};

const styles = StyleSheet.create({
    date: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,
        marginBottom: 15
    },

    datepicker: {
        marginTop: 10
    },

    btn: {
        marginTop: 19,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);