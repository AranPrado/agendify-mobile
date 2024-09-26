import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Constants from 'expo-constants';
import Sizes from "utils/Sizes";
import Colors from "utils/Color";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackAuth } from "navigation/auth.routes";
import AuthService from "services/authService.service";
import useAuthStore from "auth/Auth";


const Login = () => {

    const navigation = useNavigation<RootStackAuth>()
    const [selectType, setSelectType] = useState<"clients" | "provider">('clients');
    const [securyPassword, setSecuryPassword] = useState<boolean>(true)
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const {setIsLoggedIn, setType}:any = useAuthStore()


    const handleType = (type: "clients" | "provider") => {
        if (selectType === type) {
            // Não faz nada se o tipo já estiver selecionado
            return;
        } else {
            setSelectType(type);
            setEmail(""); // Limpa os campos apenas quando o tipo for diferente
            setPassword("");
        }
        
    }

    const handleSecury = () => {
        if (securyPassword) {
            setSecuryPassword(false)
        } else if (!securyPassword) {
            setSecuryPassword(true)
        }
    }

    const handleRegister = () => {
        navigation.navigate("Register")
    }

    const handleLogin = async () => {
        
        if(selectType === 'clients') {
            setIsLoggedIn(true)
            setType('client')
        } else if(selectType === 'provider') {
            setIsLoggedIn(true)
            setType('provider')
        }
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>



                <View style={styles.container}>
                    <View style={styles.containerLogo}>
                        <Ionicons color={Colors.primaryEscura} size={20} name="calendar-outline" />
                        <Text style={styles.textLogo}>Agendify</Text>
                    </View>

                    <View style={styles.containerButtonsSelect}>
                        <TouchableOpacity onPress={() => handleType('clients')} style={[styles.buttonSelect, { borderBottomWidth: selectType === 'clients' ? 1 : 0, borderColor: selectType === 'clients' ? Colors.primaryEscura : '' }]} >
                            <Text style={styles.textButtonSelect}>Cliente</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleType('provider')} style={[styles.buttonSelect, { borderBottomWidth: selectType === 'provider' ? 1 : 0, borderColor: selectType === 'provider' ? Colors.primaryEscura : '' }]} >
                            <Text style={styles.textButtonSelect}>Prestador</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.containerInputsTexts}>
                        <View>
                            <Text style={styles.textLabel}>Email:</Text>
                            <TextInput value={email} inputMode="email" onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="email@dominio.com" />
                        </View>

                        <View>
                            <Text style={styles.textLabel}>Senha:</Text>
                            <View style={styles.containerInputSenha}>
                                <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={securyPassword} style={[styles.input, { width: '90%' }]} placeholder="**********" />
                                <Ionicons onPress={() => handleSecury()} name={securyPassword ? "eye" : "eye-off"} size={20} />
                            </View>

                        </View>
                    </View>

                    <View style={styles.containerButtons}>
                        <View>
                            <TouchableOpacity disabled={email === "" || email === null || password === "" || password === null ? true : false} onPress={() => handleLogin()} style={[styles.buttonLogin, {backgroundColor: email === "" || email === null || password === "" || password === null ? "#ccc" : Colors.primary}]}>
                                <Text style={{ fontSize: Sizes.normal }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerTextConta}>
                            <Text style={styles.textNotConta}>Ainda não tenho uma conta? </Text>
                            <TouchableOpacity onPress={() => handleRegister()} style={styles.buttonCriarConta}>
                                <Text style={styles.textButtonCriar}>Criar conta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.whiteColor,
        height: '100%',
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },

    containerLogo: {

        position: 'absolute',
        top: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    textLogo: {
        fontSize: Sizes.normal + 5,
        color: Colors.blackColor,
        textTransform: 'uppercase',
        color: Colors.primaryEscura
    },
    containerButtonsSelect: {
        display: 'flex',
        flexDirection: 'row',

        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 50
    },
    buttonSelect: {

    },
    textButtonSelect: {
        fontSize: Sizes.normal,
        marginBottom: 5
    },
    containerInputsTexts: {
        marginBottom: 50,
        width: "100%",
        gap: 15
    },
    input: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginTop: 5,
        paddingVertical: 15,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.whiteColor
    },
    textLabel: {
        fontSize: Sizes.normal,
        
    },
    containerButtons: {
        width: '100%',
        gap: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLogin: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 120,
        paddingVertical: 15,
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
    textNotConta: {
        fontSize: Sizes.normal
    },
    containerTextConta: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',


    },
    buttonCriarConta: {
        borderBottomWidth: 1,
        borderColor: Colors.primaryEscura
    },
    textButtonCriar: {
        fontSize: Sizes.normal,
        
        color: Colors.primaryEscura,


    },
    containerInputSenha: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})