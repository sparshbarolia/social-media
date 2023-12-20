import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
//PostList is not default export isliye curly bracket me se import krenge
import { PostList } from '../store/post-list-store';

function Post(props) {

    //deletePost ka context import krli
    const {deletePost} = useContext(PostList);

    return (
        <>
            <div className="card post-card" data-bs-theme="dark" style={{Width: "30rem"}}>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.post.title}
                        <span 
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {props.post.reactions}
                            {/* <MdDelete /> */}
                        </span>
                    </h5>
                    <p className="card-text">{props.post.body}</p>

                    <div>
                        {props.post.tags.map((tag) => (
                            <span
                                className="badge text-bg-info hashtag"
                                key={tag}
                            >
                                {`#${tag}`}
                            </span>
                        ))}

                        <button
                            type="button"
                            class="btn btn-outline-danger"
                            style={{width: "55px"}}
                            onClick={() => deletePost(props.post.id)}
                        >
                            <MdDelete />
                        </button>
                    </div>

                    {/* <div className="alert alert-info reactions" role="alert">
                        Reacted by {props.post.reactions} people.
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Post
