import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import { Button } from 'react-native-elements'

export default function ListReview( navigation, idRestaurant ) {
    const [userLogged, setUserLogged] = useState(false)

    firebase.auth().onAuthStateChanged((user) => {
        user ? setUserLogged(true) : setUserLogged(false)
    })
    return (
        <View>
            {
                userLogged ? (
                    <Button
                        buttonStyle={styles.btnAddReview}
                        title="Escribe una opinión."
                        titleStyle={styles.btnTitleAddReview}
                        icon={{
                            type: "material-community",
                            name: "square-edit-outline",
                            color: "#a376c7"
                        }}
                    />
                ) : (
                    <Text 
                        style={styles.mustLoginText}
                        onPress={() => navigation.navigate("login")}
                    >
                        Para escribir un comentario es necesario estar logueado.{" "}
                        <Text style={styles.loginText}>
                            Click aquí para iniciar sesión
                        </Text>
                    </Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    btnAddReview: {
        backgroundColor: "transparent"
    },
    btnTitleAddReview: {
        color: "#a376c7"
    },
    mustLoginText: {
        textAlign: "center",
        color: "#a376c7",
        padding: 20
    },
    loginText: {
        fontWeight: "bold"
    }
})
