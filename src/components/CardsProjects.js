import React from "react";
import CardItem from "./CardItem";

import './Cards.css';

function CardsProjects() {
    return(
        <div className='cards'>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/garderoba.png'
                            text='Projekt garderoby na poddaszu'
                            label='Sketchup'
                            path='/'
                        />
                        <CardItem
                            src='images/krzeslo-olando.png'
                            text='Modelowanie krzesła 3d'
                            label='SolidEdge'
                            path='/'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/skanowanie_krzeslo.png'
                            text='Skanowanie krzesła'
                            label='Einscan HX'
                            path='/'
                        />
                        <CardItem
                            src='images/3.png'
                            text='Wizualizacja pokoju hotelowego'
                            label='SketchUp + V-Ray'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProjects
