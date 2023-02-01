import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = () => {
    return (
        <div>
            <Profileinfo />
            <MyPosts />
        </div>
    )
}

export default Profile;