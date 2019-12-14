import React from "react"
import  useForm  from "react-hook-form"
import "../sass/main.scss"

import Layout from "../components/layout"

import Head from '../components/head'
import SEO from "../components/seo"


const Contact = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
    };
    return(
        <Layout>
            <Head pageTitle="Contact"/>
            <SEO title="Contact"/>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name="email"
                ref={register({
                    required: 'Required',
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                    }
                })}
                />
                {errors.email && errors.email.message}

                <input
                name="username"
                ref={register({
                    validate: value => value !== "admin" || "Nice try!"
                })}
                />
                {errors.username && errors.username.message}

                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}

export default Contact;