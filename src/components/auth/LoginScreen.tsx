import React, { FC, useState } from 'react'
import { Grid, InputLabel, OutlinedInput, Paper, TextField, InputAdornment, IconButton, FormControl, Button, Typography, Link, FormHelperText } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

import { GoogleLogin } from './GoogleLogin';
import { GitHubLogin } from './GitHubLogin';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


export const LoginScreen: FC = () => {

    const paperStyle = {
        padding: 20,
        height: '100%',
        width: 380,
        margin: '50px auto'
    }

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Por favor ingresa un email válido.').required('Este valor debe ser un correo válido.'),
    })

    const onSubmit = (values: any, props: any) => {

        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid textAlign='center'>
                        <h2 style={{ fontFamily: 'Roboto' }}>Ingresa</h2>
                    </Grid>
                    <GoogleLogin />
                    <GitHubLogin />
                    <Divider>
                        <span style={{ color: '#8d8a8a' }}>O</span>
                    </Divider>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField}
                                    name='email'
                                    label='Email'
                                    placeholder='Email'
                                    sx={{ margin: '10px 0px', width: '100%' }}
                                    helperText={
                                        <ErrorMessage name='email' >
                                            {
                                                msg =>
                                                    <span style={{ color: 'red' }}>
                                                        {msg}
                                                    </span>
                                            }
                                        </ErrorMessage>
                                    }
                                />
                                <FormControl sx={{ margin: '10px 0', width: '100%' }}>
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    <Field as={OutlinedInput}
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    edge='end'
                                                >
                                                    {
                                                        showPassword
                                                            ? <VisibilityOff />
                                                            : <Visibility />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label='Password'
                                        placeholder='Password'
                                    />
                                </FormControl>

                                <Typography fontSize='11px' textAlign='right' mb='10px'>
                                    <Link href='#forgot' color='inherit'>
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </Typography>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    fullWidth
                                    style={{ margin: '20px 0' }}
                                    disabled={props.isSubmitting}
                                >
                                    Ingresa
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <hr />
                    <Typography textAlign='center' m='20px 50px 0 50px'>
                        ¿Aún no has creado tu cuenta?
                        <Link href='/register'>
                            Regístrate
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div >
    )
}
