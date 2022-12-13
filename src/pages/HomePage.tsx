import { Nabvar } from '../components/maquetas/Nabvar';

export const HomePage = () => {
    return (
        <>
            <Nabvar />
            <div style={{
                display: 'flex',
            }}>
                <div style={{
                    border: '1px solid black',
                    height: '100vh',
                    margin: '20px',
                    // marginRight: '500px',
                    padding: '50px'
                }}>
                    <input type="checkbox" id="cbox2" value="second_checkbox" /> <label>Filtro</label> <br />
                    <input type="checkbox" id="cbox2" value="second_checkbox" /> <label>Filtro</label> <br />
                    <input type="checkbox" id="cbox2" value="second_checkbox" /> <label>Filtro</label> <br />
                    <input type="checkbox" id="cbox2" value="second_checkbox" /> <label>Filtro</label> <br />
                    <input type="checkbox" id="cbox2" value="second_checkbox" /> <label>Filtro</label> <br />
                    <input type="checkbox" id="cbox2" value="second_checkbox" /> <label>Filtro</label> <br />
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
                            <button style={{ backgroundColor: '#457b9d', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Enviar Solicitud</button>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>
                        <br />
                        <span>Se requiere de desarrollar un e-commerce para una pasteleria que esta iniciando y necesita posicion web</span>
                        <br />
                        <br />
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>React</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Mongo</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Node</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Express</span>

                        <br />
                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#43aa8b', padding: '3px', borderRadius: ' 5px' }}>Reclutamiento</span></div>

                        <br />
                        <span><b>Participantes:</b> 2/6</span>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                            <button style={{ backgroundColor: 'grey', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff' }}>Enviar Solicitud</button>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>
                        <br />
                        <span>Se requiere de desarrollar un e-commerce para una pasteleria que esta iniciando y necesita posicion web</span>
                        <br />
                        <br />
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>React</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Mongo</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Node</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Express</span>

                        <br />
                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#00b4d8', padding: '3px', borderRadius: ' 5px' }}>En Desarrollo</span></div>

                        <br />
                        <span><b>Participantes:</b> 6/8</span>
                    </div>

                    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'underline', cursor: 'pointer' }}> <a href='/project'>Desarrollo de un e-commerce</a> </h3>
                            <button style={{ backgroundColor: 'grey', border: 'none', padding: '10px', borderRadius: '10px', color: '#fff' }}>Enviar Solicitud</button>
                        </div>
                        <h4 style={{ marginLeft: '20px' }}>Mercado Libre S.A. de C.V.</h4>
                        <br />
                        <span>Se requiere de desarrollar un e-commerce para una pasteleria que esta iniciando y necesita posicion web</span>
                        <br />
                        <br />
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>React</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Mongo</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Node</span>
                        <span style={{ backgroundColor: '#e9c46a', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }}>Express</span>

                        <br />
                        <br />
                        <div><b>Estado:</b> <span style={{ backgroundColor: '#e63946', padding: '3px', borderRadius: ' 5px' }}>Terminado</span></div>

                        <br />
                        <span><b>Participantes:</b> 6/6</span>
                    </div>

                </div>
            </div>
        </>
    )
}
