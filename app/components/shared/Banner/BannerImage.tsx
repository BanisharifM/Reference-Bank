import React from 'react'
interface IProps {
	image :string
}
export const BannerImage:React.FC<IProps> = ({image}) => {
	return (

          <div className="banner_img overlay_bg_40">
            <img src={image} alt="shop_banner2" />
          </div>
	)
}
export default BannerImage
