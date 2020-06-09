import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  
  state = {
    starWarsChars: [
      {name: 'Luke Skywalker', side: 'light'},
      {name: 'Yoda', side: 'light'},
      {name: 'Obi-Wan Kenobi', side: 'light'},
      {name: 'Palpatine', side: 'dark'},
      {name: 'Darth Vader ', side: 'dark'},
    ]
  }

render () {
    return (
      <ul>
        {this.state.starWarsChars.map((char, index) => {
          return (
            <li key={char.name + index}>
              <strong> {char.name} </strong> - &nbsp;
              {char.side}
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
