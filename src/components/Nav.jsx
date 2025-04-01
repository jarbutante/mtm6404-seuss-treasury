import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        
        <nav>
            <div className="logo fw-bold">Seuss Treasury</div>
            <NavLink to="/">Books</NavLink>
            <NavLink to="/Quote">Quotes</NavLink>
        </nav>
    )
};