import { createStackNavigator } from "@react-navigation/stack"
import ToastContainer from "components/ToastContainer/ToastContainer"
import Login from "pages/auth/login/Login"
import Register from "pages/auth/register/Register"
import Welcome from "pages/auth/welcome/Welcome"
import HomeClient from "pages/clients/home/Home"
import Home from "pages/clients/home/Home"
import HomeProviders from "pages/providers/home/Home"

const Stack = createStackNavigator()

export type RootStackAuth = {
    "Login": undefined,
    "Register": undefined,
    "Welcome": undefined,
}

const AuthRoutes = () => {
    return (
        <ToastContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </ToastContainer>
    )
}

export default AuthRoutes;