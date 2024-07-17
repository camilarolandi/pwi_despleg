
/* funciona pero no envia */
import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { useParams } from 'react-router-dom'
import { Header, Mensajes, NuevoMje } from '../../Components'
import "./screenchat.css"

	
	export const Screen = () => {

	const { contactoID } = useParams()
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID))
	return (
		<div className='screen-chat'>
			<Header/>
			<Mensajes contacto = {contacto} />
			<NuevoMje/>
			
		</div>
		)
	}
	


