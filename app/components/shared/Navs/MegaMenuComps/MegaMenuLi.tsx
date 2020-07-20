import React from 'react'
interface IProps {
	lg ?: number;
	md ? : number
}
export const MegaMenuLi :React.FC<IProps> = ({children,lg , md}) =>{
	const lgSize = lg? `col-lg-${lg}`:''
	const mdSize = md? `col-md-${md}`:''
	const sizeClasses = lgSize + mdSize

	return(

		<li className={`mega-menu-col ${sizeClasses}`}>{children}</li>

	)
}
export default MegaMenuLi
