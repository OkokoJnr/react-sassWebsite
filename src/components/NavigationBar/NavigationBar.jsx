import classes from './NavigationBar.module.css'

function NavigationBar (){
    return (<>
        <nav className= {classes.navbar} >
            <div className={classes.navcontainer}>
                <div className="logo">
                    {/* Adding Image to a components */}
                    <a href="#">
                        Growth App
                    </a>
                </div>
                <div className={classes.mainMenu}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="m" className={classes.btn}>
                                <i className="fas fa-user">Login</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}

export default NavigationBar;