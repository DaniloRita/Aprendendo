import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { styles } from './Style/styles';
import Arrays from "./components/Arrays"
import ClicarBotao from './components/ClicarBotao';


export default function App() {
  const meusItens=["Danilo", "Rebeca","Francisco","Liane"]
  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your apps!</Text>      
        <ClicarBotao/>
        <Arrays itens={meusItens} />

        <StatusBar style="auto" />
      </View>
  );
}
