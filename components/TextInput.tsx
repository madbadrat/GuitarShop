import { TextInput as RNTextInput, ViewStyle, TextStyle } from "react-native"
import { Styles } from "./consts/styles";
import { useState } from "react";

type Props = {
    editable?: boolean,
    value?: string,
    style?: ViewStyle | TextStyle
}

export function TextInput({ editable = true, value, style }: Props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <RNTextInput
            style={[Styles.input, isFocused && Styles.focusedInput, style]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={editable}
            value={value}
        />
    )
}
