import InboxIcon from '@mui/icons-material/Inbox';
import { Nabvar } from './Nabvar';

export const DashCompany = () => {
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
                    <div style={{ display: 'flex', alignItems: 'center', width: '250px', margin: '20px', cursor: 'pointer' }}>
                        <InboxIcon />&nbsp;
                        <span>Mis proyectos publicados</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '250px', margin: '20px', cursor: 'pointer' }}>
                        <InboxIcon />&nbsp;
                        <span>Solicitudes</span>
                    </div>
                </div>

                <div style={{
                    height: '100%',
                    width: '90%',
                    marginTop: '20px',
                    padding: '50px',
                }}>
                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Editar</button>
                        </div>
                        {/* <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4> */}

                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: 'grey', padding: '3px', borderRadius: ' 5px' }}>Pendiente</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Administrar</button>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>

                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#43aa8b', padding: '3px', borderRadius: ' 5px' }}>Aceptado</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Eliminar</button>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>

                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#e63946', padding: '3px', borderRadius: ' 5px' }}>Rechazado</span></div>
                    </div>

                    <hr />
                    <br />

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Alejandro Lopez</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Ver Solicitud</button>
                        </div>

                        <br />
                        <div><b>Pais:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>México</span></div>
                        <br/>
                        <div><b>Habilidades:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>Express - Postgress - HTML</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Brian Paez</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Ver Solicitud</button>
                        </div>

                        <br />
                        <div><b>Pais:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>Argentina</span></div>
                        <br/>
                        <div><b>Habilidades:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>React - Mongo - Node</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Amparo Escobar</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Ver Solicitud</button>
                        </div>

                        <br />
                        <div><b>Pais:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>Argentina</span></div>
                        <br/>
                        <div><b>Habilidades:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>React - MaterialUI - TypeScript</span></div>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Ignacio Nicoletti</a> </h3>
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Ver Solicitud</button>
                        </div>

                        <br />
                        <div><b>Pais:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>Argentina</span></div>
                        <br/>
                        <div><b>Habilidades:</b> <span style={{ padding: '3px', borderRadius: ' 5px' }}>React - MySQL - Express</span></div>
                    </div>

                </div>
            </div>
        </>
    )
}
