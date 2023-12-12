import AsyncStorage from "@react-native-async-storage/async-storage";

//ASSISTIDO
export async function salvarItemAssistido(itemLista) {
	try {
		const lista = await getListaAssistido();
		lista.push(itemLista);

		const jsonLista = JSON.stringify(lista);
		await AsyncStorage.setItem("lista", jsonLista);
	} catch (e) {
		console.log(e)
	}
}

export async function deletarItemAssistido(item) {
	const lista = await getListaAssistido();
	const listaNova = lista.filter((i) => i.id !== item.id);

	const jsonLista = JSON.stringify(listaNova);
	await AsyncStorage.setItem("lista", jsonLista);
}

export async function editarItemAssistido(item) {
	try {
		const lista = await getListaAssistido();
		let i = 0;
		for (; lista[i].id != item.id; i++) { }
		lista[i] = item;

		const jsonLista = JSON.stringify(lista);
		await AsyncStorage.setItem("lista", jsonLista);
	} catch (e) {
		console.log(e);
	}
}

export async function getListaAssistido() {
	try {
		const dados = await AsyncStorage.getItem("lista")
		return dados ? JSON.parse(dados) : []
	} catch (e) {
		console.log(e)
	}
}

// ASSISTIR
export async function salvarItemAssistir(itemLista) {
	try {
		const lista = await getListaAssistir();
		lista.push(itemLista);

		const jsonLista = JSON.stringify(lista);
		await AsyncStorage.setItem("listaAssistir", jsonLista);
	} catch (e) {
		console.log(e)
	}
}

export async function deletarItemAssistir(item) {
	const lista = await getListaAssistir();
	const listaNova = lista.filter((i) => i.id !== item.id);

	const jsonLista = JSON.stringify(listaNova);
	await AsyncStorage.setItem("listaAssistir", jsonLista);
}

export async function editarItemAssistir(item) {
	try {
		const lista = await getListaAssistir();
		let i = 0;
		for (; lista[i].id != item.id; i++) { }
		lista[i] = item;

		const jsonLista = JSON.stringify(lista);
		await AsyncStorage.setItem("listaAssistir", jsonLista);
	} catch (e) {
		console.log(e);
	}
}

export async function getListaAssistir() {
	try {
		const dados = await AsyncStorage.getItem("listaAssistir")
		console.log(dados)
		return dados ? JSON.parse(dados) : []
	} catch (e) {
		console.log(e)
	}
}