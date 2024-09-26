import { useNavigation } from "@react-navigation/native";
import { RotasAgendamentoType } from "navigation/rotasAgendamento/RotasAgendamento";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "utils/Color";
import Sizes from "utils/Sizes";

const CardAgendamentosClient = ({ idService, idAgendamento, title, descricao, data, hora }: any) => {

    const navigation = useNavigation<RotasAgendamentoType>()

    const navegarDetalhes = () => {
        navigation.navigate("DetalhesAgendamentos", {idService, idAgendamento})
    }

    return (
        <View style={styles.containerCard}>

            <View>
                <TouchableOpacity >
                    <Text style={styles.titleCard}>{title}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.descricaoCard}>
                    {descricao}
                </Text>
            </View>

            <View style={styles.containerStatus}>
                <Text style={styles.textTitleStatus}>Status da solicitação:</Text>
                <Text style={styles.status}>pending</Text>
            </View>

            <View style={styles.containerAgendamento}>
                <Text style={styles.textTitleStatus}>Agendado para:</Text>

                <Text style={styles.status}>{data} ás {hora}</Text>

            </View>

            

            <View>
                <TouchableOpacity onPress={navegarDetalhes} style={styles.buttonAgendar}>
                    <Text style={styles.textButton}>Datalhes do serviço</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default CardAgendamentosClient;


const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: Colors.whiteColor,
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
        marginVertical: 10
    },
    titleCard: {
        marginBottom: 10,
        fontSize: Sizes.normal + 3,

    },
    descricaoCard: {
        marginBottom: 15,
        fontSize: Sizes.normal - 2
    },
    buttonAgendar: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5,
        backgroundColor: Colors.primaryEscura,
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
        color: Colors.whiteColor
    },
    containerAgendamento:{
        
        marginBottom: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10
    },
    containerStatus:{
        marginBottom: 10,
        
        gap: 5
    },
    textTitleStatus:{
        fontSize: Sizes.normal
    },
    status:{
        textTransform: "uppercase",
        fontSize: Sizes.normal + 1,
        fontWeight: "500"
    }
})