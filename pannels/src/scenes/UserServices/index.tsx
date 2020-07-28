import React from 'react'
import {Switch} from 'react-router-dom'
import {renderRoutes} from '../routes'
import {userServicesRoutes} from './scenes/routes'


export const index = () => {

	return (
		<Switch>
			{renderRoutes(userServicesRoutes)}
		</Switch>
	)
}


export default index
