import { View, Text, StyleSheet } from "react-native"
import { Colors } from "./consts/tokens"

type Props = {
    label: string,
    text: string
}

export function TotalRow({ label, text }: Props) {
    return (
        <View style={styles.totalRow}>
            <View style={styles.totalRowTextContainer}>
                <Text style={styles.totalRowText}>{label}</Text>
            </View>
            <View style={styles.totalRowTextContainer}>
                <Text style={styles.totalRowText}>{text}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 8,
        borderTopColor: Colors.main,
        borderTopWidth: 1
    },
    totalRowText: {
        color: Colors.white,
        fontSize: 22,
        textAlign: 'center'
    },
    totalRowTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        width: '50%'
    }
})