import { StyleSheet } from "react-native";
import { Colors } from "./tokens";

export const Styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.button,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 8
    },
    buttonText: {
        color: Colors.white,
        fontSize: 20
    },
    bottomBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWithText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        color: Colors.white,
        fontSize: 16,
        marginTop: 4
    },
    iconWrapper: {
        width: 64,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeTab: {
        backgroundColor: Colors.active,
        borderRadius: 16
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 250,
        height: 150,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    modalText: {
        fontSize: 20
    },
    input: {
        height: 56,
        width: 216,
        backgroundColor: Colors.main,
        borderRadius: 4,
        color: Colors.white,
        paddingHorizontal: 16,
        fontSize: 16
    },
    focusedInput: {
        borderBottomColor: Colors.active,
        borderBottomWidth: 2
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.main
    },
})