import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductosCrudPage from '../pages/ProductosCrudPage';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
               
                <Route path='/productos' element={<ProductosCrudPage/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing