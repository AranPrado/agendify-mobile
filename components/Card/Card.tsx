import { useNavigation } from "@react-navigation/native";
import { dadosLista, dadosProviders } from "mocksApi/MocksApi";
import { RotasHomeType } from "navigation/rotasHome/RotasHome";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "utils/Color";
import Sizes from "utils/Sizes";

const Card = ({idService,idProvider,title, descricao,}: any) => {

    const navigation = useNavigation<RotasHomeType>()

    const buscarInformacoesIndividualService = (idService:any) => {

        navigation.navigate('ServiceDetalhes', {idService})

    }


    return (
        <View style={styles.containerCard}>

            <View>
                <TouchableOpacity onPress={() => buscarInformacoesIndividualService(idService)}>
                    <Text style={styles.titleCard}>{title}</Text>
                </TouchableOpacity>
            </View>

            <View>
                    <Text style={styles.descricaoCard}>
                        {descricao}
                    </Text>
            </View>

            <View>
                <TouchableOpacity onPress={() => buscarInformacoesIndividualService(idService)} style={styles.buttonAgendar}>
                    <Text style={styles.textButton}>Agendar serviço</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default Card;

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
    }
})