import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarItemAssistido(itemLista) {
  try {
    const lista = await getLista();
    lista.push(itemLista);

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("lista", jsonLista);
  } catch (e) {
    console.log(e)
  }
}

export async function getLista() {
  try{
    const dados = await AsyncStorage.getItem("lista")
    return dados ? JSON.parse(dados) : []
  } catch (e) {
    console.log(e)
  }
}
