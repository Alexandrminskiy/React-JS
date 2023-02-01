import s from './Profileinfo.module.css'

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src='http://images.singletracks.com/blog/wp-content/uploads/2016/09/Picture-10.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default Profileinfo;