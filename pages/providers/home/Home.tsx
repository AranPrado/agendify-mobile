import Menu from "components/Menu/Menu";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeProviders = () => {

    return (
        <>
            {/* <Menu title="Olá Jane Doe" />
            <View style={styles.container}>
                <View style={styles.cardSuperiorInicial}>
                    <Text>Qual serviço você irá prestar hoje?</Text>
                    <Text>Ofereça seus serviços e conquiste novos clientes cadastrados.</Text>
                </View>
                <View>
                    <View>
                        <Text>Meu serviço cadastrado</Text>
                    </View>
                    <View>
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

                    </View>
                </View>
                <View>
                    <Text>Card quantidade de agendamentos solicitados</Text>
                </View>
            </View> */}
        </>
    )

}

export default HomeProviders;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    cardSuperiorInicial: {
        borderWidth: 1,

    }
})