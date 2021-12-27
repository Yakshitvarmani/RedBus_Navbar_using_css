import React from 'react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import Home from './Pages/Home';
import Sign from './Component/Auth/Sign';
import SignUp from './Component/Auth/SignUp';
import BusTicket from './Component/RedHelp/BusTicket';

const App = () => {
    return (
        <section>
            <article>
                <Router>
                    <NavBar/>
                     {/* Dynamic Path Starts here */}

                     <Switch>
                    <Route path='/' exact>
                        <Home/>                    
                    </Route>

                    <Route path='/signin' exact>
                        <Sign/>                    
                    </Route>

                    <Route path='/signup' exact>
                        <SignUp/>                    
                    </Route>

                    <Route path='/bus-ticket' exact>
                        <BusTicket/>                    
                    </Route>

                    {/*  Dynamic routing ends here */}

                    </Switch>
                </Router>
            </article>
        </section>
    )
}

export default App
