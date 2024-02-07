import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StockCard = ({ data }) => {
    if (!data) return null; // Não renderiza se não houver dados
  
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(value);
      };

    return (
      <View style={styles.card}>
        <Text style={styles.symbol}>{data.symbol}</Text>
        <Text style={styles.text}>Abertura: {formatCurrency(data.open)}</Text>
        <Text style={styles.text}>Alta: {formatCurrency(data.high)}</Text>
        <Text style={styles.text}>Baixa: {formatCurrency(data.low)}</Text>
        <Text style={styles.text}>Preço Atual: {formatCurrency(data.price)}</Text>
        <Text style={styles.text}>Volume: {data.volume}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    symbol: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    text: {
      fontSize: 16,
      marginBottom: 4,
    },
  });
  
  export default StockCard;