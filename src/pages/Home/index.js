import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { convertTimeToString } from '../../utils/app.utils';

import HomeStyleContainer from './Home.styled';

const Home = (props) => {
    return(
        <HomeStyleContainer>
        </HomeStyleContainer>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Home);