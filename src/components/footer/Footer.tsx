import React from 'react'
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";




export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Aiym Arapbaeva</h3>
                <div className={style.footerBlock}>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                </div>
                <div className={style.licenceTitle}>
                    © Copyright 2022
                    All rights reserved.
                </div>
            </div>

        </div>
    );
};

