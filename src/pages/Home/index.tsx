import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import * as C from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

const LoginSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres').max(16)
})

type Login = z.infer<typeof LoginSchema>

export const Home = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Login>({
        resolver: zodResolver(LoginSchema)
    })

    async function handleLogin(data: Login) {
        try {
            const res = await api.post('/usuario', data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <C.HomeSection>
            <img src={logo} alt="Logo Brolendar" />
            <C.TitleHome>Planeje seu evento conosco e faça acontecer!</C.TitleHome>
            <C.HomeForm onSubmit={handleSubmit(handleLogin)}>
                <h3>Bem vindo(a) de volta</h3>
                <C.FormInputWrapper>
                    <C.FormInput 
                        {...register('email')} 
                        type='email' 
                        placeholder='Insira seu e-mail' 
                    />
                    <C.ErrorMessage>{errors?.email?.message}</C.ErrorMessage>
                </C.FormInputWrapper>
                <C.FormInputWrapper>
                    <C.FormInput 
                        {...register('password')} 
                        type='password' 
                        placeholder='Insira sua senha' 
                    />
                    <C.ErrorMessage>{errors?.password?.message}</C.ErrorMessage>
                </C.FormInputWrapper>
                <C.HomeButton type='submit'>Entrar</C.HomeButton>
                <span>Não possui uma conta? <Link to="/register">Registrar</Link></span>
            </C.HomeForm>
        </C.HomeSection>
    )
}