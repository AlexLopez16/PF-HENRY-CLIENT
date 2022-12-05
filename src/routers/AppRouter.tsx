import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>        
                   
                    <Route path='/' element={<LandingPage />} />
                    

                </Routes>
            </div>
        </BrowserRouter>
    )
}
