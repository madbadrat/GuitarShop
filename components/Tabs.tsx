import { Tabs as ExpoTabs } from "expo-router";
import { CreateTabNotActive } from "./CreateTabNotActive";
import { LoginTab } from "./LoginTab";
import { Colors } from "./consts/tokens";

export function LoginScreenTabs({ openModal }) {
    return (
        <ExpoTabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.main
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: Colors.support,
                    height: 80,
                    borderTopWidth: 1,
                    borderColor: Colors.main
                }
            }}
        >
            <ExpoTabs.Screen
                name="create"
                options={{
                    headerTitle: "",
                    title: "Создать гитару",
                    tabBarButton: (props) => (
                        <CreateTabNotActive {...props} openModal={openModal} />
                    )
                }}
            />
            <ExpoTabs.Screen
                name="login"
                options={{
                    headerTitle: "",
                    tabBarButton: (props) => {
                        return (
                            <LoginTab />
                        )
                    }
                }}
            />
        </ExpoTabs>
    )
}