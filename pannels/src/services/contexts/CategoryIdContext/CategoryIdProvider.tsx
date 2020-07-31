import React from 'react'
import {categoryIdContext} from './context'

interface IProps {
	categoryId : number
}

const CategoryIdProvider:React.FC<IProps> = ({children , categoryId}) =>{
	return(
		<categoryIdContext.Provider value={categoryId}>
			{children}
			</categoryIdContext.Provider>
	)
}
export default CategoryIdProvider
