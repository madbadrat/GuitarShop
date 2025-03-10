import { Button } from "@/components/Button";
import { Styles } from "@/components/consts/styles";
import { Colors } from "@/components/consts/tokens";
import { TextInput } from "@/components/TextInput";
import { TotalRow } from "@/components/TotalRow";
import { View, Text, StyleSheet } from "react-native";
import { useOrderViewModel } from "@/viewmodels/useOrderViewModel";

export default function OrderView() {
    const {
        order,
        cardNumber,
        expiration,
        cvv,
        setCardNumber,
        setExpiration,
        setCvv,
        submitPayment,
    } = useOrderViewModel();

    return (
        <View style={[Styles.container, { justifyContent: "flex-start" }]}>
            <View style={styles.total}>
                <Text style={styles.totalHeaderText}>Итого</Text>
                <View style={styles.totalContent}>
                    <TotalRow label="Форма" text={order.shape} />
                    <TotalRow label="Мензура" text={order.scale} />
                    <TotalRow label="Звукосниматели" text={order.pickups} />
                    <TotalRow label="Инкрустация" text={order.inlays} />
                    <TotalRow label="Распайка" text={order.wiring} />
                    <TotalRow label="К оплате" text={order.totalPrice} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardHeaderText}>Данные карты</Text>

                <View style={styles.cardFields}>
                    <View style={styles.cardFieldsNumber}>
                        <TextInput
                            style={{ width: "100%" }}
                            label="Номер карты"
                            value={cardNumber}
                            onChangeText={setCardNumber}
                        />
                    </View>
                    <View style={styles.cardFieldsOthers}>
                        <View style={styles.expirationContainer}>
                            <TextInput
                                style={{ width: "auto" }}
                                label="Срок действия"
                                value={expiration}
                                onChangeText={setExpiration}
                            />
                        </View>
                        <View style={styles.cvvContainer}>
                            <TextInput
                                style={{ width: "auto" }}
                                label="CVV"
                                value={cvv}
                                onChangeText={setCvv}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.cardButtonContainer}>
                    <Button label="Оплатить" onPress={submitPayment} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    total: {
        backgroundColor: Colors.support,
        width: "100%",
        borderRadius: 50,
        alignItems: "center",
        marginBottom: 16,
        paddingVertical: 8,
    },
    totalHeaderText: {
        color: Colors.white,
        fontSize: 28,
        marginBottom: 8,
    },
    totalContent: {
        width: "100%",
    },
    card: {
        backgroundColor: Colors.support,
        width: "100%",
        borderRadius: 50,
        alignItems: "center",
        paddingVertical: 8,
    },
    cardHeaderText: {
        color: Colors.white,
        fontSize: 28,
        marginBottom: 28,
    },
    cardFields: {
        width: "100%",
        paddingHorizontal: 16,
    },
    cardFieldsNumber: {
        width: "100%",
        marginBottom: 8,
    },
    cardFieldsOthers: {
        flexDirection: "row",
        marginBottom: 16,
    },
    expirationContainer: {
        paddingRight: 8,
        flex: 1,
    },
    cvvContainer: {
        paddingLeft: 8,
        flex: 1,
    },
    cardButtonContainer: {
        marginBottom: 8,
    },
});
