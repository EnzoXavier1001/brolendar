import * as C from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <C.Header>
            <C.HeaderContainer>
                <img src={logo} alt="" />
                <C.HeaderNav>
                    <C.NavLinks>
                       <li><Link to="/">Meus eventos</Link></li> 
                       <li><Link to="/">Meus eventos</Link></li>
                    </C.NavLinks>
                    <C.UserInfo>
                        <button>Criar evento</button>
                    </C.UserInfo>
                </C.HeaderNav>
            </C.HeaderContainer>
        </C.Header>
    )
}