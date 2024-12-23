import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {

  const [titles, settitles] = useState([]);

  const titleshandling = (blog) => {
    const blogsarray = [...titles, blog];
    settitles(blogsarray);
  }

  return (
    <div>
      <Header></Header>
      <div className='flex justify-between max-w-6xl mx-auto'>
        <Blogs titleshandling={titleshandling}></Blogs>
        <Bookmark titles={titles}></Bookmark>
      </div>
    </div>
  )
}

export default App;
