import React from 'react'
import Auth from './Auth'
import { Link } from 'react-router-dom'
import {Link as MUILink} from '@mui/material';

export default function Login() {
  return (
    <>
        <Auth submitLabel="Login" onSubmit={ async ()=>{}}>
            <Link to = {"/signup"}style = {{alignSelf:"center"}}>
                <MUILink>Signup</MUILink></Link>
        </Auth>
    </>
  )
}
