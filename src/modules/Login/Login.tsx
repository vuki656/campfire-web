import type { ApolloError } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { TextField } from '@dvukovic/dujo-ui'
import { useFormik } from 'formik'
import Cookies from 'js-cookie'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import * as Yup from 'yup'

import { LOG_IN_USER } from '../../graphql/mutations/User'
import type {
    LogInUserMutation,
    LogInUserMutationVariables,
} from '../../graphql/types'

import {
    LoginButton,
    LoginForm,
    LoginNote,
    LoginRoot,
    LoginTitle,
} from './Login.styles'
import type { LoginFormTypes } from './Login.types'

const ValidationSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required')
        .min(6, 'Must be longer than 6 characters'),
    username: Yup.string()
        .required('Required')
        .min(4, 'Must be longer than 4 character'),

})

export const Login: React.FunctionComponent = () => {
    const router = useRouter()

    const [logInUserMutation] = useMutation<LogInUserMutation, LogInUserMutationVariables>(LOG_IN_USER)

    const {
        errors,
        handleChange,
        handleSubmit,
        setErrors,
        values,
    } = useFormik<LoginFormTypes>({
        initialValues: {
            password: '',
            username: '',
        },
        onSubmit: (formValues) => {
            logInUserMutation({
                variables: {
                    input: {
                        password: formValues.password,
                        username: formValues.username,
                    },
                },
            })
                .then((response) => {
                    const token = response?.data?.logInUser.token ?? ''

                    Cookies.set('token', token)
                    void router.push('/home')
                })
                .catch((error: ApolloError) => {
                    const formErrors = error.graphQLErrors[0].extensions?.exception

                    if (formErrors) {
                        setErrors({ ...formErrors })
                    }
                })
        },
        validateOnChange: false,
        validationSchema: ValidationSchema,
    })

    return (
        <LoginRoot>
            <LoginForm onSubmit={handleSubmit}>
                <LoginTitle>
                    Campfire
                </LoginTitle>
                <TextField
                    error={Boolean(errors.username)}
                    helperText={errors.username}
                    label="Username"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                />
                <TextField
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                />
                <LoginButton
                    fullWidth={true}
                    type="submit"
                >
                    Login
                </LoginButton>
                <LoginNote>
                    If you don't have an account, just put something in and we'll make one for you.
                </LoginNote>
            </LoginForm>
        </LoginRoot>
    )
}
