import { useState } from "react"
import { View, Text, Button } from "react-native"
import {styles} from "./ClicarBotaoStyle"

function ClicarBotao(){
    const [mensagem, setMensagem] = useState("Ainda não clicaste");

    function Clicar(){
        setMensagem("Botão clicado...")
    }
    return( 
        <View>
            <Text style={styles.botao} >{mensagem} </Text>
            <Button onPress={Clicar} title="Clique Aqui" style={styles.botao} >Clique aqui</Button>
        </View>

    )
}
export default ClicarBotao