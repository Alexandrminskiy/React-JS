import s from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = (props) => {

    let postDate = [
        { id: 1, message: 'привет как дела ?', likesCount: 12},
        { id: 2, message: 'какая хорошая погода сегодня?', likesCount: 11},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>123</textarea>
                </div>
                <div>
                    <button>add</button>
                </div>
                <hr />
            </div>
            <div className={s.posts}>
                <Post message={postDate[0].message} likesCount={postDate[0].likesCount}/>
                <Post message={postDate[1].message} likesCount={postDate[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;