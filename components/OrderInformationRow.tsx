import { StyleSheet, Text, View } from "react-native"
import { Colors } from "./consts/tokens"

type Props = {
    label: string,
    text: string
}

export function OrderInformationRow({ label, text }: Props) {
    return (
        <View style={styles.orderInformationRow}>
            <View>
                <Text style={styles.orderInformationRowText}>{label}</Text>
            </View>
            <View>
                <Text style={styles.orderInformationRowText}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderInformationRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 16
    },
    orderInformationRowText: {
        color: Colors.white,
        fontSize: 22
    }
})