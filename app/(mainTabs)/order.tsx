import { Button } from "@/components/Button";
import { Styles } from "@/components/consts/styles";
import { Colors } from "@/components/consts/tokens";
import { TextInput } from "@/components/TextInput";
import { TotalRow } from "@/components/TotalRow";
import { View, Text, StyleSheet } from "react-native";

export default function Order() {
    return (
        <View style={[Styles.container, { justifyContent: 'flex-start' }]}>
            <View style={styles.total}>
                <Text style={styles.totalHeaderText}>Итого</Text>

                <View style={styles.totalContent}>
                    <TotalRow
                        label="Форма"
                        text="Emperor"
                    />
                    <TotalRow
                        label="Мензура"
                        text='25.5"-27"'
                    />
                    <TotalRow
                        label="Звукосниматели"
                        text="Fokian"
                    />
                    <TotalRow
                        label="Инкрустация"
                        text="Точки"
                    />
                    <TotalRow
                        label="Распайка"
                        text="1 громоксть, 1 тон, 3 позиции"
                    />
                    <TotalRow
                        label="К оплате"
                        text="166456 р."
                    />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardHeaderText}>Данные карты</Text>

                <View style={styles.cardFields}>
                    <View style={styles.cardFieldsNumber}>
                        <TextInput style={{ width: '100%' }} />
                    </View>
                    <View style={styles.cardFieldsOthers}>
                        <View style={styles.expirationContainer}>
                            <TextInput style={{ width: 'auto' }} />
                        </View>
                        <View style={styles.cvvContainer}>
                            <TextInput style={{ width: 'auto' }} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardButtonContainer}>
                    <Button
                        label="Оплатить"
                        targetScreen={null}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    total: {
        backgroundColor: Colors.support,
        width: '100%',
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 16
    },
    totalHeaderText: {
        color: Colors.white,
        fontSize: 28,
        marginBottom: 8
    },
    totalContent: {
        width: '100%'
    },
    card: {
        backgroundColor: Colors.support,
        width: '100%',
        borderRadius: 50,
        alignItems: 'center'
    },
    cardHeaderText: {
        color: Colors.white,
        fontSize: 28,
        marginBottom: 28
    },
    cardFields: {
        width: '100%',
        paddingHorizontal: 16
    },
    cardFieldsNumber: {
        width: '100%',
        marginBottom: 8
    },
    cardFieldsOthers: {
        flexDirection: 'row',
        marginBottom: 16
    },
    expirationContainer: {
        paddingRight: 8,
        flex: 1,
    },
    cvvContainer: {
        paddingLeft: 8,
        flex: 1
    },
    cardButtonContainer: {
        marginBottom: 16
    }
})