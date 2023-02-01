import s from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = (props) => {
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
                <Post message='привет как дела ?' likesCount='0' />
                <Post message='какая хорошая погода сегодня?' likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts;