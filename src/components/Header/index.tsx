import * as C from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <C.Header>
            <C.HeaderContainer>
                <Link to="/home">
                    <img src={logo} alt="Logo Brolendar" />
                </Link>
                <C.HeaderNav>
                    <C.NavLinks>
                       <li><Link to="/home">Todos os eventos</Link></li>
                       <li><Link to="/meus-eventos">Meus eventos</Link></li> 
                    </C.NavLinks>
                    <C.UserInfo>
                        <Link to="/criar-evento">Criar evento</Link>
                    </C.UserInfo>
                </C.HeaderNav>
            </C.HeaderContainer>
        </C.Header>
    )
}