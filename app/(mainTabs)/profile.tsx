import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/components/consts/tokens";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.main
    },
})