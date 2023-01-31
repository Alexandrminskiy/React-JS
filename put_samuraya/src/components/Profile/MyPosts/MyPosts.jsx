// import s from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea>123</textarea>
                <button>add</button>
            </div>
            <div className='s.posts'>
                <Post message='привет как дела ?' likesCount='0' />
                <Post message='какая хорошая погода сегодня?' likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts;