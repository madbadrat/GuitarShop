import { TextInput as PaperTextInput } from "react-native-paper";
import { useState } from "react";
import { Styles } from "./consts/styles";
import { ViewStyle, TextStyle } from "react-native";

type Props = {
    label?: string;
    editable?: boolean;
    value?: string;
    style?: ViewStyle | TextStyle;
    onChangeText?: (text: string) => void;
};

export function TextInput({ label, editable = true, value, style, onChangeText }: Props) {
    const [text, setText] = useState(value || "");
    const [isFocused, setIsFocused] = useState(false);

    const handleChangeText = (newText: string) => {
        setText(newText);
        onChangeText?.(newText);
    };

    return (
        <PaperTextInput
            style={[Styles.input, isFocused && Styles.focusedInput, style]}
            label={label}
            value={text}
            onChangeText={handleChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={editable}
            textColor="white"
            underlineColor="transparent"
        />
    );
}
