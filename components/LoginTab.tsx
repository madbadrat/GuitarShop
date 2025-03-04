import { TouchableOpacity, View, Text } from "react-native"
import LoginIconBlack from "@/assets/icons/login-icon-black"
import LoginIconWhite from "@/assets/icons/login-icon-white"
import { Styles } from "./consts/styles"
import { useIsFocused } from "@react-navigation/native"

export function LoginTab() {
    const isFocused = useIsFocused();
    // const isFocused = false;

    return (
        <TouchableOpacity
            style={[
                Styles.bottomBarItem
            ]}
        >
            <View style={Styles.iconWithText}>
                <View style={[
                    Styles.iconWrapper,
                    isFocused && Styles.activeTab
                ]}>
                    {isFocused ? <LoginIconBlack /> : <LoginIconWhite />}
                </View>
                <Text style={Styles.tabText}>Вход/Регистрация</Text>
            </View>
        </TouchableOpacity>
    )
}
