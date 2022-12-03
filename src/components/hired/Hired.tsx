import React from 'react';
import style from './Hired.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Button} from "../../common/button/Button";

export const Hired = () => {
    return (
        <div className={style.hiredBlock}>
            <div className={`${styleContainer.container} ${style.hiredContainer}`}>
                    <h3 className={style.title}>Looking into remote work options</h3>
                    <Button name={'Hire me'}/>
            </div>
        </div>
    );
};

