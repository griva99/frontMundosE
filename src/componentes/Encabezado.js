import React from "react";
import "./css/index.css";
import Nav from "./Nav";
function Encabezado(){
    return(
    <main className="principal">
        <Nav></Nav>
        <div class="container_carousel container-fluid" id="home">
            <div id="primer_carousel" class="carousel slide container_internal" data-bs-ride="carousel">
                <div class="carousel-indicators botones_carousel">
                    <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="0" class="active carousel_boton"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="1" aria-label="Slide 2"
                        class="carousel_boton"></button>
                    <button type="button" data-bs-target="#primer_carousel" data-bs-slide-to="2" aria-label="Slide 3"
                        class="carousel_boton"></button>
                </div>
                <div class="carousel-inner container_internal_primero container-fluid">
                    <div class="carousel-item active">
                        <div class="texto1">
                            <h1 class="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                            <p class="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque.</p>
                            <button type="button" class="readmore">Readmore</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="texto1">
                            <h1 class="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                            <p class="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque.
                            </p>
                                <button type="button" class="readmore">Readmore</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="texto1">
                            <h1 class="titulo_carousel">Sed ut perspiciatis unde omnis iste natus</h1>
                            <p class="texto_carousel">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque. Lor</p>
                            <button type="button" class="readmore">Readmore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
export default Encabezado;
