import React from "react";
import items from "./items.json";
import {Link, useLocation} from "react-router-dom";

const NavItem = ({ item: { title, href, iconClasses } }) => {
    const location = useLocation()
    return (
        <Link to={href} className={`list-group-item list-group-item-action ${location.pathname === href ? 'active' : ''}`}>
            <i className={iconClasses}/>
            <span className="d-none d-xl-inline-block">{title}</span>
        </Link>
    )
}

const NavigationSidebar = () => {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter fa-lg"/>
                </Link>
                {items.map(item => {
                    return <NavItem item={item} key={item.title}/>
                })}
                <button type="button" className="btn btn-primary btn-block rounded-pill mt-2">Tuit
                </button>
            </div>
        </>
    )
}

export default NavigationSidebar;