import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "../project/Project";





export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>
                    Projects
                </h2>
                <div className={style.projects}>
                    <Project  name={'Todo-List'} description={'Lorem ipsum dolor sit amet'}/>
                    <Project  name={'Counter'} description={'Lorem ipsum dolor sit amet'} />
                </div>
            </div>

        </div>
    );
};

