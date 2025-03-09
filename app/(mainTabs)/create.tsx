import Carousel from "@/components/Carousel";
import { Styles } from "@/components/consts/styles";
import { Colors } from "@/components/consts/tokens";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RadioButton } from 'react-native-paper';
import { useState } from "react";
import DropdownMenuComponent from "@/components/Dropdown";
import { Button } from "@/components/Button";

export default function Create() {
    const [value, setValue] = useState('first');

    const formsImages = [
        { source: require('../../assets/images/EMPEROR.jpg'), caption: 'EMPEROR' },
        { source: require('../../assets/images/KOYOT.jpg'), caption: 'KOYOT' },
    ];

    const pickupsImages = [
        { source: require('../../assets/images/ACTIVE.jpg'), caption: 'ACTIVE' },
        { source: require('../../assets/images/CRUSHER.jpg'), caption: 'CRUSHER' }
    ];

    const markersImages = [
        { source: require('../../assets/images/DOTS.jpg'), caption: 'ТОЧКИ' },
        { source: require('../../assets/images/SHARP.png'), caption: 'АКУЛИЙ ЗУБ' }
    ];

    return (
        <View style={Styles.container}>
            <ScrollView>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Форма</Text>
                    <View style={styles.carousel}>
                        <Carousel images={formsImages} />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Мензура</Text>
                    <View style={styles.scaleChanger}>
                        <View style={styles.scaleParam}>
                            <RadioButton
                                value="first"
                                status={value === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setValue('first')}
                            />
                            <Text style={styles.scaleText}>25.5"</Text>
                        </View>
                        <View style={styles.scaleParam}>
                            <RadioButton
                                value="second"
                                status={value === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setValue('second')}
                            />
                            <Text style={styles.scaleText}>27"</Text>
                        </View>
                        <View style={styles.scaleParam}>
                            <RadioButton
                                value="third"
                                status={value === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setValue('third')}
                            />
                            <Text style={styles.scaleText}>25.5"-27"</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Звукосниматели</Text>
                    <View style={styles.carousel}>
                        <Carousel images={pickupsImages} />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Инкрустация</Text>
                    <View style={styles.carousel}>
                        <Carousel images={markersImages} />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Распайка</Text>
                    <DropdownMenuComponent />
                </View>

                <View style={styles.totalContainer}>
                    <View style={styles.totalContainerRow}>
                        <Text style={styles.totalContainerRowText}>Итого: 166456 р.</Text>
                        <View style={styles.buttonContainer}>
                            <Button label="Оформить заказ" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: 32,
        marginBottom: 8
    },
    carousel: {
        height: 250,
        marginBottom: 20
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.support,
        borderRadius: 50,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 16
    },
    scaleChanger: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 16
    },
    scaleParam: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scaleText: {
        fontSize: 22,
        color: Colors.white
    },
    totalContainer: {
        backgroundColor: Colors.support,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 16
    },
    totalContainerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    totalContainerRowText: {
        color: Colors.white,
        fontSize: 22
    }
})
