import './App.css'
import CreatePost from './Components/CreatePost'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PostList from './Components/PostList'
import SideBar from './Components/Sidebar'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container d-flex">
          <div>
            <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>

          <div className="content">
            <Header />
            {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
          </div>
          
        </div>
        <div>
          <Footer />
        </div>
      </PostListProvider>
    </>
  )
}

export default App
