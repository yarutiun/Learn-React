import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import '../src/styles/app.css'
import PostItem from './components/postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import { useRef } from 'react';

function App() {

  const [posts, setPosts] = useState(
    [{body: 'Javascript is a programming language', id: 1, title: 'Javascript'},
    {body: 'Javascript is a programming language', id: 1, title: 'Javascript'},
    {body: 'Javascript is a programming language', id: 1, title: 'Javascript'}]
  )

  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  

  const addNewPost = (e) => {
    e.preventDefault();
    const NewPost = {
      id: Date.now(),
      title: title, // Assign the title from the state
      body: title2, // Assign the title2 from the state as the body
    };
    setPosts([...posts, NewPost]);
    setTitle(''); // Clear the title input
    setTitle2(''); // Clear the title2 input
    console.log(NewPost);
  };
 
  return (
    <div className='App'>
      <form>
        <MyInput
        onChange = {e => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder='Name of Post'
        />
        <MyInput
        onChange = {e => setTitle2(e.target.value)}
        value={title2}
        type="text"
        placeholder='Description of Post'
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title={"List of posts for JS"}/>
    </div>
  );
}

export default App;
