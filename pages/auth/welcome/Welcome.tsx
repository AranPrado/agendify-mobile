import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from 'expo-constants';
import Colors from "utils/Color";
import { Ionicons } from "@expo/vector-icons";
import Sizes from "utils/Sizes";
import { useNavigation } from "@react-navigation/native";
import * as Calendar from 'expo-calendar';
import { useEffect } from "react";

const Welcome = () => {

    const navigation = useNavigation<any>()

    const getCalendarPermission = async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status !== 'granted') {
            alert('Permissão para acessar o calendário foi negada!');
        }
    };

    // Solicitar permissão assim que o componente for montado
    useEffect(() => {
        getCalendarPermission();
    }, []);

    const handleRegister = () => {

        navigation.navigate("Register")        

    }

    const handleLogin = () => {

        navigation.navigate("Login")     

    }

    return (

        <>
            <View style={styles.container}>
                <View style={styles.containerTituloPage}>
                    <Ionicons color={Colors.primaryEscura} size={20} name="calendar-outline" />
                    <Text style={styles.tituloPage}>Agendify</Text>
                </View>
                <View style={styles.containerImagem}>

                    <Image resizeMode="contain" style={styles.imagem} source={require('../../../assets/AgendamentoFoto.jpg')} />

                </View>
                <View style={styles.containerTexts}>
                    <Text style={styles.titulo}>Conecte-se aos serviços que você precisa ou promova o seu com praticidade.</Text>
                    <Text style={styles.subTitulo}>Facilitando a busca por soluções e ampliando o alcance do seu negócio.</Text>
                </View>
                <View style={styles.containerButton}>

                    <TouchableOpacity onPress={() => handleRegister()} style={styles.button}>
                        <Text style={styles.textButton}>Cadastre-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
                        <Text style={styles.textButton}>Já tenho uma conta</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </>
    )

}

export default Welcome;

const styles = StyleSheet.create({

    container: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingBottom: 30,
        height: '100%',
        backgroundColor: Colors.whiteColor

    },
    containerTituloPage: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center',
    },
    containerImagem: {
        marginTop: 80
    },
    imagem: {
        width: '100%',
        height: 250  // Defina a largura desejada

    },
    containerTexts: {

        display: 'flex',
        paddingHorizontal: 10,
        gap: 10,
        height: '30%',

    },
    titulo: {
        textAlign: 'center',
        fontSize: Sizes.normal + 2,
        

    },
    subTitulo: {
        textAlign: 'center',
        fontSize: Sizes.pequenos + 2,
        paddingHorizontal: 30

    },
    containerButton: {

        display: 'flex',
        gap: 15,
        justifyContent: 'space-evenly',
        marginHorizontal: 30
    },
    button: {
        backgroundColor: Colors.primary,
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    textButton: {
        fontSize: Sizes.normal,
         
    },
    tituloPage: {
        fontSize: Sizes.normal + 5,
        color: Colors.blackColor,
        textTransform: 'uppercase',
        color: Colors.primaryEscura
    }

})