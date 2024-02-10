import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import * as C from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { IoEyeSharp } from "react-icons/io5";
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";

const LoginSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres').max(16)
})

type Login = z.infer<typeof LoginSchema>

export const Login = () => {
    const [showPassword, setShowPassword ] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<Login>({
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

    function handleChangeShowPassword() {
        setShowPassword(prevState => {
            return !prevState
        })
    }

    return (
        <C.HomeSection>
            <C.HomeContainer>
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
                        <div>
                            <C.FormInput 
                                {...register('password')} 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder='Insira sua senha'
                            />
                            
                            <C.ButtonShowPassword onClick={handleChangeShowPassword}>
                                {showPassword ? (
                                    <FaEyeSlash size={24} color='#00282F'/>
                                ): (
                                    <IoEyeSharp size={24} color='#00282F' />
                                )}
                            </C.ButtonShowPassword>
                        </div>
                        <C.ErrorMessage>{errors?.password?.message}</C.ErrorMessage>
                    </C.FormInputWrapper>
                    <C.HomeButton type='submit'>Entrar</C.HomeButton>
                    <span>Não possui uma conta? <Link to="/register">Registrar</Link></span>
                </C.HomeForm>
            </C.HomeContainer>
        </C.HomeSection>
    )
}