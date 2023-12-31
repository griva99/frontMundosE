import React, { useState } from "react";
import "./css/index.css";
function Contact(){
    const [data, setData] = useState(null);
    const guardarContanto = (nombre,correo,telefono,mensaje) =>{
        const url = "http://localhost:8000/contactos"
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                mensaje:mensaje,

            })
        })
        .then(response => response.json())
        .then(json => {
            console.log("json",json)
            setData(json)
        }).catch(err => {
            console.log("e",err)
        })
    }
    const enviarCorreo = (nombre,correo,mensaje) =>{
        console.log("Datos a enviar:", nombre,",", correo,",", mensaje);
        const url = "http://localhost:8000/contact"
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                nombre: nombre,
                email: correo,
                message:mensaje,

            })
        })
        .then(response => response.json())
        .then(json => {
            console.log("Respuesta del servidor:", json);
            setData(json)
        }).catch(err => {
            console.log("Error al enviar la solicitud:", err)
        })
    }
    const handleEnviar = () => {
        // Obtén los valores de los campos
        const nombre = document.getElementById("name").value;
        const correo = document.getElementById("email").value;
        const telefono = document.getElementById("phone").value;
        const mensaje = document.getElementById("message").value;
        //console.log(nombre, correo, telefono, mensaje)
        // Llama a la función guardarContanto con los valores
        guardarContanto(nombre, correo, telefono, mensaje);
        enviarCorreo(nombre, correo, mensaje);
      };
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
                                    <button type="button" class="button_send" onClick={handleEnviar}>Send</button>
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
