import React from 'react';

class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { 
            text: '',
        }
    }

    render() {
        return(
            <input 
                type='text'
                onChange={}
                value={this.state.text}
            />
        ); 
    }
};

export default Input; 