import { Image, StyleSheet, Text, View } from "react-native";
import { Styles } from "@/components/consts/styles";
import { Colors } from "@/components/consts/tokens";
import { Button } from "@/components/Button";

export default function Profile() {
    return (
        <View style={Styles.container}>
            <View style={styles.profileInfo}>
                <Image
                    source={require('../../assets/images/profile-icon.jpg')}
                    style={styles.profileIcon}
                />
                <Text style={styles.phoneNumber}>+78005553535</Text>
                <View style={styles.buttonContainer}>
                    <Button label="Выйти" />
                </View>
            </View>
            <View style={styles.orderSection}>
                <View style={styles.orderStatusBlock}>
                    <Text style={styles.orderStatusHeader}>Статус заказа</Text>
                    <View style={styles.orderStatus}>
                        <Text style={styles.orderStatusText}>Нет заказа</Text>
                    </View>
                </View>
                <View style={styles.orderHistoryButtonWrapper}>
                    <Button label="История заказов" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileInfo: {
        backgroundColor: Colors.main,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderSection: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    profileIcon: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    phoneNumber: {
        color: Colors.white,
        fontSize: 32
    },
    buttonContainer: {
        marginTop: 20,
        width: 92
    },
    orderStatusBlock: {
        width: '100%',
        height: 150,
        backgroundColor: Colors.support,
        borderRadius: 50,
        alignItems: 'center',
        padding: 10
    },
    orderStatusHeader: {
        color: Colors.white,
        fontSize: 28
    },
    orderStatus: {
        justifyContent: 'center',
        flex: 1
    },
    orderStatusText: {
        color: Colors.white,
        fontSize: 22
    },
    orderHistoryButtonWrapper: {
        width: '100%',
        padding: 40
    }
})