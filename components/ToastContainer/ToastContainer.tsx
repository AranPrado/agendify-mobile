import { View,Text } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

const ToastContainer = ({children}:any) => {
    return(
        <ToastProvider renderType={{
            success_toast: (toast) => (
              <View
                style={{
                  maxWidth: "85%",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: "#fff",
                  marginVertical: 4,
                  borderRadius: 8,
                  borderLeftColor: "#00C851", // Verde para sucesso
                  borderLeftWidth: 6,
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#333",
                    
                  }}
                >
                  {toast.data.title}
                </Text>
                <Text style={{ color: "#a3a3a3", marginTop: 2 }}>{toast.message}</Text>
              </View>
            ),
            warning_toast: (toast) => (
              <View
                style={{
                  maxWidth: "85%",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: "#fff",
                  marginVertical: 4,
                  borderRadius: 8,
                  borderLeftColor: "#FFC107", // Amarelo para aviso
                  borderLeftWidth: 6,
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#333",
                    
                  }}
                >
                  {toast.data.title}
                </Text>
                <Text style={{ color: "#a3a3a3", marginTop: 2 }}>{toast.message}</Text>
              </View>
            ),
            error_toast: (toast) => (
              <View
                style={{
                  maxWidth: "85%",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: "#fff",
                  marginVertical: 4,
                  borderRadius: 8,
                  borderLeftColor: "#FF5252", // Vermelho para erro
                  borderLeftWidth: 6,
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#333",
                    
                  }}
                >
                  {toast.data.title}
                </Text>
                <Text style={{ color: "#a3a3a3", marginTop: 2 }}>{toast.message}</Text>
              </View>
            ),
      
          }}>
            {children}
            
          </ToastProvider>
    )

}

export default ToastContainer;