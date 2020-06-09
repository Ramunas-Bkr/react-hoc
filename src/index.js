import React from 'react';
import ReactDOM from 'react-dom';

const starWarsChars = [
  { name: 'Luke Skywalker', side: 'light' },
  { name: 'Yoda', side: 'light' },
  { name: 'Obi-Wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' },
  { name: 'Darth Vader ', side: 'dark' },
]
const App = ({ list }) => (
  <ul>
    {list.map((char, index) => {
      return (
        <li key={char.name + index}>
          <strong> {char.name} </strong> - &nbsp;
          {char.side}
        </li>
      )
    })}
  </ul>
)

const filteredProps = Component => ({ list, side }) => {
  const filteredList = list.filter(key => key.side === side)
  return (<Component list={filteredList} />)
}

const FilteredList = filteredProps(App)

ReactDOM
  .render(
    <FilteredList list={starWarsChars} side="light" />,
    document.getElementById('root'));
