import Navigator from "../routes/Navigation.jsx"
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


}


const RegisterForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            userName: '',
            password: '',

        },
        
        onSubmit: values => {
            localStorage.setItem("UserInformation", JSON.stringify(values));
        },
        
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                maxLength="50"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            <br />

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <br />

            <label htmlFor="userName">UserName</label>
            <input
                id="userName"
                name="userName"
                type="text"
                maxLength="50"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="text"
                minLength="8"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            <br />



            <button type="submit">Submit</button>
        </form>
    );
};




function Register() {
    return (
        <>
            <Navigator />
            <h1>Please Register An Account</h1>
            <RegisterForm/>
        </>
    );
}

export default Register;