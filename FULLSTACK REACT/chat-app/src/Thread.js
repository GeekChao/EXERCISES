import React from 'react';
import PropTypes from 'prop-types';
import TextViewSubmit from './TextViewSubmit';
import MessageList from './MessageList';

const Thread = (props) => {
    return (
        <div>
            <MessageList  messages={props.messages} handleDelte={props.handleDelte}/>
            <TextViewSubmit handleSubmit={props.handleSubmit}/>
        </div>
    );
};

Thread.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleDelte: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object)
};

export default Thread;