import React from 'react'
interface IProps {
	lg ?: number;
	md ? : number;
	xl? : number
}
export const MegaMenuLi :React.FC<IProps> = ({children,lg , md ,xl }) =>{
	const lgSize = lg? `col-lg-${lg} `:''
	const mdSize = md? `col-md-${md} `:''
	const xlSize = xl? `col-xl-${xl} `:''
	const sizeClasses = lgSize + mdSize

	return(

		<li className={`mb-2 mega-menu-col ${sizeClasses}`}>{children}</li>

	)
}
export default MegaMenuLi
