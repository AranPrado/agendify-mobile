import { useNavigation, useRoute } from "@react-navigation/native";
import Menu from "components/Menu/Menu";
import { dadosAgendamentosApi, dadosLista, dadosProviders } from "mocksApi/MocksApi";
import { RotasAgendamentoType } from "navigation/rotasAgendamento/RotasAgendamento";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useToast } from "react-native-toast-notifications";
import Colors from "utils/Color";
import Sizes from "utils/Sizes";

const AppointmentClientDetails = () => {
    const routes = useRoute()
    const { idService, idAgendamento }: any = routes.params;
    const [services, setServices] = useState<any[]>([])
    const [providerInfo, setProviderInfo] = useState<any[]>([])
    const [agendamentoInfo, setAgendamentoInfo] = useState<any[]>([])
    const toast = useToast()
    const navigation = useNavigation<RotasAgendamentoType>()

    useEffect(() => {

        console.log("id Service", idService)
        console.log("id Agendamento", idAgendamento)

        recuperarInfo(idService, idAgendamento);

    }, [])

    const recuperarInfo = (idServiceParam: any, idAgendamentoParam: any) => {
        const filterService = dadosLista.filter((item) => item.idService === idServiceParam);
        const filterProvider = dadosProviders.filter((item) => item.idProvider === filterService[0].idProvider);
        const filterAgendamento = dadosAgendamentosApi.filter((item: any) => item.idAgendamento === idAgendamentoParam);

        setServices(filterService)
        setProviderInfo(filterProvider)
        setAgendamentoInfo(filterAgendamento)

        console.log("filterService", filterService)
        console.log("filterProvider", filterProvider)
        console.log("filterAgendamento", filterAgendamento)


    }

    const cancelarAgendamento = (idAgendamentoParam: any) => {
        // Encontrar o índice do agendamento a ser removido
        const index = dadosAgendamentosApi.findIndex((item: any) => item.idAgendamento === idAgendamentoParam);

        // Se o índice for encontrado (diferente de -1), remover o item
        if (index !== -1) {
            dadosAgendamentosApi.splice(index, 1);
            console.log("index", index)
            toast.show("Agendamento cancelado com sucesso!", {
                animationDuration: 500,
                animationType: 'zoom-in',
                type: 'success',
                placement: 'top',
                duration: 2000
            })
            navigation.navigate("Agendamentos",{refresh:true})
        } else {
            navigation.navigate("Agendamentos",{refresh:true})
        }

    };

    const voltarPagina = () => {
        navigation.navigate("Agendamentos",{refresh:true})
    }

    return (
        <>
            <Menu handleIcon={voltarPagina} mostrarIcon={true} title="Informações do agendamento" />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.container}>
                    <View style={styles.cardInfo}>
                        <View style={styles.containerTituloSobre}>
                            <Text style={styles.tituloSobre}>Informações do serviço</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.serviceTitle}>{services[0]?.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.tituloDescricao}>Sobre o serviço:</Text>
                            <Text style={styles.Descricao}>{services[0]?.descricao}</Text>
                        </View>
                    </View>

                    <View style={styles.cardInfo}>
                        <View style={styles.containerTituloSobre}>
                            <Text style={styles.tituloSobre}>Informações do prestador:</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.tituloDescricao}>Nome do prestador:</Text>
                            <Text style={styles.infoPrestador}>{providerInfo[0]?.name}</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.tituloDescricao}>Idade do prestador:</Text>
                            <Text style={styles.infoPrestador}>{providerInfo[0]?.age}</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.tituloDescricao}>Sobre o prestador:</Text>
                            <Text style={styles.infoPrestador}>{providerInfo[0]?.aboutMe}</Text>
                        </View>

                    </View>

                    <View style={styles.cardInfo}>
                        <View style={styles.containerTituloSobre}>
                            <Text style={styles.tituloSobre}>Informações sobre o agendamento:</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.tituloDescricao}>Data do agendamento:</Text>
                            <Text style={styles.infoPrestador}>{agendamentoInfo[0]?.data}</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.tituloDescricao}>Horario do agendamento:</Text>
                            <Text style={styles.infoPrestador}>{agendamentoInfo[0]?.hora}</Text>
                        </View>
                        <View style={styles.containerTituloServico}>
                            <Text style={styles.tituloDescricao}>Status do agendamento:</Text>
                            <Text style={[styles.infoPrestador, { textTransform: "uppercase" }]}>{agendamentoInfo[0]?.statusProvider}</Text>
                        </View>
                        <View>
                            {agendamentoInfo[0]?.statusProvider === "pending" && (
                                <TouchableOpacity onPress={() => cancelarAgendamento(idAgendamento)} style={[styles.button, { backgroundColor: "#bb2124" }]}>
                                    <Text style={{ color: Colors.whiteColor }}>Cancelar agendamento</Text>
                                </TouchableOpacity>
                            )}

                            {agendamentoInfo[0]?.statusProvider === "completed" && (
                                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.primaryEscura }]}>
                                    <Text style={{ color: Colors.whiteColor }}>Confirmar serviço</Text>
                                </TouchableOpacity>
                            )}
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    )

}

export default AppointmentClientDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,

    },
    cardInfo: {
        marginVertical: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.whiteColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    containerTituloSobre: {
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingBottom: 5
    },
    tituloSobre: {

        fontSize: Sizes.normal + 2,
        textTransform: "uppercase"
    },
    containerTituloServico: {
        marginBottom: 15,
        gap: 5
    },
    serviceTitle: {
        fontSize: Sizes.normal + 2,
        fontWeight: "500"
    },
    tituloDescricao: {
        marginBottom: 5,
        fontSize: Sizes.normal + 1,
        fontStyle: "italic",
        fontWeight: "600"
    },
    Descricao: {
        fontSize: Sizes.normal - 1
    },
    infoPrestador: {
        fontSize: Sizes.normal
    },
    button: {

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})