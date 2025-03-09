import { Pressable, Text } from "react-native"
import { Styles } from "./consts/styles"
import { useRouter } from "expo-router"

type Props = {
    label: string,
    targetScreen: string | null
}

export function Button({ label, targetScreen }: Props) {
    const router = useRouter();

    const handlePress = () => {
        if (targetScreen != null) {
            router.push(targetScreen);
        }
    }

    return (
        <Pressable style={Styles.button} onPress={handlePress}>
            <Text style={Styles.buttonText}>{label}</Text>
        </Pressable>
    )
}
