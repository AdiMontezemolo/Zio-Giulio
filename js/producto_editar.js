console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
	data() {
		return {
			id: 0,
			nombre: "",
			imagen: "",
			descripcion: "",
			url: 'https://ayelendimontezemolo.pythonanywhere.com/productos/'+id,
		}
	},
	methods: {
		fetchData(url) {
			fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				this.id = data.id
				this.nombre = data.nombre;
				this.imagen = data.imagen
				this.descripcion = data.descripcion
			})
			.catch(err => {
				console.error(err);
				this.error=true
			})
		},
		modificar() {
			let producto = {
				nombre: this.nombre,
				imagen: this.imagen,
				descripcion: this.descripcion,
			}
			var options = {
				body: JSON.stringify(producto),
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				redirect: 'follow'
			}
			fetch(this.url, options)
			.then(function () {
				window.location.href = "admin.html";
			})
			.catch(err => {
				console.error(err);
				alert("Error, no se pudo modificar el producto ❌")
			})
		}
	},
	created() {
		this.fetchData(this.url)
	},
}).mount('#app')
