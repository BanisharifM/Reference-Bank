import React, {useState} from "react";

const Search=()=>{
    const [showSearch,setShowSearch]=useState(false);
    return(
        <>
            <a href="#" onClick={()=>setShowSearch(true)} className="nav-link search_trigger" ><i
                className="linearicons-magnifier"/></a>
            <div className={`search_wrap ${showSearch? "open":""} `}>
                <span className="close-search"><i className="ion-ios-close-empty" onClick={()=>setShowSearch(false)}/></span>
                <form>
                    <input type="text" placeholder="جستجو ..." className="form-control" id="search_input"/>
                    <button type="submit" className="search_icon"><i className="ion-ios-search-strong"/></button>
                </form>
            </div>
            <div className={`search_overlay ${showSearch?"open" :""} `}/>
            <div className={`search_overlay ${showSearch?"open" :""} `}/>
        </>
    )
};

export default Search;