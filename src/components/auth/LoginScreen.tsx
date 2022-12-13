import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { } from 'redux-thunk/extend-redux'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import { Grid, InputLabel, OutlinedInput, Paper, TextField, InputAdornment, IconButton, FormControl, Button, Typography, Link, FormHelperText } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

// import { GoogleLogin } from './GoogleLogin';
import { GitHubLogin } from './GitHubLogin';




import { startLogin } from '../../actions/auth';
import { State } from '../../reducers/rootReducer';



export const LoginScreen: FC = () => {

    const dispatch = useDispatch()
    const { status } = useSelector((state: State) => state.auth)
    const [isError, setIsError] = useState(false)

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
        password: '',
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Por favor ingresa un email válido.').required('Este valor debe ser un correo válido.'),
    })

    const onSubmit = (values: any, props: any) => {
        dispatch(startLogin(values))

        setTimeout(() => {
            if (status === '200') {
                props.resetForm()
            } else {
                setIsError(true)
            }
            props.setSubmitting(false)
        }, 1000)
    }

    const onChangeHandler = () => {
        setIsError(false)
    }

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid textAlign='center'>
                        <h2 style={{ fontFamily: 'Roboto' }}>Ingresa</h2>
                    </Grid>
                    {/* <GoogleLogin /> */}
                    {/* <GoogleLoginin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        text='continue_with'
                        auto_select={false}
                    /> */}
                    <GitHubLogin />
                    <Divider>
                        <span style={{ color: '#8d8a8a' }}>O</span>
                    </Divider>
                    {
                        isError && (
                            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                                <FormHelperText error sx={{ width: 'auto', fontSize: '15px' }}>
                                    El correo/contraseña son incorrectos
                                </FormHelperText>
                            </Grid>
                        )
                    }
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {(props) => (
                            <Form>
                                <Field as={TextField}
                                    name='email'
                                    label='Email'
                                    placeholder='Email'
                                    error={isError}
                                    onChange={(e: React.FormEvent<HTMLInputElement>) => { props.handleChange(e); onChangeHandler() }}
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
                                        error={isError}
                                        onChange={(e: React.FormEvent<HTMLInputElement>) => { props.handleChange(e); onChangeHandler() }}
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
