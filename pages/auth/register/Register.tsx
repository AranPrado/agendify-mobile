import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Colors from "utils/Color";
import Constants from 'expo-constants';
import Sizes from "utils/Sizes";
import { useNavigation } from "@react-navigation/native";
import { RootStackAuth } from "navigation/auth.routes";
import { useState } from "react";
import AuthService from "services/authService.service";
import RNPickerSelect from 'react-native-picker-select';
import { useToast } from "react-native-toast-notifications";


const Register = () => {
    const navigation = useNavigation<RootStackAuth>()
    const [selectType, setSelectType] = useState<"clients" | "provider">('clients');
    const [securyPassword, setSecuryPassword] = useState<boolean>(true)
    const [securyConfirmedPassword, setSecuryConfirmedPassword] = useState<boolean>(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [gender, setGender] = useState(null);
    const [error, setError] = useState('');
    const [aboutMe, setAboutMe] = useState('')
    const [etapa, setEtapa] = useState(0)
    const toast = useToast()

    const handleType = (type: "clients" | "provider") => {
        if (selectType === type) {
            // Não faz nada se o tipo já estiver selecionado
            return;
        } else {
            setSelectType(type);
            setEmail(""); // Limpa os campos apenas quando o tipo for diferente
            setPassword("");
            setEtapa(0)
        }

    }

    const handleSecury = (type: 'password' | 'confirmedPassword') => {
        if (type === 'password') {

            if (securyPassword) {
                setSecuryPassword(false)
            } else if (!securyPassword) {
                setSecuryPassword(true)
            }
        } else if (type === 'confirmedPassword') {
            if (securyConfirmedPassword) {
                setSecuryConfirmedPassword(false)
            } else if (!securyPassword) {
                setSecuryConfirmedPassword(true)
            }
        }
    }


    const nextEtapa = (type: 'next' | 'before') => {
        if (type === 'next') {
            setEtapa(1)
        } else if (type === 'before') {
            setEtapa(0)
        }
    }

    const handleRegister = () => {

        toast.show("Conta criada com sucesso!", {
            animationDuration: 500,
            animationType: 'zoom-in',
            type: 'success',
            placement: 'top',
            duration: 2000
        })

        setTimeout(() => {
            navigation.navigate("Login")
        }, 2000)


    }

    const handleLogin = async () => {
        navigation.navigate("Login")

    }

    const validatePasswords = (text) => {
        setConfirmedPassword(text);

        // Verifica se ambos os campos estão preenchidos antes de validar
        if (password && text && password !== text) {
            setError('As senhas não são iguais.');
        } else {
            setError(''); // Limpa o erro se as senhas forem iguais ou se os campos estiverem vazios
        }
    };




    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 40}>

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
                        {etapa === 0 && (
                            <>
                                <View>
                                    <Text style={styles.textLabel}>Digite seu nome:</Text>
                                    <TextInput value={name} inputMode="text" onChangeText={(text) => setName(text)} style={styles.input} placeholder="Seu nome" />
                                </View>

                                <View>
                                    <Text style={styles.textLabel}>Digite seu email:</Text>
                                    <TextInput value={email} inputMode="email" onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="email@dominio.com" />
                                </View>

                                <View>
                                    <Text style={styles.textLabel}>Digite sua senha:</Text>
                                    <View style={styles.containerInputSenha}>
                                        <TextInput
                                            value={password}
                                            onChangeText={(text) => setPassword(text)}
                                            secureTextEntry={securyPassword}
                                            style={[styles.input, { width: '90%' }]}
                                            placeholder="Digite sua senha aqui"
                                        />
                                        <Ionicons onPress={() => handleSecury('password')} name={securyPassword ? "eye" : "eye-off"} size={20} />
                                    </View>

                                </View>

                                <View>
                                    <Text style={styles.textLabel}>Confirme sua senha:</Text>
                                    <View style={styles.containerInputSenha}>
                                        <TextInput
                                            value={confirmedPassword}
                                            onChangeText={(text) => validatePasswords(text)}
                                            secureTextEntry={securyConfirmedPassword}
                                            style={[styles.input, { width: '90%' }]}
                                            placeholder="Confirme sua senha aqui"
                                        />
                                        <Ionicons onPress={() => handleSecury('confirmedPassword')} name={securyPassword ? "eye" : "eye-off"} size={20} />
                                    </View>
                                </View>

                                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                            </>
                        )}

                        {etapa === 1 && (

                            <View>
                                <Text style={styles.textLabel}>Qual o seu genero:</Text>
                                <View style={styles.pickerSelect}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setGender(value)}
                                        items={[
                                            { label: 'Masculino', value: 'male' },
                                            { label: 'Feminino', value: 'female' },
                                            { label: 'Outros', value: 'others' },
                                        ]}
                                    />
                                </View>

                            </View>

                        )}

                        {etapa === 1 && selectType === 'provider' && (
                            <View>
                                <Text style={styles.textLabel}>Fale um pouco sobre voce:</Text>
                                <TextInput
                                    value={aboutMe}
                                    inputMode="text"
                                    onChangeText={(text) => setAboutMe(text)}
                                    style={styles.inputSobreVoce}
                                    placeholder="Faça uma breve descrição sobre voce..."
                                    multiline={true} // Habilita múltiplas linhas
                                />
                            </View>
                        )}

                    </View>

                    <View style={styles.containerButtons}>

                        <View>
                            {etapa === 0 && (
                                <TouchableOpacity onPress={() => nextEtapa('next')} disabled={email === "" || email === null || password === "" || password === null || confirmedPassword === "" || confirmedPassword === null || error !== ''} style={[styles.buttonLogin, { backgroundColor: email === "" || email === null || password === "" || password === null || confirmedPassword === "" || confirmedPassword === null || error !== '' ? "#ccc" : Colors.primary }]}>
                                    <Text style={{ fontSize: Sizes.normal }}>Proxima</Text>
                                </TouchableOpacity>
                            )}
                            {etapa === 1 && selectType === 'clients' &&  (
                                <>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                        <TouchableOpacity onPress={() => nextEtapa('before')}>
                                            <Ionicons name="arrow-back" size={20} />
                                        </TouchableOpacity>


                                        <TouchableOpacity onPress={() => handleRegister()} disabled={gender === null || gender === ""} style={[styles.buttonLogin, {backgroundColor: gender === null || gender === "" ? "#ccc" : Colors.primary}]}>
                                            <Text style={{ fontSize: Sizes.normal, }}>Criar conta</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>


                            )}

                            {etapa === 1 && selectType === 'provider' && (
                                <>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                        <TouchableOpacity onPress={() => nextEtapa('before')}>
                                            <Ionicons name="arrow-back" size={20} />
                                        </TouchableOpacity>


                                        <TouchableOpacity onPress={() => handleRegister()}  disabled={gender === null || gender === "" || aboutMe === "" || aboutMe === null} style={[styles.buttonLogin, {backgroundColor: gender === null || gender === "" || aboutMe === "" || aboutMe === null ? "#ccc" : Colors.primary}]}>
                                            <Text style={{ fontSize: Sizes.normal, }}>Criar conta</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            )}
                        </View>
                        <View style={styles.containerTextConta}>
                            <Text style={styles.textNotConta}>Ja tem conta? </Text>
                            <TouchableOpacity onPress={() => handleLogin()} style={styles.buttonCriarConta}>
                                <Text style={styles.textButtonCriar}>Realizar login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.whiteColor,
        flex: 1,
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
        width: '100%',
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
    },
    inputSobreVoce: {
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginTop: 3,
        elevation: 3,
        paddingBottom: 20,
        paddingTop: 10,
        borderRadius: 5,

        backgroundColor: Colors.whiteColor
    },
    pickerSelect: {
        backgroundColor: Colors.whiteColor,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        fontSize: 14,
    },
})