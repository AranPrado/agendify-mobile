import { Ionicons } from "@expo/vector-icons";
import useAuthStore from "auth/Auth";
import Menu from "components/Menu/Menu";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "utils/Color";
import Sizes from "utils/Sizes";

const ProfileClient = () => {
    const {setIsLoggedIn}:any = useAuthStore()

    const [profileData, setProfileData] = useState({
        nome: 'Jon Doe',
        email: 'jondoe@email.com',
        genero: 'Masculino',
    });

    const handleLogout = () => {
        // Lógica de logout, por exemplo, limpar o token de autenticação e redirecionar para a tela de login
        setIsLoggedIn(false)
    };

    return (
        <>
            <Menu title="Meu perfil" space="center" />
            {/* <View style={styles.containerLogo}>
                <Ionicons color={Colors.primaryEscura} size={20} name="calendar-outline" />
                <Text style={styles.textLogo}>Agendify</Text>
            </View> */}
            <View style={styles.container}>
                
                <Text style={styles.label}>Nome</Text>
                <Text style={styles.value}>{profileData.nome}</Text>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{profileData.email}</Text>

                <Text style={styles.label}>Gênero</Text>
                <Text style={styles.value}>{profileData.genero}</Text>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity onPress={() => handleLogout()} style={styles.buttonSair}>
                        <Text style={styles.textButton}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default ProfileClient;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: Colors.whiteColor,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 40,
    },
    containerLogo:{
        paddingTop: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        backgroundColor: Colors.whiteColor
    },
    textLogo:{
        fontSize: Sizes.normal + 5,
        color: Colors.blackColor,
        textTransform: 'uppercase',
        color: Colors.primaryEscura
    },
    buttonSair:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textButton:{
        fontSize: Sizes.normal,
        color: Colors.whiteColor
    }
});