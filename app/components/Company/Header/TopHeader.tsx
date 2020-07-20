import React from 'react'

export const TopHeader = () => {
	return (
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                            <div className="lng_dropdown mr-2">
                                <select name="countries" className="custome_select">
                                <option value='en' data-image="assets/images/eng.png" data-title="English">English</option>
                                <option value='fn' data-image="assets/images/fn.png" data-title="France">France</option>
                                <option value='us' data-image="assets/images/us.png" data-title="United States">United States</option>
                            </select>
                            </div>
                            <div className="mr-3">
                                <select name="countries" className="custome_select">
                                <option value='USD' data-title="USD">USD</option>
                                <option value='EUR' data-title="EUR">EUR</option>
                                <option value='GBR' data-title="GBR">GBR</option>
                            </select>
                            </div>
                            <ul className="contact_detail text-center text-lg-left">
                                <li><i className="ti-mobile"></i><span>123-456-7890</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center text-md-right">
                            <ul className="header_list">
                                <li><a href="compare.html"><i className="ti-control-shuffle"></i><span>Compare</span></a></li>
                                <li><a href="wishlist.html"><i className="ti-heart"></i><span>Wishlist</span></a></li>
                                <li><a href="login.html"><i className="ti-user"></i><span>Login</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)

}
export default TopHeader
