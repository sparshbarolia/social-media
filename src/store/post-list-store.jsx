import { createContext, useReducer } from "react";

//Yaha bs blank chhod do har obj item ko
//main vo value use hogi jo .provider ke sath value me doge
export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

//REDUCER FUNCTION (pure function)
//isko curr state or action milta h
//fir ye curr state pr action krta h
const postListReducer = (currPostList , action)=> {
    let newPostList = currPostList;

    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => {
            return post.id !== action.payload.postId;
        })
    }
    else if(action.type === "ADD_POST"){
        newPostList = [action.payload , ...currPostList]
        // console.log(newPostList);
    }

    //ye postList me store hojaegi value 
    return newPostList;
}

//jis jis ko PostListProvider me wrap krenge un sbme PostList context use kr paenge
//abhi App.jsx me sbkuchh ko wrap krdia isme
const PostListProvider = (props) => {

    const DEFAULT_POST_LIST = [
        {
            id: '1',
            title: 'Hey Recruiters',
            body: 'Welcome to my social media platform which I made using ReactJS',
            reactions: 2987,
            userId: 'user-9',
            tags: ['ReactJS', 'FrontEnd', 'useContext']
        },
        {
            id: '2',
            title: 'Create a post',
            body: 'You can create post by entering your details in Create Post section of the side bar',
            reactions: 15,
            userId: 'user-12',
            tags: ['CreatePost', 'FirstPost']
        },
    ];    

    const [postList , dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost = (userId,postTitle,postBody,reactions,tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                //qki har time unique hoga
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        })
    };

    return(
        //ye vali value use ho skti h har us component me jo 
        //wrapped h <PostListProvider> </PostListProvider> me
        <PostList.Provider 
            value={{postList: postList ,
                    addPost: addPost ,
                    deletePost: deletePost}}
        >
            {props.children}
        </PostList.Provider>
    ) 
};
export default PostListProvider
