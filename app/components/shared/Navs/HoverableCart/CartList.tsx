import React  from 'react'

export const CartList:React.FC = ({children}) =>{
	return (
		<ul className='cart_list'>
			{children}
		</ul>
	)

}
export default CartList
