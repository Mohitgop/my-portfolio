import React, { Component } from 'react';
import Avatar from './Avatar';
import AboutMenu from './AboutMenu';


export default class About extends Component {
  render() {
    return (
      <>
      <Avatar page = "about" />
      <AboutMenu/>
      </>
    )
  }
}
