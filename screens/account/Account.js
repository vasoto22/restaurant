import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import { getCurrentUser, isUserLogged } from '../../utils/actions'
import Loading from '../../components/Loading'


export default function Account() {
    const [login, setLogin] = useState(null)

    useFocusEffect(
        useCallback(() => {
            const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false) //validación para que se quede en pantalla usuario logueado
            //setLogin(isUserLogged())
        }, [])
    )

    

    if  (login == null){
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
