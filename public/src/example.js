'use strict';

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: false };
  }

  render() {
    if (this.state.click) {
      return 'You clicked.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ click: true }) },
      'Click'
    );
  }
}

const dom = document.querySelector('#component');
ReactDOM.render(e(Button), dom);