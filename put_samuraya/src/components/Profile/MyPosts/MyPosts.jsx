import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;