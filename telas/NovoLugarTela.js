import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native'
import Cores from '../constantes/Cores'
import React, {useState} from 'react'

//single source of truth

const NovoLugarTela = () => {
  const [novoLugar, setNovoLugar] = useState('')
  const novoLugarAlterado = (textoDigitado) => {
    setNovoLugar(textoDigitado)
  }
  const adicionarLugar = () => {
    console.log(`Adicionando: ${novoLugar}`)
  }
  return (
    <ScrollView>
      <View style={styles.form}>
      <Text style={styles.titulo}>Novo Lugar</Text>
      <TextInput style={styles.textInput} onChangeText={novoLugarAlterado} value={novoLugar}/>
      <Button title="salvar lugar" color={Cores.primary} onPress={adicionarLugar}/>
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    margin: 40
  },
  titulo: {
    fontSize: 18,
    marginBottom: 8
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 8
  }

})