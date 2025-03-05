import { Styles } from "@/components/consts/styles";
import { OrderInformationCard } from "@/components/OrderInformationCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function History() {
    const orderInformationCards = [];

    for (let i = 0; i < 10; i++) {
        orderInformationCards.push(
            <OrderInformationCard
                key={`order-card-${i}`}
                orderId={`№ 12345678-${i}`}
            />
        );
    }

    return (
        <View style={Styles.container}>
            <ScrollView contentContainerStyle={styles.orderCards}>
                {orderInformationCards}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    orderCards: {
        width: '100%',
        paddingVertical: 10
    },
})