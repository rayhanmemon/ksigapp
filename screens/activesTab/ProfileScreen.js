import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Text } from 'native-base';
import BrotherStats from '../../components/BrotherStats';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      return {
        title: `${navigation.state.params.title}`,
        headerStyle: {
          backgroundColor: '#ff0000',
        },
        headerTintColor: '#fff'
      };
    };

  renderProfileScreen = () => {
    if (this.props.loadingProfile) {
      return <Spinner color='green' />;
    } else if (this.props.error) {
      return (
        <Text>Failed to Load Profile</Text>
      );
    }
    //if reading profile info is successful, create stats object and pass to
    //BrotherStats component
    const profile = {
      admin: this.props.SelectedAdmin,
      brotherhoods: this.props.SelectedBrotherhoods,
      chapters: this.props.SelectedChapters,
      communityService: this.props.SelectedCommunityService,
      dues: this.props.SelectedDues,
      firstName: this.props.SelectedFirstName,
      lastName: this.props.SelectedLastName,
      mixers: this.props.SelectedMixers,
      position: this.props.SelectedPosition,
      goodStanding: this.props.SelectedGoodStanding
    };
    return <BrotherStats profile={profile} />;
  }

  render() {
    return (
        this.renderProfileScreen()
    );
  }
}

const mapStateToProps = (state) => {
  const {
    loadingProfile,
    error,
    SelectedAdmin,
    SelectedBrotherhoods,
    SelectedChapters,
    SelectedCommunityService,
    SelectedDues,
    SelectedFirstName,
    SelectedLastName,
    SelectedMixers,
    SelectedPosition,
    SelectedRank,
    SelectedGoodStanding } = state.actives;
  const { organization } = state.auth;

  return (
    {
    organization,
    loadingProfile,
    error,
    SelectedAdmin,
    SelectedBrotherhoods,
    SelectedChapters,
    SelectedCommunityService,
    SelectedDues,
    SelectedFirstName,
    SelectedLastName,
    SelectedMixers,
    SelectedPosition,
    SelectedRank,
    SelectedGoodStanding }
  );
};

export default connect(mapStateToProps)(ProfileScreen);
