import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import Title from '../components/Title';
import Header from '../components/Header';
// import Feed from '../components/Feed';
import SideBar from '../components/SideBar';

const AppContainer = ({  }) => {
    return (
        <div>
            <Header />
            <SideBar />
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,

};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
