import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from './consts/tokens';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const { width, height } = Dimensions.get('window');

    const renderItem = ({ item, index }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => setSelectedIndex(index)}
                activeOpacity={0.7}
            >
                <Image
                    source={item.source}
                    style={[
                        { width: width - 80, height: 250, borderRadius: 50, marginRight: 16 },
                        selectedIndex === index ? { borderWidth: 5, borderColor: Colors.active } : {}
                    ]}
                />
            </TouchableOpacity>

            <View style={styles.captionContainer}>
                <Text style={styles.captionText}>{item.caption}</Text>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={images}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                pagingEnabled
                onScroll={(e) => {
                    const index = Math.floor(e.nativeEvent.contentOffset.x / (width - 40));
                    setCurrentIndex(index);
                }}
                contentContainerStyle={{
                    alignItems: 'center',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    captionContainer: {
        position: 'absolute',
        bottom: 10,
        left: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    captionText: {
        color: 'white',
        fontSize: 14,
    },
});

export default Carousel;
