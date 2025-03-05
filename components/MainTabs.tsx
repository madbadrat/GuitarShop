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
                    title: "Создать гитару",
                    tabBarButton: () => (
                        <CreateTabActive />
                    )
                }}
            />
            <ExpoTabs.Screen
                name="profile"
                options={{
                    headerTitle: "Профиль",
                    tabBarButton: () => {
                        return (
                            <ProfileTab />
                        )
                    }
                }}
            />


        </ExpoTabs>
    )
}