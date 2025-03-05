import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./consts/styles";
import { useIsFocused } from "@react-navigation/native";
import CreateIconBlack from "@/assets/icons/create-icon-black";
import CreateIconWhite from "@/assets/icons/create-icon-white";
import { useRouter } from "expo-router";

export function CreateTabActive() {
    const isFocused = useIsFocused();
    const router = useRouter();

    const handlePress = () => {
        router.push('/create');
    }

    return (
        <TouchableOpacity
            style={Styles.bottomBarItem}
            onPress={handlePress}
        >
            <View style={Styles.iconWithText}>
                <View style={[
                    Styles.iconWrapper,
                    isFocused && Styles.activeTab
                ]}>
                    {isFocused ? <CreateIconBlack /> : <CreateIconWhite />}
                </View>
                <Text style={Styles.tabText}>Создать гитару</Text>
            </View>
        </TouchableOpacity>
    )
}