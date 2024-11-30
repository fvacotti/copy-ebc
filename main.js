// Seleccionar todos los botones de copiar
const copyButtons = document.querySelectorAll('.copy-btn');

// Agregar evento de clic a cada botón
copyButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Encontrar el contenedor padre del botón
		const card = button.parentElement;

		// Seleccionar todos los elementos <p> dentro del contenedor
		const paragraphs = card.querySelectorAll('p');

		// Extraer el texto limpio de los párrafos
		const textToCopy = Array.from(paragraphs)
			.map(p => p.textContent.replace(/\s+/g, ' ').trim()) // Reemplazar saltos y espacios múltiples por un único espacio
			.join('\n'); // Unir los textos con saltos de línea

		// Usar la API del portapapeles para copiar
		navigator.clipboard.writeText(textToCopy)
			.then(() => {
				alert('Contenido copiado al portapapeles');
			})
			.catch(err => {
				console.error('Error al copiar:', err);
			});
	});
});