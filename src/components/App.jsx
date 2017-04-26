import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
   render() {
       return (
           <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
           </MuiThemeProvider>
       );
   }
}

export default App;
