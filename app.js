/* =========================================================
MONITORING STOCK CUSTOMER
FINAL REAL-PROCESSED APP.JS (COMPATIBLE WITH SHEETJS)
========================================================= */ 

let selectedCustomer = null;
const STORAGE_KEY = "stockData"; 

/* =========================================================
HELPER ELEMENT
========================================================= */
function el(id) {
return document.getElementById(id);
} 

/* =========================================================
ELEMENT MATCHING (HTML IDENTICAL IDENTIFIERS)
========================================================= */
const customerSearch = el("customerSearch");
const customerList = el("customerList"); 

const selectedCustomerBox = el("selectedCustomer");
const selectedCustomerName = el("selectedCustomerName");
const selectedCustomerCode = el("selectedCustomerCode");
const selectedCustomerAddress = el("selectedCustomerAddress");
const selectedCustomerCity = el("selectedCustomerCity"); 

const product = el("product");
const stock = el("stock");
const stockMinimum = el("stockMinimum");
const stockStatus = el("stockStatus");
const note = el("note");
const visitDate = el("visitDate"); 

const historyList = el("historyList"); 

/* =========================================================
AMBIL DATA MASTER CUSTOMER
========================================================= */
function getCustomers() {
if (typeof customers !== "undefined" && Array.isArray(customers)) {
return customers;
}
return [];
} 

/* =========================================================
AMBIL DATA MONITORING DARI LOCALSTORAGE
========================================================= */
function getStockData() {
try {
const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
return Array.isArray(data) ? data : [];
} catch (error) {
console.error("Gagal membaca data monitoring:", error);
return [];
}
} 

/* =========================================================
SIMPAN DATA MONITORING KE LOCALSTORAGE
========================================================= */
function setStockData(data) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
renderHistory();
calculateDashboard();
} 

/* =========================================================
SET TANGGAL HARI INI SECARA OTOMATIS
========================================================= */
function setToday() {
if (!visitDate) return;
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
visitDate.value = \${year}-month-{day};
} 

/* =========================================================
SISTEM LIVE INDIKATOR STATUS STOCK
========================================================= */
if (stock && stockMinimum && stockStatus) {
[stock, stockMinimum].forEach(element => {
element.addEventListener("input", function() {
const statusObj = getStockStatus(stock.value, stockMinimum.value);
stockStatus.value = statusObj.text;
});
});
} 

function getStockStatus(stockValue, minimumValue) {
const s = Number(stockValue) || 0;
const m = Number(minimumValue) || 0; 

if (s === 0) {
return { text: "Kosong (🚨 Critical)", class: "status-critical" };
} else if (s < m) {
return { text: "Kurang (⚠️ Warning)", class: "status-warning" };
} else if (s === m) {
return { text: "Aman (Pas)", class: "status-safe" };
} else {
return { text: "Melimpah (✨ Good)", class: "status-good" };
}
} 

/* =========================================================
SISTEM INTERAKTIF PENCARIAN CUSTOMER
========================================================= */
if (customerSearch) {
customerSearch.addEventListener("input", function () {
const keyword = this.value.toLowerCase().trim(); 

if (!keyword) {
    customerList.innerHTML = "";
    customerList.classList.remove("show");
    return;
}

const customerData = getCustomers();
const results = customerData.filter(customer => {
    const kode = String(customer.kode || "").toLowerCase();
    const nama = String(customer.nama || "").toLowerCase();
    const kota = String(customer.kota || "").toLowerCase();

    return (
        kode.includes(keyword) ||
        nama.includes(keyword) ||
        kota.includes(keyword)
    );
}).slice(0, 30);

customerList.innerHTML = "";

if (results.length === 0) {
    customerList.innerHTML = `
`;
customerList.classList.add("show");
return;
} 

results.forEach(customer => {
const item = document.createElement("div");
item.className = "customer-item";
item.style.padding = "10px";
item.style.cursor = "pointer";
item.style.borderBottom = "1px solid #f1f5f9"; 

item.innerHTML = `
