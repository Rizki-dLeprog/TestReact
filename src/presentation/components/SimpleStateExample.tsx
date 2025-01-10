import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useWelcome } from '../hooks/useWelcome';

const SimpleStateExample: React.FC = () => {
  const [name, setName] = useState<string>('');
  const { welcomeMessage } = useWelcome(name);

  const handleSubmit = () => {
    Alert.alert(welcomeMessage);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Masukkan nama Anda"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {name ? <Text style={styles.text}>Nama Anda: {name}</Text> : <Text style={styles.text}>Silakan masukkan nama.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  text: { marginTop: 20, fontSize: 16 },
});

export default SimpleStateExample;
