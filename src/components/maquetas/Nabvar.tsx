
export const Nabvar = () => {
    return (
        <div style={{
            border: '1px solid black',
            height: '100px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>

            <h1><a href="/home" style={{ textDecoration: 'none', color: 'inherit' }}>NABIJASH</a></h1>
            <div style={{ padding: '10px', border: 'none', backgroundColor: 'transparent', borderBottom: '3px solid black', cursor: 'pointer' }}>
                <a href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Mis proyectos</a>
            </div>

            <div style={{ padding: '10px', border: 'none', backgroundColor: 'transparent', borderBottom: '3px solid black', cursor: 'pointer' }}>
                <a href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Mis solicitudes</a>
            </div>

            <input placeholder='Search...' style={{ border: 'none', borderBottom: '1px solid black', padding: '10px' }} />
            <div style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer', border: '1px solid black' }}>
                A
            </div>
        </div>
    )
}
