import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarItemAssistidos(itemLista) {
	try {
		const lista = await getLista();
		lista.push(itemLista);

		const jsonLista = JSON.stringify(lista);
		await AsyncStorage.setItem("lista", jsonLista);
	} catch (e) {
		console.log(e)
	}
}

export async function deletarItemAssistido(item) {
	const lista = await getLista();
	const listaNova = lista.filter((i) => i.id !== item.id);

	const jsonLista = JSON.stringify(listaNova);
	await AsyncStorage.setItem("lista", jsonLista);
}

export async function editarItemAssistido(item) {
	try {
		const lista = await getLista();
		let i = 0;
		for (; lista[i].id != item.id; i++) { }
		lista[i] = item;

		const jsonLista = JSON.stringify(lista);
		await AsyncStorage.setItem("lista", jsonLista);
	} catch (e) {
		console.log(e);
	}
}

export async function getLista() {
	try {
		const dados = await AsyncStorage.getItem("lista")
		return dados ? JSON.parse(dados) : []
	} catch (e) {
		console.log(e)
	}
}