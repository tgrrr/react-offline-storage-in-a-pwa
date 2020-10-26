import React from 'react';
import ReactDOM from 'react-dom';
import { set, get } from 'idb-keyval';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// TODO: refactor to own tests
async function testIDBKeyval() {
    await set('hello', 'world');
    const whatDoWeHave = await get('hello');
    console.log(`When we queried idb-keyval for 'hello', we found: ${whatDoWeHave}`);
}

testIDBKeyval();