import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {


  return (
    <div>
      <Header></Header>
      <div className='max-w-6xl mx-auto'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  )
}

export default App;
