import React from 'react'
interface IProps {

}
export const HeaderBannerContent:React.FC<IProps> = ({children}) =>{
	return(

      <div className="header_banner_content">
		  {children}
      </div>
	)
}
export default HeaderBannerContent
