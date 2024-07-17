/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'

import { Header, Mensajes } from './Components'
import { Contactos, Screen } from './Screens'
import { Route, Routes } from 'react-router-dom'





const App = () => {
return(

    <Routes>
        <Route path = "/" element = {<Contactos/>}/>
        <Route path = "/mensajes/" element = {<Mensajes/>}/> 
		<Route path = "/screen/:contactoID" element = {<Screen/>}/> 
		<Route path = "/header/" element = {<Header/>}/> 
        <Route path= "/contactos/:contactoID" element={<Contactos/>} />
        
    </Routes>
    )

}

export default App

