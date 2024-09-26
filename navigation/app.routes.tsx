
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "pages/clients/home/Home";
import HomeClient from "pages/clients/home/Home";
import ServicesDetails from "pages/clients/servicesDetails/ServicesDetails";
import HomeProviders from "pages/providers/home/Home";
import Colors from "utils/Color";
import RotasHomeClient from "./rotasHome/RotasHome";
import RotasAgendamento from "./rotasAgendamento/RotasAgendamento";

import ProfileClient from "pages/clients/profile/ProfileClient";



const Tab = createBottomTabNavigator();

const ClientNavigation = () => {
    return (
        <Tab.Navigator
        
      screenOptions={({ route }) => ({
        
        headerShown: false, // Para ocultar o cabeçalho
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Ícones diferentes para quando estiver ativo/inativo
          } else if (route.name === 'Meus Agendamentos') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primaryEscura, // Cor dos ícones e texto ativos
        tabBarInactiveTintColor: 'gray', // Cor dos ícones e texto inativos
     
       
      
      })}
    >
            <Tab.Screen name="Home" component={RotasHomeClient} />
            <Tab.Screen name="Meus Agendamentos" component={RotasAgendamento} />
            <Tab.Screen name="Perfil" component={ProfileClient} />
        </Tab.Navigator>
    )
}

const ProviderNavigation = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
        
          headerShown: false, // Para ocultar o cabeçalho
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Ícones diferentes para quando estiver ativo/inativo
            } else if (route.name === 'Meus Agendamentos') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            } else if(route.name === "Meus Serviços"){
              iconName = focused ? 'build' : 'build-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primaryEscura, // Cor dos ícones e texto ativos
          tabBarInactiveTintColor: 'gray', // Cor dos ícones e texto inativos
       
         
        
        })}
        >
            <Tab.Screen name="Home" component={HomeProviders} />
            <Tab.Screen name="Meus Agendamentos" component={Home} />
            <Tab.Screen name="Meus Serviços" component={Home} />
            <Tab.Screen name="Perfil" component={Home} />
        </Tab.Navigator>
    )
}

export { ClientNavigation, ProviderNavigation };
