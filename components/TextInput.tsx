import { TextInput as PaperTextInput } from "react-native-paper";
import { useState } from "react";
import { Styles } from "./consts/styles";
import { ViewStyle, TextStyle } from "react-native";

type Props = {
    label?: string;
    editable?: boolean;
    value?: string;
    style?: ViewStyle | TextStyle;
};

export function TextInput({ label, editable = true, value, style }: Props) {
    const [text, setText] = useState(value || "");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <PaperTextInput
            style={[Styles.input, isFocused && Styles.focusedInput, style]}
            label={label}
            value={text}
            onChangeText={setText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={editable}
            textColor="white"
            underlineColor="transparent"
        />
    );
}
