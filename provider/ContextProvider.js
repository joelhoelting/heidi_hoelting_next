import Context from '../config/Context';

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.body = document.querySelector('body');
  }

  toggleScrollBar() {
    setTimeout(() => {
      let currentOverflowY = document.querySelector('body').style.overflowY;

      currentOverflowY === 'hidden'
        ? (document.querySelector('body').style.overflowY = 'visible')
        : (document.querySelector('body').style.overflowY = 'hidden');
    }, 0);
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
