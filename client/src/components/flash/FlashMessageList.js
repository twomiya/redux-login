import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages'


class FlashMessageList extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <FlashMessage 
                key={ message.id } 
                deleteFlashMessage={ this.props.deleteFlashMessage } 
                message={ message } 
            />
          )
        return (
            <div className="container">
                { messages }
            </div>
        );
    }
}

FlashMessageList.propTypes = {
    messages:PropTypes.array.isRequired
};
const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}
export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessageList);
