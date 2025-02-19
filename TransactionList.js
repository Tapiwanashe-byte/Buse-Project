import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const TransactionList = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await axios.get('http://localhost:3000/transactions');
    setTransactions(response.data);
  };

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.date} - ${item.amount} - {item.description}</Text>
          </View>
        )}
      />
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
    </View>
  );
};

export default TransactionList;
