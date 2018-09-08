import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Spinner, Text, Body, Right } from 'native-base';
import { fetchActivesList, fetchSelectedProfile } from '../../actions';

class ActivesScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Actives',
    headerStyle: {
      backgroundColor: '#ff0000',
    },
    headerTintColor: '#fff'
  };

  constructor(props) {
    super(props);
    this.onActiveSelect = this.onActiveSelect.bind(this);
  }

  componentWillMount() {
    this.props.fetchActivesList(this.props.organization);
  }

  onActiveSelect = (name, rank) => {
    console.log(name, rank);
    this.props.fetchSelectedProfile(this.props.organization, rank);
    this.props.navigation.navigate('SelectedProfile', { title: name });
  }

  renderActivesList = () => {
    if (this.props.loadingList) {
      return <Spinner />;
    } else if (this.props.error) {
      return (<Text>{this.props.error}</Text>);
    } return (
      <List
        enableEmptySections
        dataArray={this.props.listData}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow = (active) => {
    const name = `${active.firstName} ${active.lastName}`;
    return (
      <ListItem button onPress={() => { this.onActiveSelect(name, active.rank); }}>
        <Body>
          <Text>{name}</Text>
          <Text note>{active.position}</Text>
        </Body>
        <Right>
          <Text note>{active.rank}</Text>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          {this.renderActivesList()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { loadingList, error, listData, selectedUserRank } = state.actives;
  const { organization, rank } = state.auth;
  return (
    { loadingList, error, listData, selectedUserRank, organization, rank }
  );
};

export default connect(mapStateToProps, { fetchActivesList, fetchSelectedProfile })(ActivesScreen);
