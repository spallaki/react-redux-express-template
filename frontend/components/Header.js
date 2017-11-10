import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
      <div>
        <img alt="logo" src="https://upload.wikimedia.org/wikipedia/en/8/82/Reddit_logo_and_wordmark.svg" />
        <Title name = {name}/>
      </div>
        );
    }
}


export default Header;
