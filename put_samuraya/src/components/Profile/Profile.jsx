import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    return (
        <div>
            <Profileinfo />
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;