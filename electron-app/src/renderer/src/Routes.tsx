import{Router, Route} from 'electron-router-dom'
import { Home } from './Peges/Home'
export function Routes(){
    return(
        <Router
          main={
            <>
            <Route path='/'element={<Home/>}/>
            </>
          }
        />  
    )
}