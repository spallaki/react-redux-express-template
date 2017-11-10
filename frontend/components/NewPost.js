import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
    <div>
      <div style={{border: '2px solid black', width: '300px', padding: '20px'}}>
        <h1>New Post</h1><br />
        <input type="text" placeholder="Title" /><br />
        <textarea placeholder="Write your post" /><br />
        <input type="text" placeholder="Links/Attachments" /><br />
        <button>Submit</button>
      </div>
    </div>
        );
    }
}


export default NewPost;
