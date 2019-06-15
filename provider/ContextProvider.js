import Context from '../config/Context';

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.body = document.querySelector('body');
  }

  toggleScrollBar() {
    let currentOverflowY = this.body.style.overflowY;

    currentOverflowY === 'hidden' ? (this.body.style.overflowY = 'visible') : (this.body.style.overflowY = 'hidden');
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          toggleScrollBar: () => this.toggleScrollBar()
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
