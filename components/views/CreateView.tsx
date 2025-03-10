import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useCreateViewModel } from '@/viewmodels/useCreateViewModel';
import { formsImages, pickupsImages, markersImages } from '@/models/CreateModels';
import Carousel from '@/components/Carousel';
import DropdownMenuComponent from '../Dropdown';
import { Button } from '../Button';
import { Colors } from '../consts/tokens';
import { Styles } from '../consts/styles';

export function CreateView() {
    const { config, updateScale, updateWiring, submitOrder } = useCreateViewModel();

    return (
        <View style={Styles.container}>
            <ScrollView>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Форма</Text>
                    <Carousel images={formsImages} />
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Мензура</Text>
                    <View style={styles.scaleChanger}>
                        {['25.5"', '27"', '25.5"-27"'].map((scale) => (
                            <View key={scale} style={styles.scaleParam}>
                                <RadioButton
                                    value={scale}
                                    status={config.scale === scale ? 'checked' : 'unchecked'}
                                    onPress={() => updateScale(scale)}
                                />
                                <Text style={styles.scaleText}>{scale}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Звукосниматели</Text>
                    <Carousel images={pickupsImages} />
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Инкрустация</Text>
                    <Carousel images={markersImages} />
                </View>
                <View style={styles.block}>
                    <Text style={styles.headerText}>Распайка</Text>
                    <DropdownMenuComponent onSelect={updateWiring} />
                </View>
                <View style={styles.totalContainer}>
                    <View style={styles.totalContainerRow}>
                        <Text style={styles.totalContainerRowText}>Итого: 166456 р.</Text>
                        <View style={styles.buttonContainer}>
                            <Button label="Оформить заказ" onPress={submitOrder} targetScreen={"/order"} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: 32,
        marginBottom: 8
    },
    block: {
        alignItems: 'center',
        backgroundColor: Colors.support,
        borderRadius: 50,
        padding: 16,
        marginBottom: 16
    },
    scaleChanger: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
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
    totalText: {
        color: Colors.white,
        fontSize: 22
    },
    totalContainerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    totalContainerRowText: {
        color: Colors.white,
        fontSize: 22
    },

});
