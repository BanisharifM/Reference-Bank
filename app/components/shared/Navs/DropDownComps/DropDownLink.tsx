import React from 'react'

interface IProps{
	itemName : string
}
export const DropDownLink:React.FC<IProps> = ({itemName}) => {
	return(
                <li>
                  <a
                    className="dropdown-item nav-link nav_item"
                    href="blog-three-columns.html"
                  >
					  {itemName}
                  </a>
                </li>
	)

}
export default DropDownLink
