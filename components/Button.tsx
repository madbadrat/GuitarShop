import { Pressable, Text } from "react-native";
import { Styles } from "./consts/styles";
import { useRouter } from "expo-router";

type Props = {
    label: string;
    targetScreen?: string | null;
    onPress?: () => void;
};

export function Button({ label, targetScreen, onPress }: Props) {
    const router = useRouter();

    const handlePress = () => {
        if (onPress) {
            onPress();
        }
        if (targetScreen) {
            router.push(targetScreen);
        }
    };

    return (
        <Pressable style={Styles.button} onPress={handlePress}>
            <Text style={Styles.buttonText}>{label}</Text>
        </Pressable>
    );
}
