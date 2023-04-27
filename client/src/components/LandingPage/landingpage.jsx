import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landingpage.module.css';
import henry from '../../images/henry.png';
import foto from '../../images/mati.png';

export default function LandingPage() {
    return (
        <div className={styles.landing}>
            <div className={styles.container}>
                <h2>Welcome to <br />
                    Our Recipes!
                </h2>
                <Link to='/home' style= {{textDecoration: "none"}}>
                    <button className={styles.Button}>Get started!</button>
                </Link>
                <div className={styles.mati}>
                < img src={foto} alt="creador" />
                <span> Created by Matias Augusto Cano </span>
                </div>
                <p>
                    <img src={henry} alt="" />
                </p>

                
                </div>
        </div>
    )
}