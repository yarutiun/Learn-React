import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import '../src/styles/app.css'
import PostItem from './components/postitem';

function App() {

  return (
    <div className='App'>
      {/* <div className='post'>
        <div className='post-content'>
          <strong>1, Javascript</strong>
          <div>Javascript - a programming language</div>
        </div>
        <div className='post-btns'>
          <button>Delete</button>
        </div>
      </div> */}
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    </div>
  );
}

export default App;
