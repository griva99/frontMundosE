import React from "react";
import "./css/index.css";
function Services(){
    return(
        <aside>
        <article class="section4_acordion_container" id="corredor">
                <div class="section4_acordion">
                    <div class="accordion accordion-flush section4_acordion_texto" id="accordionCorredor">
                        <div class="accordion-item">
                            <h4 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </button>
                            </h4>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionCorredor">
                                <div class="accordion-body accordion_texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit
                                    aperiam, consectetur quos exercitationem totam ipsam illum fugit quibusdam culpa quidem rerum
                                    tempore vero molestiae omnis maiores quo? Sed, ea!
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h4 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </button>
                            </h4>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionCorredor">
                                <div class="accordion-body accordion_texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea
                                    quaerat tempora ratione veniam, vero odio illo assumenda, quia molestias. Nobis soluta nesciunt
                                    quis odit quidem similique sunt vitae.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h4 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </button>
                            </h4>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionCorredor">
                                <div class="accordion-body accordion_texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error
                                    incidunt a facilis animi, ratione tempore atque beatae officia quos doloremque unde dignissimos,
                                    distinctio maxime, voluptas excepturi similique eaque est.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </article>
        </aside>
    );
}
export default Services;
