import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import '../src/styles/app.css'
import PostItem from './components/postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';

function App() {

  const [posts, setPosts] = useState(
    [{body: 'Javascript is a programming language', id: 1, title: 'Javascript'},
    {body: 'Javascript is a programming language', id: 1, title: 'Javascript'},
    {body: 'Javascript is a programming language', id: 1, title: 'Javascript'}]
  )
  
  return (
    <div className='App'>
      <form>
        <MyInput type="text" placeholder='Name of Post' />
        <MyInput type="text" placeholder='Description of Post' />
        <MyButton disabled>Create Post</MyButton>
      </form>
      <PostList posts={posts} title={"List of posts for JS"}/>
    </div>
  );
}

export default App;
