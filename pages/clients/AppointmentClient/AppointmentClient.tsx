import { useRoute } from "@react-navigation/native";
import CardAgendamentosClient from "components/CardAgendamentosClient/CardAgendamentosClient";
import Menu from "components/Menu/Menu";
import { dadosAgendamentosApi } from "mocksApi/MocksApi";
import { useEffect, useState } from "react";
import { RefreshControl, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "utils/Color";
import Sizes from "utils/Sizes";

const AppointmentClient = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [dados, setDados] = useState(dadosAgendamentosApi); // Simulando dados da API
    const route = useRoute();
    const { refresh }: any = route.params || {};

    const handleRefresh = () => {
        setRefreshing(true);

        // Simulando uma nova atualização de dados
        setTimeout(() => {
            // Aqui você faria a chamada à API para obter os dados atualizados
            setDados(dadosAgendamentosApi); // Atualiza os dados
            setRefreshing(false); // Para o refresh
        }, 2000); // Tempo de simulação de carregamento
    };

    useEffect(() => {
        if (refresh === true) {
            setRefreshing(true);

            // Simulando uma nova atualização de dados
            setTimeout(() => {
                // Aqui você faria a chamada à API para obter os dados atualizados
                setDados(dadosAgendamentosApi); // Atualiza os dados
                setRefreshing(false); // Para o refresh
            }, 2000);
        }
    }, [refresh]); 

    return (
        <>
            <Menu title="Meus agendamentos" mostrarIcon={false} space="center" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
                style={styles.scroll}
            >
                <View style={styles.container}>
                    {dadosAgendamentosApi.length > 0 ? (
                        dadosAgendamentosApi.map((item: any) => (
                            <CardAgendamentosClient
                                key={item.idService}
                                idAgendamento={item.idAgendamento}
                                idService={item.idService}
                                title={item.infoService?.title}
                                descricao={item.infoService?.descricao}
                                data={item.data}
                                hora={item.hora}
                            />
                        ))
                    ) : (
                        <View style={styles.containerNenhum}>
                            <Text style={styles.textNenhum}>Nenhum agendamento encontrado.</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </>
    )

}

export default AppointmentClient;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1, // Para o ScrollView ocupar todo o espaço da tela

    },
    containerNenhum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, // Para espaçamento interno se necessário


    },
    textNenhum: {
        fontSize: Sizes.normal + 2
    },
    scroll: {
        backgroundColor: Colors.whiteColor,
    }


})