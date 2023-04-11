import React from "react";
import CardItem from "./CardItem";

import './Cards.css';

function Card() {
    return(
        <div className='cards'>
            <h2> Wykorzystaj</h2>
            <h1>nowe technologie</h1>
            <h2>i zobacz swoje produkty w wersji cyfrowej!</h2>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/skanowanie_krzeslo.png'
                        text='Skanowanie 3D'
                        label='Einscan HX'
                        path='/projects'
                    />
                        <CardItem
                            src='images/Krzesło-Olando.png'
                            text='Modelowanie 3d. Inżynieria odwrotna'
                            label='SolidEdge'
                            path='/projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/garderoba.png'
                            text='Projektowanie'
                            label='Sketchup'
                            path='/services'
                        />
                        <CardItem
                            src='images/3.png'
                            text='Wizualizacja produktu'
                            label='SketchUp + V-Ray'
                            path='/projects'
                        />
                        <CardItem
                            src='images/dokumentacja.png'
                            text='Rysunki techniczne'
                            label='SolidEdge'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
