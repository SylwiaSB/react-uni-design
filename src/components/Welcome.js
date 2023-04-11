import React from "react";

import './Welcome.css'


function Welcome() {
    return (
        <article className='welcome'>
            <div className='welcome__container'>
                <h1>Witaj w naszej firmie!</h1>
            </div>
        <div  className='welcome__container__text'>
            <p className=''>Specjalizujemy się w projektowaniu, skanowaniu i modelowaniu 3D produktów, w tym mebli.
                Nasza oferta skierowana jest do producentów mebli oraz indywidualnych klientów poszukujących
                unikalnych projektów i rozwiązań. Jesteśmy wyposażeni w nowoczesny sprzęt, takie jak skanery 3D
                i oprogramowanie CAD, które pozwala nam na szybkie i precyzyjne tworzenie realistycznych modeli 3D.
                Dzięki naszym usługom klienci mogą zobaczyć swoje produkty w wirtualnej rzeczywistości i
                przetestować ich funkcjonalność oraz estetykę.</p>
            <p>
                Skontaktuj się z nami, aby poznać naszą pełną ofertę i stworzyć wspólnie projekt,
                który spełni Twoje oczekiwania!</p>
        </div>

        </article>

    );
}

export default Welcome