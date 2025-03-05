import { TouchableOpacity, View, Text } from "react-native";
import { Styles } from "./consts/styles";
import { useIsFocused } from "@react-navigation/native";
import LoginIconBlack from "@/assets/icons/login-icon-black";
import LoginIconWhite from "@/assets/icons/login-icon-white";
import { useRouter } from "expo-router";

export function ProfileTab() {
    const isFocused = useIsFocused();
    const router = useRouter();

    const handlePress = () => {
        router.push('/profile');
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
                    {isFocused ? <LoginIconBlack /> : <LoginIconWhite />}
                </View>
                <Text style={Styles.tabText}>Профиль</Text>
            </View>
        </TouchableOpacity>
    )
}