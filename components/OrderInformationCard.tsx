import { View, Text, StyleSheet } from "react-native"
import { OrderInformationRow } from "./OrderInformationRow"
import { Colors } from "./consts/tokens"

type Props = {
    orderId: string
}

export function OrderInformationCard({ orderId }: Props) {
    return <View style={styles.orderInformationCard}>
        <Text style={styles.orderHeaderText}>{orderId}</Text>

        <View style={styles.orderInformation}>
            <OrderInformationRow
                label="Дата"
                text="01.02.2025"
            />

            <OrderInformationRow
                label="Сумма"
                text="156324 р."
            />

            <OrderInformationRow
                label="Статус"
                text="Выполнен"
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    orderInformation: {
        width: '100%'
    },
    orderHeaderText: {
        color: Colors.white,
        fontSize: 28,
        marginBottom: 8
    },
    orderInformationCard: {
        backgroundColor: Colors.support,
        width: '100%',
        borderRadius: 50,
        marginBottom: 24,
        padding: 15,
        paddingBottom: 10,
        alignItems: 'center'
    },
})