import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "../skill/Skill";
import {Title} from "../../common/components/title/Title";




export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill  title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolor.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolor.'}/>
                    <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolor.'}/>
                </div>
            </div>

        </div>
    );
};

