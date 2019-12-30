import React from 'react';
import { ModalProvider } from 'styled-react-modal';
import { connect } from 'react-redux';

import Routes from '../../Routes';
import SidePanel from '../../components/SidePanel';

import AppStyleContainer from './App.styled.js';

const App = (props) => {
  return (
    <AppStyleContainer>
      <ModalProvider>
        <SidePanel {...props} />
        <Routes/>
      </ModalProvider>
    </AppStyleContainer>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
