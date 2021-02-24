import React from 'react'
import styles from './Register.module.css'
import { UserLayout } from '../../layouts/userLayout'
import { RegisterForm } from './RegisterForm'

export const Register: React.FC = () => {
  return (
    <UserLayout>
      <RegisterForm />
    </UserLayout>
  )
}
