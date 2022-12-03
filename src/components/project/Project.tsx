import React from 'react';
import style from './Project.module.css'
import {Button} from "../../common/button/Button";

type ProjectType = {
    description: string
    name: string
}
export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.photo}>
                <Button name={'Know More'}/>
            </div>
            <h3>{props.name}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

