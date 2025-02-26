UI.prototype.loadAllCars = function (cars) {
    const carList = document.getElementById("cars");
    cars.forEach(function (car) {
        carList.innerHTML += `
            <tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id="delete-car" class="btn btn-danger">Aracı Sil</a></td>
            </tr>
        `;
    });
} 