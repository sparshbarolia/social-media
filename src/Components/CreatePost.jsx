import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store';

function CreatePost() {

    const {addPost} = useContext(PostList)

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        // const tags = tagsElement.current.value.split(/(\s+)/);
        const tags = tagsElement.current.value.split(" ");

        //is se submit ke baad form khali hojaega
        userIdElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value=[];

        addPost(userId,postTitle,postBody,reactions,tags);
    }

    return (
        <>
            <form className='create-post' data-bs-theme="dark" onSubmit={handleSubmit}>
                    <legend><b>Create Post</b></legend>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">Enter your user ID here</label>
                        <input 
                            type="text" 
                            ref={userIdElement}
                            id="userId" 
                            className="form-control" 
                            placeholder="Your user ID" 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Post Title</label>
                        <input 
                            type="text" 
                            ref={postTitleElement}
                            id="title" 
                            className="form-control" 
                            placeholder="How are you feeling today..." 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Post Content</label>
                        <textarea 
                            type="text" 
                            ref={postBodyElement}
                            rows="4"
                            id="body" 
                            className="form-control" 
                            placeholder="Tell us more about it" 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reactions" className="form-label">Number of reactions</label>
                        <input 
                            type="text" 
                            ref={reactionsElement}
                            id="reactions" 
                            className="form-control" 
                            placeholder="People reacted to this post" 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Enter your Hashtags</label>
                        <input 
                            type="text" 
                            ref={tagsElement}
                            id="tags" 
                            className="form-control" 
                            placeholder="Please enter tags using space" 
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-5">Post</button>
            </form>
        </>
    )
}

export default CreatePost
