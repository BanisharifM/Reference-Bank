import React from 'react'

interface IProps {
	reverse? : boolean
}
export const DropDownMenu:React.FC<IProps> =({reverse =false, children})=>{
	return (

	  <div className={`dropdown-menu ${reverse && 'dropdown-reverse'}`}>
		  <ul>
			  {children}
		  </ul>
	  </div>
	)
}
export default DropDownMenu
