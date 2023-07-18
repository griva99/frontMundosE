import React from "react";
import "./css/index.css";
function Contact(){
    return(
        <div class="formulario_globo">
                <div class="formulario_globo__form" id="contact">
                    <div class="formulario_globo__content">
                        <h4 class="formulario_globo__content__h4">Get in touch <span>We are hiring!</span></h4>
                        <div id="formulario" class="formulario_globo__content__form">
                            <form class="formulario_globo__content__form__contact" action="contacto.php" method="POST">
                                <div class="formulario_globo__content__form__name">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" class="formulario_globo__content__input" required/>
                                </div>
                                <div class="formulario_globo__content__form__email">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" class="formulario_globo__content__input" required/>
                                </div>
                                <div class="formulario_globo__content__form__phone">
                                    <label for="phone">Phone</label>
                                    <input type="number" name="phone" id="phone" class="formulario_globo__content__input" required/>
                                </div>
                                <div class="formulario_globo__content__form__message">
                                    <label for="message">Message</label>
                                    <textarea class="formulario_globo__content__textarea" id="message"></textarea>
                                </div>
                                <div class="formulario_globo__content__boton">
                                    <button type="button" class="button_send">Send</button>
                                </div>
                            </form>
                        </div>
                        <div class="formulario_globo__imagen-contacto">
                        <image src="./imagen/contact.png" alt="contacto"/>
                    </div>
                    </div>
                    
                </div>
            </div>
    );
}
export default Contact;
