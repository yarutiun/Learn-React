import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import '../src/styles/app.css'
import classes from './styles/app.css'
import PostItem from './components/postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import { useRef } from 'react';

function App() {

  const [posts, setPosts] = useState(
    [{body: 'this midnight', id: 1, title: 'Do some coding'},
    {body: 'one day', id: 2, title: 'Wash the dishes'},
    {body: 'RIGHT NOW!', id: 3, title: 'Some more coding'}]
  )

  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  
  const deletePost = (post) => {
    // Filter out the post with the given id
    setPosts(posts.filter(p => p.id !== post.id));
  };

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
        placeholder='Name of the Note'
        />
        <MyInput
        onChange = {e => setTitle2(e.target.value)}
        value={title2}
        type="text"
        placeholder='Description of the Note'
        />
        <MyButton onClick={addNewPost}>Create Note</MyButton>
      </form>
      {posts.length !== 0 ? (
      <PostList remove={deletePost} posts={posts} title={"List of your personal notes"} />
    ) : (
      <h1 style={{textAlign: 'center', color: 'teal', marginTop: '200px'}}>There are no posts</h1>
    )}
    </div>
  );
}

export default App;