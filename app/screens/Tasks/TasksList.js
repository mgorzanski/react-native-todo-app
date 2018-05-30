import React from 'react';
import { Container, Content, ListItem, Text, Separator, Icon, List, Button } from 'native-base';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo } from './../../actions';

class TasksList extends React.Component {
    static navigationOptions = () => ({
        tabBarLabel: 'Tasks',
        tabBarIcon: () => (
            <Icon type="Entypo" name="list" />
        )
    });

    constructor(props) {
        super(props);
        this.tasks = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: this.props.todos
        };
    }

    deleteTask(secId, rowId, rowMap) {
        rowMap[`$(secId)$(rowId)`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }

    render() {
        const tasks = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container>
                <Content>
                    <Separator bordered>
                        <Text>20.05.2018</Text>
                    </Separator>
                    <List
                        dataSource={this.tasks.cloneWithRows(this.state.listViewData)}
                        renderRow={task => 
                            <ListItem>
                                <Text> {task.name} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={task => 
                            <Button full success onPress={() => alert(task.name)}>
                                <Icon active name="check" type="Entypo" />
                            </Button>}
                        renderRightHiddenRow={(task, secId, rowId, rowMap) => 
                            <View>
                                <Button full warning>
                                    <Icon active name="edit" type="MaterialIcons" />
                                </Button>
                                <Button full danger onPress={_ => this.deleteTask(secId, rowId, rowMap)}>
                                    <Icon active name="trashcan" type="Octicons" />
                                </Button>
                            </View>}
                        leftOpenValue={75}
                        rightOpenValue={75}
                    />
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
        toggleTodo: (id) => dispatch(toggleTodo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);