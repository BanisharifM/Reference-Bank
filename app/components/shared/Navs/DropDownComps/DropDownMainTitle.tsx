import React from 'react'

interface IProps {
	itemName :string
}
export const DropDownMainTitle:React.FC<IProps> = ({itemName}) =>{
	return (

      <a className="dropdown-toggle nav-link">{itemName}</a>
	)
}
export default DropDownMainTitle
