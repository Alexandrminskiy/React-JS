import s from './Post.module.css'

const Post = (props) => {

    // console.log(props.message)

    return (
        <div className={s.item}>
            <img src='https://wallbox.ru/resize/800x480/wallpapers/main/201505/dbc10cfe6cced34.jpg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div> 

    )
}

export default Post;