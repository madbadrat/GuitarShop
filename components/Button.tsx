import { Pressable, Text } from "react-native"
import { Styles } from "./consts/styles"

type Props = {
    label: string
}

export function Button({ label }: Props) {
    return (
        <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>{label}</Text>
        </Pressable>
    )
}
