import { useForm } from "../hooks/useForm";

const intialForm = { /*initial values in form inputs or textarea*/
    name: "",
    mail: "",
    subject: "",
    comments: ""
};
const validationsForm = (form, fieldsTouched) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "field name is required";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "field name only accepts letters and space";
    }

    if (!form.mail.trim()) {
        errors.mail = "field mail is required";
    } else if (!regexEmail.test(form.mail.trim())) {
        errors.mail = "field mail only accepts mails";
    }

    if (!form.subject.trim()) {
        errors.subject = "field subject is required";
    }

    if (!form.comments.trim()) {
        errors.comments = "field comments is required";
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "field comments only accepts 255 characteres";
    }

    return errors;
}

const ContactForm = () => {
    const { form,
        fieldsTouched,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit } = useForm(intialForm, validationsForm);
    return (
        <div id="formContainer">
            <h1 className="formTitle">Contact form</h1>
            <form id="contactForm" onSubmit={handleSubmit}>
                <input type="text"
                    name="name"
                    placeholder="Write your name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors.name && fieldsTouched.name && <p className="errorMessage">{errors.name}</p>}
                <input type="mail"
                    name="mail"
                    placeholder="Write your mail"
                    value={form.mail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors.mail && fieldsTouched.mail &&<p className="errorMessage">{errors.mail}</p>}
                <input type="text"
                    name="subject"
                    placeholder="Write your subject"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors.subject && fieldsTouched.subject &&<p className="errorMessage">{errors.subject}</p>}
                <textarea name="comments"
                    cols="50"
                    rows="5"
                    placeholder="Write your comments"
                    value={form.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}></textarea>
                {errors.comments && fieldsTouched.comments &&<p className="errorMessage">{errors.comments}</p>}
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm; 