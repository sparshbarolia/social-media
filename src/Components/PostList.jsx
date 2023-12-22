import React, { useContext } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage';

function PostList() {

  //PostList ko as PostListData use kr rhe yaha
  //PostListData ke context me 3 chije thi(postList,addPost,deletePost)
  //usme se bs postList lere h context se
  const {postList} = useContext(PostListData);
  // console.log(postList);

  return (
    <div className='post-container'>
      {postList.length === 0 && <WelcomeMessage/>}
      {
        postList.map((post) => (
          <Post 
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  )
}

export default PostList
