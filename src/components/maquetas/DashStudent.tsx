// import React from 'react'
import { Nabvar } from './Nabvar'
import InboxIcon from '@mui/icons-material/Inbox';

export const DashStudent = () => {
    return (
        <>
            <Nabvar />
            <div style={{
                display: 'flex',
            }}>
                <div style={{
                    border: '1px solid black',
                    height: '100vh',
                    width: 'fit-content',
                    margin: '20px',
                    padding: '10px'
                }}>
                    <div style={{display: 'flex', alignItems: 'center', width: '250px', margin: '20px', cursor: 'pointer'}}>
                        <InboxIcon />&nbsp;
                        <span>Mis solicitudes enviadas</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '250px', margin: '20px', cursor: 'pointer'}}>
                        <InboxIcon />&nbsp;
                        <span>Mis solicitudes aceptadas</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '250px', margin: '20px', cursor: 'pointer'}}>
                        <InboxIcon />&nbsp;
                        <span>Mis solicitudes rechazadas</span>
                    </div>
                </div>

                <div style={{
                    // border: '1px solid black',
                    height: '100%',
                    width: '90%',
                    marginTop: '20px',
                    padding: '50px',
                }}>
                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>

                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: 'grey', padding: '3px', borderRadius: ' 5px' }}>Pendiente</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>

                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#43aa8b', padding: '3px', borderRadius: ' 5px' }}>Aceptada</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>

                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#e63946', padding: '3px', borderRadius: ' 5px' }}>Rechazada</span></div>
                    </div>

                </div>
            </div>
        </>
    )
}
