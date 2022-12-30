import { Button, Paper } from '@mui/material';
import NavBar from '../components/NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { validaToken } from '../actions/auth';
import { useNavigate } from 'react-router';

export const Checkout = () => {
    const API_URL = process.env.REACT_APP_API || 'http://localhost:3001/api'
    const query = new URLSearchParams(window.location.search)

    const { status, data } = useSelector((state: State) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    let token = localStorage.getItem('token') || '';

    if (!status && token) {
        dispatch(validaToken(token));
    }

    if (data.rol !== 'COMPANY_ROL' || !query.get('success')) {
        navigate('/dashboard')
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
        borderRadius: '20px',
    };

    return (
        <>
            <NavBar />
            {
                query.get('success') && (
                    <Paper sx={style}>
                        <div className="product Box-root">
                            <div className="description Box-root">
                                <h3>Tu suscripción al plan premium a comenzado!</h3>
                            </div>
                        </div>
                        <form action={`${API_URL}/checkout/portal`} method="POST">
                            <input
                                type="hidden"
                                id="session-id"
                                name="session_id"
                                value={query.get('session_id') as string}
                            />
                            <Button id="checkout-and-portal-button" type="submit" variant='contained' sx={{ mt: 2 }}>
                                Administra tu suscripción
                            </Button>
                        </form>
                    </Paper>
                )
            }
        </>
    )
}
