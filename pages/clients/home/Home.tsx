import Card from "components/Card/Card";
import Menu from "components/Menu/Menu";
import { dadosLista } from "mocksApi/MocksApi";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "utils/Color";
import Sizes from "utils/Sizes";

const HomeClient = () => {

    
    

    return (
        <>
            <Menu title="Olá Jon Doe" />
            <View style={styles.container}>
                <View style={styles.containerPrimeiraParte}>
                    <Text style={styles.textService}>Qual serviço deseja para hoje?</Text>
                    <Text style={styles.descricaoService}>Aproveite os novos cadastrados dos prestadores e seus serviços.</Text>
                </View>
                <View style={styles.containerSegundaParte}>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                        {dadosLista.map((item) => (
                            <Card key={item.idService} idService={item.idService} idProvider={item.idProvider} title={item.title} descricao={item.descricao}/>
                        ))}
                        
                    </ScrollView>
                </View>
            </View>
        </>
    )

}

export default HomeClient;

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.whiteColor,
        flex: 1,
        paddingHorizontal: 10
    },
    containerPrimeiraParte: {
        marginTop: 10,
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
    },
    textService: {
        fontSize: Sizes.normal + 2,
        
        color: '#555'
    },
    descricaoService: {
        marginTop: 5,
    },
    containerSegundaParte: {
        marginTop: 15,
        
    },
    scrollView:{
        marginBottom: 80
        
    }

})