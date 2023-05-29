import '../styles/Login.css';
import NavBar from './NavBar';

//  className='App-header'

function simpleForm() {
    return (
        <div>
            <NavBar />
            <form action="" method="">
                <label for="usrName">UserName</label><br/>
                <input type="text" name="usrName" id="usrName"/><br/>
                <label for="usrPass">Password</label><br/>
                <input type="password" name="usrPass" id="usrPass"/><br/>
                <button type="submit" name='btnSubmit'>Log in</button>
            </form>
        </div>
    );
}

export default simpleForm;