import { Tabs as ExpoTabs } from "expo-router"
import { Colors } from "./consts/tokens"
import { CreateTabActive } from "./CreateTabActive"
import { ProfileTab } from "./ProfileTab"

export function MainScreenTabs() {
    return (
        <ExpoTabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.main
                },
                headerTitleStyle: {
                    color: Colors.white
                },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTintColor: Colors.white,
                tabBarStyle: {
                    backgroundColor: Colors.main,
                    height: 80,
                    borderTopWidth: 1,
                    borderColor: Colors.support
                }
            }}
        >
            <ExpoTabs.Screen
                name="create"
                options={{
                    headerTitle: "Моя гитара",
                    headerTitleStyle: {
                        fontSize: 32
                    },
                    title: "Создать гитару",
                    tabBarButton: () => (
                        <CreateTabActive />
                    ),
                    tabBarStyle: {
                        backgroundColor: Colors.support,
                        height: 80,
                        borderTopWidth: 1,
                        borderColor: Colors.main
                    }
                }}
            />
            <ExpoTabs.Screen
                name="profile"
                options={{
                    headerTitle: "Профиль",
                    headerTitleStyle: {
                        fontSize: 32
                    },
                    tabBarButton: () => {
                        return (
                            <ProfileTab />
                        )
                    }
                }}
            />

            <ExpoTabs.Screen
                name="history"
                options={{
                    headerTitle: "История заказов",
                    headerTitleStyle: {
                        fontSize: 32
                    },
                    href: null
                }}
            />

            <ExpoTabs.Screen
                name="order"
                options={{
                    headerTitle: "Оформление заказа",
                    headerTitleStyle: {
                        fontSize: 32
                    },
                    href: null
                }}
            />

        </ExpoTabs>
    )
}