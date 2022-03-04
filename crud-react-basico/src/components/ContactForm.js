import React from 'react';
import { useForm } from '../hooks/useForm';
import Loader from './Loader';
import Message from './Message';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
}

const validationsForm = form => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    //trim() -> evita espacios en blanco
    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido";
    }
    else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta espacios y letras en blanco";
    }
    
    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requerido";
    }
    else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.subject.trim()){
        errors.subject = "El campo 'Asunto a tratar' es requerido";
    }

    if(!form.comments.trim()){
        errors.comments = "El campo 'Comentarios' es requerido";
    }
    else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
}

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const ContactForm = () => {

    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);

    return (
        <div>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Escribe tu nombre' 
                    onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input type="email" name="email" placeholder='Escribe tu email' 
                    onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input type="text" name="subject" placeholder='Asunto a tratar' 
                    onBlur={handleBlur} onChange={handleChange} value={form.subject} required />
                {errors.subject && <p style={styles}>{errors.subject}</p>}
                <textarea cols="10" rows="10" name="comments" placeholder='Escribe tus comentarios' 
                    onBlur={handleBlur} onChange={handleChange} value={form.comments} required />
                {errors.comments && <p style={styles}>{errors.comments}</p>}
                <input type="submit" value="enviar" />
            </form>
            {loading && <Loader />}
            {response && <Message msg="Los datos han sido enviados" bgColor="#198754" />}
        </div>
    )
}

export default ContactForm
