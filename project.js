const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");
// UI object Başlatma

const ui = new UI();
const storage = new Storage();

// Tüm eventleri yükleme
eventListeners(); // 'addEventListener' yerine 'eventListeners' düzeltildi

function eventListeners() {
    form.addEventListener("submit", addCar);
    document.addEventListener("DOMContentLoaded", function() { // 'DomContentLoaded' düzeltildi
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    });
    cardbody.addEventListener("click", deleteCar); // 'deletecar' düzeltildi
    clear.addEventListener("click", clearAllCars); // 'clearAllcars' düzeltildi
}

function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        ui.displayMessages("tüm alanları doldurun...", "danger");
    } else {
        // yeni araç
        const newCar = new Car(title, price, url);
        ui.addCarToUI(newCar); // arayüze araç ekleme
        storage.addCarToStorage(newCar);
        ui.displayMessages("araç başarıyla eklendi", "success");
    }
    ui.clearInputs(titleElement, urlElement, priceElement, url);

    e.preventDefault();
}

function deleteCar(e) {
    if (e.target.id === "delete-car") {
        ui.deleteCarFromUI(e.target);
        storage.deleteCarFromStorage(
            e.target.parentElement.previousElementSibling.previousElementSibling
                .textContent
        );
        ui.displayMessages("silme işlemi başarıyla gerçekleşti", "success");
    }
}

function clearAllCars() {
    if (confirm("tüm araçlar silinecek emin misiniz?")) {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }
} 