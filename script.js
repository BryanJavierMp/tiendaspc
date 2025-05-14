function buscarProducto() {
        const termino = document.getElementById("busqueda").value.toLowerCase();
        const categorias = document.querySelectorAll(".category-card");
        let encontrado = false;

        categorias.forEach(cat => {
        const texto = cat.textContent.toLowerCase();
        if (texto.includes(termino)) {
            cat.style.display = "block";
            encontrado = true;
        } else {
            cat.style.display = "none";
        }
        });

        if (!encontrado) {
        alert("No se encontraron resultados para: " + termino);
        }
    }