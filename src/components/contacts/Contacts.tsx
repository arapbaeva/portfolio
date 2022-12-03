import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Input} from "../../common/input/Input";
import {Button} from "../../common/button/Button";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.formBlock}>
                    <div className={style.form}>
                        <Input/>
                        <Input/>
                        <textarea className={style.textArea}></textarea>
                    </div>
                </form>
                <div className={style.button}>
                    <Button name={'Send'}/>
                </div>
            </div>
        </div>
    );
};

