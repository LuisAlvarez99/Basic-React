import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <>
            <div className="nav-item">
                <Link className= 'nav-link' to={props.links} >{props.tabs}</Link>
                {/* <Link data-bs-toggle='pill' className= 'nav-link' to={props.links} >{props.tabs}</Link> */}
            </div>
        </>
    )
}

export default Nav

// <li className= 'nav-item'>
//     //                 <Link className='nav-link'to={"/"}>Home</Link>
//     //                 {/* <Link className='nav-link' data-bs-toggle='pill' type='button' role={'tab'} to={"/"}>Home</Link> */}
//     //             </li>