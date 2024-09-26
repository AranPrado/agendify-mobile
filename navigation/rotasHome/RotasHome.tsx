import { createStackNavigator } from "@react-navigation/stack";
import ToastContainer from "components/ToastContainer/ToastContainer";
import AppointmentClient from "pages/clients/AppointmentClient/AppointmentClient";
import HomeClient from "pages/clients/home/Home";
import ServicesDetails from "pages/clients/servicesDetails/ServicesDetails";

const Stack = createStackNavigator<RotasHomeType>();

export type RotasHomeType = {
    "HomeClient": undefined,
    "ServiceDetalhes": { idService: any }
    "AgendamentosHome": undefined
}

const RotasHomeClient  = () => {

    return (
        <ToastContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}>
                <Stack.Screen name="HomeClient" component={HomeClient} />
                <Stack.Screen name="ServiceDetalhes" component={ServicesDetails} />
                <Stack.Screen name="AgendamentosHome" component={AppointmentClient}/>
            </Stack.Navigator>
        </ToastContainer>
    )

}

export default RotasHomeClient;