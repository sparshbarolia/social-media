import './App.css'
import CreatePost from './Components/CreatePost'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PostList from './Components/PostList'
import SideBar from './Components/SideBar'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container d-flex">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="content">
            <Header />
            {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
          
        </div>
      </PostListProvider>
    </>
  )
}

export default App
