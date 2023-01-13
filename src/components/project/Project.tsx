import React from 'react';
import style from './Project.module.scss'

type ProjectType = {
    description: string
    name: string
    style: {}
}
export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <figure className={style.effect}>
                <div className={style.photo} style={props.style}>
                </div>
                <figcaption>
                    <h3>{props.name}</h3>
                    <p className={style.description}>{props.description}</p>
                </figcaption>
            </figure>
        </div>
    );
};

