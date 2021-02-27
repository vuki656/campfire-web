import { TextField } from '@dvukovic/dujo-ui'
import React from 'react'

import {
    LoginButton,
    LoginForm,
    LoginNote,
    LoginRoot,
    LoginTitle,
} from './Login.styles'

export const Login: React.FunctionComponent = () => {
    return (
        <LoginRoot>
            <LoginForm>
                <LoginTitle>
                    Campfire
                </LoginTitle>
                <TextField label="Username" />
                <TextField label="Password" />
                <LoginButton fullWidth={true}>
                    Login
                </LoginButton>
                <LoginNote>
                    If you don't have an account, just put something in an we'll make one for you
                </LoginNote>
            </LoginForm>
        </LoginRoot>
    )
}
