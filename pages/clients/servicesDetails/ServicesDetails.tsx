import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import Menu from "components/Menu/Menu";
import { dadosAgendamentosApi, dadosLista, dadosProviders } from "mocksApi/MocksApi";
import { RotasAgendamentoType } from "navigation/rotasAgendamento/RotasAgendamento";
import { RotasHomeType } from "navigation/rotasHome/RotasHome";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useToast } from "react-native-toast-notifications";
import Colors from "utils/Color";
import Sizes from "utils/Sizes";


const ServicesDetails = () => {

    const route = useRoute();
    const [selected, setSelected] = useState('');
    const toast = useToast()
    const navigation = useNavigation<RotasHomeType>()
    const { idService }: any = route.params;
    const [services, setServices] = useState<any[]>([])
    const [providerInfo, setProviderInfo] = useState<any[]>([])
    const [date, setDate] = useState(new Date()); // Estado para armazenar a data/hora
    const [showDatePicker, setShowDatePicker] = useState(false); // Estado para mostrar o seletor de data
    const [showTimePicker, setShowTimePicker] = useState(false); // Estado para mostrar o seletor de hora
    const [tempDate, setTempDate] = useState(new Date());
    const [isScheduled, setIsScheduled] = useState(false);
    const [dataSelecionada, setDataSelecionada] = useState('')
    const [horaSelecionada, setHoraSelecionada] = useState('')
    const [agendamentoConfirmado, setAgendamentoConfirmado] = useState<boolean>(false)


    // Função para abrir o seletor de data
    // Função para abrir o seletor de data
    const handleShowDatePicker = () => {
        if (showDatePicker === true) {

            setShowDatePicker(false);
        } else {
            setShowDatePicker(true);
        }
    };

    const editarAgendamento = () => {

        setIsScheduled(false)
        setShowDatePicker(true)

    }

    // Função para quando a data for selecionada
    const onDateChange = (event: any, selectedDate: any) => {
        if (selectedDate) {
            setTempDate(selectedDate); // Armazena a data temporariamente até a confirmação
        }
    };

    // Função para confirmar a data selecionada
    const confirmDate = () => {
        setDate(tempDate); // Atualiza a data com a selecionada
        setShowDatePicker(false); // Fechar o seletor de data
        setShowTimePicker(true); // Abrir o seletor de hora
    };

    const confirmHours = () => {
        setShowTimePicker(false)
        setIsScheduled(true);
    }

    // Função para quando a hora for selecionada
    const onTimeChange = (event: any, selectedTime: any) => {
        if (selectedTime) {
            const currentDate = new Date(tempDate);

            // Atualizando apenas a hora no currentDate
            currentDate.setHours(selectedTime.getHours());
            currentDate.setMinutes(selectedTime.getMinutes());

            setDate(currentDate); // Atualiza a data com a hora selecionada

            // Separando a data e a hora para exibição ou armazenamento
            const datePart = currentDate.toLocaleDateString(); // Exibe a data no formato local
            const timePart = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Exibe a hora (HH:MM)

            setDataSelecionada(datePart)
            setHoraSelecionada(timePart)
            console.log("Data selecionada:", datePart); // Exibe a parte da data
            console.log("Hora selecionada:", timePart); // Exibe a parte da hora

            // Exibir no console
        }
    };
    useEffect(() => {
        recuperarInfoService(idService)
    }, [])

    const recuperarInfoService = (idService: any) => {
        const filterService = dadosLista.filter((id) => id.idService === idService)
        const filterProvider = dadosProviders.filter((id) => id.idProvider === filterService[0].idProvider)

        setServices(filterService)
        setProviderInfo(filterProvider)


    }

    const confirmarAgendamento = () => {
        
        const filterService = dadosLista.filter((item) => item.idService === idService)

        const dadosAgendamento = {idAgendamento: Math.floor(Math.random() * 100), idService: idService,idClient: 1, data:dataSelecionada,hora:horaSelecionada, statusClient:"confirmed",statusProvider:"pending", infoService: filterService[0]}

        dadosAgendamentosApi.push(dadosAgendamento)

        console.log("dadosAgendamentosApi", dadosAgendamentosApi)
        
        setAgendamentoConfirmado(true)

        toast.show("Agendamento solicitado com sucesso!", {
                animationType: "zoom-in",
                animationDuration: 500,
                type: "success",
                placement: "top"
             }
        )


        console.log("dadosAgendamentosApi", dadosAgendamentosApi)
    }

    const meusAgendamentos = () => {
        navigation.navigate("AgendamentosHome")
    }

    const voltarPagina = () => {
        navigation.navigate("HomeClient")
    }

    return (
        <>
            <Menu handleIcon={voltarPagina} mostrarIcon={true} title={services[0]?.title.toUpperCase()} space="center" />
            <ScrollView style={styles.scroll}>
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

                    <View style={styles.containerAgendamento}>
                        {!agendamentoConfirmado && isScheduled && (
                            <TouchableOpacity style={[styles.buttonAgendento, { backgroundColor: Colors.secondary }]} onPress={editarAgendamento}>
                                <Text style={[styles.textButtonAgendamento, { color: Colors.blackColor }]}>Editar agendamento</Text>
                            </TouchableOpacity>
                        )}
                        {!isScheduled && !agendamentoConfirmado && (
                            <TouchableOpacity style={styles.buttonAgendento} onPress={handleShowDatePicker}>
                                <Text style={styles.textButtonAgendamento}>Solicitar um agendamento</Text>
                            </TouchableOpacity>

                        )}



                        {showDatePicker && (
                            <>
                                <RNDateTimePicker
                                    value={tempDate}
                                    mode="date"
                                    display={Platform.OS === 'ios' ? 'inline' : 'default'}
                                    onChange={onDateChange} // Captura a data selecionada
                                />

                                {/* Botão para confirmar a data */}
                                <TouchableOpacity style={styles.buttonAgendento} onPress={confirmDate}>
                                    <Text style={styles.textButtonAgendamento}>Confirmar Data</Text>
                                </TouchableOpacity>
                            </>
                        )}


                        {showTimePicker && (
                            <>
                                <RNDateTimePicker
                                    value={date}
                                    mode="time"
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    onChange={onTimeChange} // Captura a hora selecionada
                                />

                                {/* Botão para confirmar a hora */}
                                <TouchableOpacity style={styles.buttonAgendento} onPress={() => confirmHours()}>
                                    <Text style={styles.textButtonAgendamento}>Confirmar Hora</Text>
                                </TouchableOpacity>
                            </>
                        )}



                        {isScheduled && (
                            <View style={styles.containerAgendamentoInfo}>
                                <Text style={styles.textSuperiorAgendamento}>Agendado para:</Text>
                                <Text style={styles.textAgendamento}>{dataSelecionada} ás {horaSelecionada}</Text>
                            </View>
                        )}

                        {/* Botão para confirmar o agendamento, exibido apenas após a seleção de data e hora */}
                        {isScheduled && !agendamentoConfirmado && (
                            <View>
                                <TouchableOpacity style={styles.buttonAgendento} onPress={() => confirmarAgendamento()}>
                                    <Text style={styles.textButtonAgendamento}>Confirmar agendamento</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {
                            agendamentoConfirmado && (
                                <View>
                                    <TouchableOpacity style={styles.buttonAgendento} onPress={() => meusAgendamentos()}>
                                        <Text style={styles.textButtonAgendamento}>Meus agendamentos</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>

                </View>
            </ScrollView>
        </>
    )

}

export default ServicesDetails;

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
    scroll: {

        backgroundColor: Colors.whiteColor
    },
    containerAgendamento: {
        marginBottom: 80,
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
    buttonAgendento: {

        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 3,
        backgroundColor: Colors.primaryEscura,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom: 10

    },
    textButtonAgendamento: {
        fontSize: Sizes.normal,
        color: Colors.whiteColor,
        textAlign: "center"
    },
    containerAgendamentoInfo: {
        marginBottom: 10,

        padding: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    textSuperiorAgendamento: {
        fontSize: Sizes.normal,
        marginBottom: 8
    },
    textAgendamento: {
        fontSize: Sizes.normal + 2,
        fontWeight: "500"
    }

})