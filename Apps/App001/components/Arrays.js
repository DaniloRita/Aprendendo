import {Text} from "react-native"
function Arrays({itens}){
return(
    <>
    <Text> Listas de pesssoas que eu gosto</Text>
        {
        itens.map((item, index) => (<Text key={index} >{item} </Text>
    ))}
    </>
)}
export default Arrays