import { Component } from 'react'

export class Button extends Component {
    
    handleClick = () => {
      // eslint-disable-next-line
      console.log('Button is clicked!!');
    };
    
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.props.text}
        </button>
      );
    }
  }