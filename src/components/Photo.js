import NavBar from './NavBar';

const Photo = () => {
    return(
        <div>
            <NavBar></NavBar>
            <div className='container-fluid'>
                <img src={require('../doggie.jpg')} className='img-fluid' alt=''/>
            </div>
        </div>
    )
}

export default Photo;