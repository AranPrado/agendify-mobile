import { createStackNavigator } from "@react-navigation/stack";
import ToastContainer from "components/ToastContainer/ToastContainer";
import AppointmentClient from "pages/clients/AppointmentClient/AppointmentClient";
import AppointmentClientDetails from "pages/clients/AppointmentClientDetails/AppointmentClientDetails";

const Stack = createStackNavigator<RotasAgendamentoType>();

export type RotasAgendamentoType = {
    "Agendamentos": {refresh?:boolean}
    "DetalhesAgendamentos": {idService: any, idAgendamento:any}
}


const RotasAgendamento = () => {

    return (
        <ToastContainer>    
            <Stack.Navigator  screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}>
                <Stack.Screen
                    name="Agendamentos"
                    component={AppointmentClient}
                />
                <Stack.Screen
                    name="DetalhesAgendamentos"
                    component={AppointmentClientDetails}
                />
            </Stack.Navigator>
        </ToastContainer>    
    )

}

export default RotasAgendamento;