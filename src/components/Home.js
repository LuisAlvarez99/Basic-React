import NavBar from "./NavBar";

const Home = () =>{
    return(
        <>
        <NavBar />
        <div className='nav'>
            <span className='nav-item'>SIDE</span>
            <span className='nav-item'>MAIN</span>
            <span className='nav-item'>EXTRA</span>
        </div>
        </>
    )
}

export default Home;