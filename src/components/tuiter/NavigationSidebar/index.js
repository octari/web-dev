import React from "react";
import items from "./items.json";
import {Link} from "react-router-dom";

const NavItem = ({ item: { title, href, iconClasses }, active: { active } }) => {
    return (
        <Link to={href} className={`list-group-item list-group-item-action ${active === title ? 'active' : ''}`}>
            <i className={iconClasses}></i>
            <span className="d-none d-xl-inline-block">{title}</span>
        </Link>
    )
}

const NavigationSidebar = (active = 'explore') => {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter fa-lg"></i>
                </Link>
                {items.map(item => {
                    return <NavItem item={item} active={active} key={item.title}/>
                })}
                <button type="button" className="btn btn-primary btn-block rounded-pill mt-2">Tuit
                </button>
            </div>
        </>
    )
}

export default NavigationSidebar;