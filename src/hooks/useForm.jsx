import { useState } from "react";

export const useForm = (initialForm,validateForm) => {
    const[form, setForm] = useState(initialForm);
    const[errors, setErrors] = useState({});
    const[fieldsTouched, setFieldsTouched] = useState([]);
    const[loading, setLoading] = useState(false);
    const[response, setResponse] = useState(null);

    /*
    This method will save thouse fields that were already touched by the user, 
    because if the field was not touched we shouldn't do any validation.
    - fieldTouched : name of the field touched
    */
    const handleTouched = (fieldTouched) => {
        const existedField = fieldsTouched.find(item => item === fieldTouched);
        if(!existedField){
            setFieldsTouched([...fieldsTouched,fieldTouched]);
        }
    }

    const handleChange = (e) => {
        const{name,value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
        handleTouched(name);
    };

    const handleBlur= (e) => {
        handleChange(e);
        setErrors(validateForm(form,fieldsTouched));
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        setErrors(validateForm(form,fieldsTouched));

        if(Object.keys(errors).length === 0){
            alert("enviando formulario");
            setLoading(true);//with this we can set a loader in the UI

            /* here the code to process the form*/
        }else{
            return;
        }
    };

    return{form,errors,loading,response,handleChange,handleBlur,handleSubmit}
};
