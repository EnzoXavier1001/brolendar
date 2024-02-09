import * as C from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Home = () => {

    return (
        <C.HomeSection>
            <img src={logo} alt="" />
            <C.TitleHome>Planeje seu evento conosco e faça acontecer!</C.TitleHome>
            <C.HomeForm>
                <h3>Login</h3>
                <C.FormInputWrapper>
                    <C.FormInput type='email' placeholder='Insira seu e-mail' />
                </C.FormInputWrapper>
                <C.FormInputWrapper>
                    <C.FormInput type='password' placeholder='Insira sua senha' />
                </C.FormInputWrapper>
                <C.HomeButton>Entrar</C.HomeButton>
                <span>Não possui uma conta? <Link to="/register">Registrar</Link></span>
            </C.HomeForm>
        </C.HomeSection>
    )
}