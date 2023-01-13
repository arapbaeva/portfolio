import React from 'react';
import style from './Button.module.css'

type ButtonType = {
    name: string
}
export const Button = (props: ButtonType) => {
    return (
        <button type={"submit"} className={style.button}>{props.name}</button>
    );
};

