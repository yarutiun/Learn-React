import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import '../src/styles/app.css'
import PostItem from './components/postitem';
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState(
    [{body: 'Javascript is a programming language', id: 1, title: 'Javascript'},
    {body: 'Javascript is a programming language', id: 1, title: 'Javascript'},
    {body: 'Javascript is a programming language', id: 1, title: 'Javascript'}]
  )

  const [posts2, setPosts2] = useState(
    [{body: 'Python is a programming language', id: 1, title: 'Python'},
    {body: 'Python is a programming language', id: 1, title: 'Python'},
    {body: 'Python is a programming language', id: 1, title: 'Python'}]
  )
  return (
    <div className='App'>
      <PostList posts={posts} title={"List of posts for JS"}/>
      <PostList posts={posts2} title={"List of posts for Python"}/>
    </div>
  );
}

export default App;
