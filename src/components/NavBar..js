import React,{Component} from 'react';
import { Link } from 'react-router-dom';


export class NavBar extends Component {

    render() {
        return (
            <>
            <nav>
                <div className='containerr'>
                    <div className='roww flexx'>
                        <div className='logo'>
                            <Link to="/">
                                <h2> Jash Pal </h2>
                            </Link>
                        </div>
                        <ul className='flexx-roww'>
                                <li className='navEle'><Link to='/'>Home</Link></li>
                                <li className='navEle'><Link to='/business'>Business</Link></li>
                                <li className='navEle'><Link to='/entertainment'>Entertainment</Link></li>
                                <li className='navEle'><Link to='/health'>Health</Link></li>
                                <li className='navEle'><Link to='/science'>Science</Link></li>
                                <li className='navEle'><Link to='/sports'>Sports</Link></li>
                                <li className='navEle'><Link to='/technology'>Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}

export default NavBar