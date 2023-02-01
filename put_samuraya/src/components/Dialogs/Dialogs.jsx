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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Димас' id='1' />
                    <DialogItem name='Мунька' id='2' />
                    <DialogItem name='фая' id='3' />
                    <DialogItem name='Маник' id='4' />
                    <DialogItem name='Ройка' id='5' />
                </div>
            </div>
            <div className={s.messages}>
            <Message message ='привет 1' />
            <Message message ='привет 2' />
            <Message message ='привет 3' />
            </div>

        </div>
    )
}

export default Dialogs;