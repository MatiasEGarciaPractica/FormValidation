import { useState } from "react";

export const useForm = (initialForm,validateForm) => {
    const[form, setForm] = useState(initialForm);
    const[errors, setErrors] = useState({});
    const[fieldsTouched, setFieldsTouched] = useState({});
    const[loading, setLoading] = useState(false);
    const[response, setResponse] = useState(null);

    /*
    This method will save thouse fields that were already touched by the user, 
    because if the field was not touched we shouldn't do any validation.
    - fieldTouched : name of the field touched
    */
    const handleTouched = (fieldTouched) => {
        setFieldsTouched({
            ...fieldTouched,
            [fieldTouched]:true,
        })        
    }

    const handleChange = (e) => {
        const{name,value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
    };

    const handleBlur= (e) => {
        handleChange(e);
        handleTouched(e.target.name);//will set the input as touched when the user do click in another place
        setErrors(validateForm(form,fieldsTouched));
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        setErrors(validateForm(form,fieldsTouched));

        if(Object.keys(errors).length === 0){
            alert("enviando formulario");
            setLoading(true);//with this we can set a loader in the UI

            /* here the code to process the form, and set the response*/
        }else{
            return;
        }
    };

    return{form,fieldsTouched,errors,loading,response,handleChange,handleBlur,handleSubmit}
};
