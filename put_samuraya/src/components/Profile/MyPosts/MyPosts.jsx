import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

        let newPostElement = React.createRef();

        let addPost = () => {
            let text = newPostElement.current.value;
            props.addPost(text);
        }
        

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <hr />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;