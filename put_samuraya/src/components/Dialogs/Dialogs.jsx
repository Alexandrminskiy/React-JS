import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsDate = [
        { id: 1, name: 'Дима' },
        { id: 2, name: 'Женя' },
        { id: 3, name: 'Лена' },
        { id: 4, name: 'Тусик' },
    ]

    let messagesDate = [
        { id: 1, message: 'hello' },
        { id: 2, message: 'привет' },
        { id: 3, message: 'как дела' },
        { id: 4, message: 'что делаешь ?' },
    ]

    let messagesElement = messagesDate.map(el => <Message message={el.message} />);
    let dialogsElements = dialogsDate.map(el => <DialogItem name={el.name} id={el.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;