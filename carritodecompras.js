///Carritoo de compras Pre entrega 3 Nahuel Martinez Cortes

const botonCargar = document.getElementById("cargaItem");

botonCargar.addEventListener('click', cargarUnItem)


let carrito = []

function traerUnItemDelLocalStorage()
{
  carrito = JSON.parse(localStorage.getItem('carrito'));
  if (carrito === null)
      carrito = []
  mostrarItemsCarritoV2(carrito);
}

function cargarUnItem()
{
    let articulo = new Item();
    articulo.nombre = prompt("Nombre del articulo deseado")
    articulo.marca = prompt("Marca del articulo deseado")
    articulo.precio = parseFloat(prompt("Precio del articuloo deseado"))
    articulo.cantidad = parseInt(prompt("Cantidad de articulo deseado"))

    carrito.push(articulo);
    localStorage.setItem('carrito',JSON.stringify(carrito))

    mostrarItemsCarritoV2(carrito);
}

function mostrarItemsCarrito(items)
{
    let tabla = document.querySelector("#items")
    let counter = 1
    tabla.innerHTML = ''

   items.forEach((elemento) => {
       tabla.innerHTML += `
                        <tr>
                           <th scope="row">${counter} </th>
                           <td> ${elemento.nombre} </td>
                           <td> ${elemento.marca} </td>
                           <td> ${elemento.cantidad} </td>
                           <td> ${elemento.precio} </td>
                        </tr>`
                        counter++
   });
}


function mostrarItemsCarritoV2(items)
{
 let tabla = document.getElementById('items')
 let counter = 1
 tabla.innerHTML = '';
 items.forEach((elemento) => {
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.innerText = counter

    tr.appendChild(th);

    let td = document.createElement('td')
    td.innerText = elemento.nombre
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.marca
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.cantidad
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.precio
    tr.appendChild(td)

    tr.classList.add("Eliminar")
    tabla.appendChild(tr)
    
    counter++
})

}

traerUnItemDelLocalStorage();

