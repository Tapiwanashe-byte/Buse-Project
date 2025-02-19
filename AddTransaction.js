import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddTransaction = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTransaction = async () => {
    await axios.post('http://localhost:3000/transactions', { date, amount, description });
    navigation.goBack();
  };

  return (
    <View>
      <Text>Date:</Text>
      <TextInput value={date} onChangeText={setDate} />
      <Text>Amount:</Text>
      <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

export default AddTransaction;
