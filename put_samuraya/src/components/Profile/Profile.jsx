import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    return (
        <div>
            <Profileinfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;