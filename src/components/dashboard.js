/* @flow */

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

import * as COLOR from "../config/colors";

class Dashboard extends Component {
  static navigationOptions = {
    tabBarLabel: "Dashboard",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="view-dashboard" size={28} color={COLOR.ICON} />
    )
  }; // navigationOptions

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLOR.BACKGROUND
        }}
      >
        <View
          style={{
            flex: 1,
            marginBottom: 72,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon size={96} name="view-dashboard" color={COLOR.TINT_DARK} />
        </View>
      </View>
    );
  } // render
} // Dashboard

export default Dashboard;
