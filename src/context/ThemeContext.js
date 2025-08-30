import React, { Component } from 'react';

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export class ThemeProvider extends Component {
  state = {isDarkTheme: false,};

  toggleTheme = () => {
    this.setState(prevState => ({ isDarkTheme: !prevState.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;