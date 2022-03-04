import { useState } from 'react';
import { HelpHttp } from '../helpers/HelpHttp';

export const useForm = (initialForm, validateForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = e => {
        const { name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleBlur = e => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateForm(form));

        //objetos vacios
        if(Object.keys(errors).length === 0){
            setLoading(true);
            HelpHttp()
                .post("https://formsubmit.co/ajax/jonacaste@gmail.com", {
                    body: form,
                    headers: {
                        "Content-Type": "application/json",
                        Acccept: "application/json",
                    }
                })
                .then(res => {
                    setLoading(false);
                    setResponse(true);
                    setForm(initialForm);
                    setTimeout(() => setResponse(false), 5000);
                })   
        }
        else return;
    }

    return{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}
