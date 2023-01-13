import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "../project/Project";
import {Title} from "../../common/components/title/Title";
import socialImg from '../../assets/images/download.png'
import {Particle} from "../../common/components/Particle";


export const Projects = () => {
        const social = {
            backgroundImage: `url(${socialImg})`
        }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
             <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project style={social}  name={'Todo-List'} description={'Lorem ipsum dolor sit amet'}/>
                    <Project style={social} name={'Counter'} description={'Lorem ipsum dolor sit amet'} />
                </div>
            </div>

        </div>
    );
};

