import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {

  const [titles, Settitles] = useState([]);
  const [times, Settimes] = useState(0);

  const titleshandling = (blog) => {
    const blogsarray = [...titles, blog];
    Settitles(blogsarray);
  }

  const settingtime = (title, reading_time) => {
    const remaining = titles.filter(eachblog => eachblog.title !== title);
    Settitles(remaining);
    const newtimes = times + reading_time;
    Settimes(newtimes);

  }

  return (
    <div>
      <Header></Header>
      <div className='flex justify-between max-w-6xl mx-auto'>
        <Blogs titleshandling={titleshandling} settingtime={settingtime}></Blogs>
        <Bookmark titles={titles} times={times}></Bookmark>
      </div>
    </div>
  )
}

export default App;
