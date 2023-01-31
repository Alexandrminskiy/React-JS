import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src='http://images.singletracks.com/blog/wp-content/uploads/2016/09/Picture-10.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
      
        <MyPosts />
        </div>
    )
}

export default Profile;