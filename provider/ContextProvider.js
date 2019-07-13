import Context from '../config/Context';

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.body = document.querySelector('body');
  }

  lockScrollBar(isLocked) {
    if (isLocked) {
      setTimeout(() => {
        document.querySelector('body').style.overflowY = 'hidden';
        document.ontouchmove = function(e) {
          e.preventDefault();
        };
      }, 100);
    } else {
      setTimeout(() => {
        document.querySelector('body').style.overflowY = 'visible';
        document.ontouchmove = function() {
          return true;
        };
      }, 100);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          lockScrollBar: isLocked => this.lockScrollBar(isLocked)
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
