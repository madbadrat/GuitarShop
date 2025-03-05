import { MainScreenTabs } from "@/components/MainTabs"
import { View } from "react-native"


export default function MainTabLayout() {
    return (
        <View style={{ flex: 1 }}>
            <MainScreenTabs />
        </View>
    )
}