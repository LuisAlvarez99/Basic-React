import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';

// import '../styles/NavBar.css'

let dataArray = [
{

  path: '/',
  name: 'Home',
},
{
    
    path: '/photo',
    name: 'Photo',
    
},
{
    
    path: '/login',
    name: 'Login',
},
];

const NavBar = () => {
    const [data,setData] = useState(dataArray);
    // NOTE: useEffect was used to fetch an api which can also take a post request for permanent updates to data
    // React Memo is like cacheing data. Study it more
    // React Ref's ????
    const addData = () => {
        setData([
            ...data,
            {
                path: '#',
                name: 'New Gen'
            }
        ])
    };
    
    useEffect(
        () => {
            require('bootstrap/dist/js/bootstrap.bundle')
        },
        []
    );

    return(
        <>
        <nav className='navbar'>
            <ul className='nav  nav-pills m-2'>
                {data.map(d => (<Nav links={d.path} tabs={d.name} ></Nav>))}
                <li className='btn btn-danger' onClick={addData}>+</li>
            </ul>
        </nav>
        </>
    );
}

// note state is only temporary change, not permanent. 


export default NavBar;