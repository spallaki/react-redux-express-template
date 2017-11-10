import React from 'react';
// import PropTypes from 'prop-types';
import NewPost from './NewPost';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
      <div>
        This is my Reddit Feed!
        <NewPost />
      </div>
        );
    }
}


export default Feed;
