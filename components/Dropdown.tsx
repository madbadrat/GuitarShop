import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from './consts/tokens';
import DropdownIcon from '@/assets/icons/dropdown-icon';

interface DropdownMenuComponentProps {
    onSelect?: (value: string) => void;
}

const DropdownMenuComponent: React.FC<DropdownMenuComponentProps> = ({ onSelect }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const data = [
        { label: '1 громкость, 1 тон, 3 позиции', value: '113' },
        { label: '1 громкость, 1 тон, 5 позиций', value: '115' },
        { label: '1 громкость, 1 тон, 3 позиции, пуш-пулл отсечки', value: '113pp' }
    ];

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleSelect = (item: { label: string; value: string }) => {
        setSelectedItem(item.label);
        setDropdownVisible(false);
        if (onSelect) {
            onSelect(item.value);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
                <Text style={styles.selectedItemText}>
                    {selectedItem || 'Выберите элемент'}
                </Text>
                <DropdownIcon />
            </TouchableOpacity>

            {isDropdownVisible && (
                <View style={styles.dropdownMenu}>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={styles.dropdownItem}
                            onPress={() => handleSelect(item)}
                        >
                            <Text style={styles.itemText}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    dropdown: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: Colors.button,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedItemText: {
        color: Colors.white,
        fontSize: 16,
    },
    dropdownMenu: {
        position: 'absolute',
        width: Dimensions.get('window').width - 40,
        borderRadius: 5,
        backgroundColor: Colors.support,
        zIndex: 1,
    },
    dropdownItem: {
        padding: 10,
    },
    itemText: {
        fontSize: 16,
        color: Colors.white
    },
});

export default DropdownMenuComponent;
