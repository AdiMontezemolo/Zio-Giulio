// Este script se encarga de enviar el request POST para cargar un nuevo producto en la base de datos.
const { createApp } = Vue
createApp({
	data() {
		return {
			productos:[],
			url: 'https://ayelendimontezemolo.pythonanywhere.com/productos',
			error: false,
			cargando: true,
			/*atributos para el guardar los valores del formulario */
			id: 0,
			nombre: "",
			imagen: "",
			descripcion: "",
		}
	},
	methods: {
		fetchData(url) {
			fetch(url)
			.then(response => response.json())
			.then(data => {
				this.productos = data;
				this.cargando = false
			})
			.catch(err => {
				console.error(err);
				this.error = true
			})
		},
		eliminar(producto) {
			const url = this.url + '/' + producto;
			var options = {
				method: 'DELETE',
			}
			fetch(url, options)
			.then(res => res.text()) // or res.json()
			.then(res => {
				location.reload();
			})
		},
		grabar() {
			let producto = {
				nombre: this.nombre,
				descripcion: this.descripcion,
				imagen: this.imagen
			}
			var options = {
				body: JSON.stringify(producto),
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				redirect: 'follow'
			}
			fetch(this.url, options)
			.then(function () {
				window.location.href = "admin.html";
			})
			.catch(err => {
				console.error(err);
				alert("Error, no se pudo añadir el producto ❌")
			})
		}
	},
	created() {
		this.fetchData(this.url)
	},
}).mount('#app')
