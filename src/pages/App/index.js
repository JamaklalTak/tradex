import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Routes from '../../Routes';
import AppStyleContainer from './App.styled.js';

const App = (props) => {
  return (
    <AppStyleContainer>
        <Routes/>
    </AppStyleContainer>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
