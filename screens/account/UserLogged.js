import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { closeSession, isUserLogged } from '../../utils/actions'
import UserGuest from './UserGuest'

export default function UserLogged() {
    const navigation = useNavigation()
    return (
        <View>
            <Text>UserLogged...</Text>
            <Button
                title="Cerrar sesión"
                onPress={() => {
                    closeSession()
                    navigation.navigate("restaurants")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
