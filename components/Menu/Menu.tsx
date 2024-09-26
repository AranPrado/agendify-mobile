import { View, Text, StyleSheet } from "react-native";
import Colors from "utils/Color";
import Constants from "expo-constants";
import Sizes from "utils/Sizes";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Menu = ({ title, space = 'start', mostrarIcon = false, handleIcon }: any) => {

    return (
        <>

            <View style={[styles.container, { justifyContent: space }]}>
                {mostrarIcon && (
                    <View  style={styles.containerIcon}>
                        <Ionicons onPress={handleIcon} size={22} name="arrow-back-outline" color={Colors.whiteColor} />
                    </View>
                )}
                <Text style={[styles.title, {textAlign: space}]}>{title}</Text>
            </View>
        </>
    )

}

export default Menu;

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryEscura,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        zIndex: 9,
        width: '100%',
        position: 'static',
        top: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    title: {
        color: Colors.whiteColor,
        fontSize: Sizes.textosButtons,
        width: "85%",
        
        paddingHorizontal: 10,
        
    },
    containerIcon: {
        
        width: '10%',
        marginLeft: 10
    }
})