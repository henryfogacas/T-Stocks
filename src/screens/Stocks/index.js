import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import StockCard from './StocksComponents/StockCard';
import { fetchStock } from '../../api/fetchStock';

const Stocks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [stockData, setStockData] = useState(null);

    const handleSearch = async () => {
        if (!searchTerm) {
            Alert.alert('Erro', 'Por favor, insira um símbolo de ação.');
            return;
        }
        const data = await fetchStock(searchTerm.toUpperCase());
        if (data) {
            setStockData(data);
        } else {
            Alert.alert('Erro', 'Não foi possível encontrar dados para esta ação.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Fill in with a stock symbol (ex: AAPL)"
            />
            <TouchableOpacity onPress={handleSearch} >
                <Text>Search</Text>
            </TouchableOpacity>
            <ScrollView>
                {stockData && <StockCard data={stockData} />}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    searchInput: {
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 8
    },
});

export default Stocks;
