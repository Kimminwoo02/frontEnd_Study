import { useState } from 'react';
import React from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useRef } from 'react';
import dummy from './data/item.json';

function App() {
  //  const [items, setItems] = useState(dummy.items);
  //  const [items, setItems] = useState( JSON.parse( localStorage.getItem('shoppinglist')));
  
  const [items, setItems] = useState( [
    {
        "id": 1,
        "checked": true,
        "item": "사과"
    },
    {
        "id": 2,
        "checked": false,
        "item": "바나나"
    },
    {
        "id": 3,
        "checked": false,
        "item": "커피"
    }
]);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = ( newItems )=>{
      setItems(newItems);
      localStorage.setItem('shoppinglist', JSON.stringify( newItems ))
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    setAndSaveItems(listItems);
  }
 
  const handleCheck = (id)=>{
    const listItems = items.map((item) => item.id === id ? {
        ...item, checked: !item.checked  }: item);
        setItems(listItems);
        setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;
      addItem(newItem);
      setNewItem('');
  }

  return (
    <div className="App">
      <Header title="장바구니 목록" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
      <main>
          {items.length ? (
              <ItemList
                  items={items}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
              />
          ) : (
              <p style={{ marginTop: '2rem' }}> 장바구니가 비었습니다.</p>
          )}
      </main>
  )
}

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
      <form className='addForm' onSubmit={handleSubmit}>
          <label htmlFor='addItem'>상품명 입력</label>
          <input
              autoFocus
              ref={inputRef}
              id='addItem'
              type='text'
              placeholder='상품명을 입력하세요.'
              required
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
          />
          <button
              type='submit'
              aria-label='Add Item'
              onClick={() => inputRef.current.focus()}
          >
              <FaPlus />
          </button>
      </form>
  )
}

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
      <ul>
          {items.map((item) => (
              <LineItem
                  key={item.id}
                  item={item}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
              />
          ))}
      </ul>
  )
}

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
      <li className="item">
          <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
          />
          <label
              style={(item.checked) ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(item.id)}
          >{item.item}</label>
          <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
          />
      </li>
  )
}

const SearchItem = ({ search, setSearch }) => {
  return (
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='search'>Search</label>
          <input
              id='search'
              type='text'
              role='searchbox'
              placeholder='검색어를 입력하세요'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
      </form>
  )
}

const Header = ({title}) => {
  return( 
      <header>
        <h1> {title} </h1>
      </header>
  );
};
export default App;

const Footer = ({ length }) => {
  
  return (
    <footer>
        <p>{ length } 개의 상품이 있습니다.  </p>
    </footer>
  );
};


/*
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 22px;
}

body {
  min-height: 100vh;
  font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 500px;
  border: 1px solid steelblue;
  margin: auto;
}

header {
  width: 100%;
  padding: 0 0.25em;
  background-color: steelblue;
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
}

footer {
  width: 100%;
  padding: 0.25em;
  background-color: steelblue;
  color: aliceblue;
  display: grid;
  place-content: center;
}

ul {
  width: 100%;
  list-style: none;
  padding: 0 0.25rem 0.25rem;
}

ul li::before {
  content: "\200B";
}

.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0.25rem 0;
  background-color: #eee;
}

.item:first-child {
  margin: 0;
}

.item input[type="checkbox"] {
  text-align: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.item input[type="checkbox"]:focus + label {
  text-decoration: underline;
}

.item > label {
  font-size: 0.75rem;
  flex-grow: 1;
}

.item svg {
  width: 48px;
  min-width: 48px;
  height: 36px;
  font-size: 1rem;
  color: steelblue;
  cursor: pointer;
}

.item svg:focus,
.item svg:hover {
  color: red;
  outline: none;
}

.addForm {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0 0;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid #eee;
}

.addForm label {
  position: absolute;
  left: -99999px;
}

.addForm input[type="text"] {
  flex-grow: 1;
  max-width: calc(100% - 50px);
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  outline: none;
  border: 1px solid #eee;
}

button {
  height: 48px;
  min-width: 48px;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: aliceblue;
  color: steelblue;
  cursor: pointer;
  border: 1px solid steelblue;
}

button:focus,
button:hover {
  color: white;
  background-color: steelblue;
  outline: none;
}

.searchForm {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0.25rem 0 0;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid #eee;
}

.searchForm label {
  position: absolute;
  font-size: 0;
}

.searchForm input[type="text"] {
  flex-grow: 1;
  max-width: 100%;
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid #eee;
}

*/