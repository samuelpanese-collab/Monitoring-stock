/* =========================================================
   MONITORING STOCK CUSTOMER
   FINAL APP.JS
   =========================================================
   FITUR:
   - Search Customer
   - Pilih Customer
   - Monitoring Stock
   - Status Stock
   - Simpan LocalStorage
   - Riwayat Monitoring
   - Dashboard
   - Export Excel
   - Detail Monitoring
   - Summary Customer
   - Summary per Kota
   ========================================================= */


/* =========================================================
   GLOBAL
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
   ELEMENT
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
   AMBIL DATA CUSTOMER
   ========================================================= */

function getCustomers() {

    if (
        typeof customers !== "undefined" &&
        Array.isArray(customers)
    ) {
        return customers;
    }

    return [];
}


/* =========================================================
   AMBIL DATA MONITORING
   ========================================================= */

function getStockData() {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "[]"
            );

        return Array.isArray(data) ? data : [];

    } catch (error) {

        console.error(
            "Gagal membaca data monitoring:",
            error
        );

        return [];

    }

}


/* =========================================================
   SIMPAN DATA MONITORING
   ========================================================= */

function setStockData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* =========================================================
   FIREBASE SYNC (ONLINE, REAL-TIME, MULTI PERANGKAT)
   =========================================================
   Kalau firebase-config.js sudah diisi konfigurasi project
   Firebase Anda, data monitoring akan otomatis tersinkron
   secara real-time ke semua HP yang membuka aplikasi ini.

   Kalau firebase-config.js BELUM diisi, aplikasi tetap
   berjalan seperti biasa (localStorage saja, per-perangkat).
   ========================================================= */

let db = null;
let firebaseReady = false;
let firebaseAppInitialized = false;


function isFirebaseConfigured() {

    return (
        typeof firebase !== "undefined" &&
        window.firebaseConfig &&
        window.firebaseConfig.apiKey &&
        window.firebaseConfig.apiKey.indexOf("ISI_") !== 0
    );

}


function ensureFirebaseApp() {

    if (firebaseAppInitialized) return true;

    if (!isFirebaseConfigured()) return false;

    try {

        firebase.initializeApp(window.firebaseConfig);
        firebaseAppInitialized = true;
        return true;

    } catch (error) {

        console.error(
            "Gagal inisialisasi Firebase:",
            error
        );

        return false;

    }

}


/* =========================================================
   LOGIN / LOGOUT (FIREBASE AUTHENTICATION)
   =========================================================
   Akun dibuat manual oleh admin lewat Firebase Console
   (Authentication > Users > Add user). Tidak ada
   pendaftaran akun sendiri dari aplikasi ini, supaya
   data monitoring tidak sembarangan diakses orang lain.
   ========================================================= */

function loginUser() {

    const emailInput = el("loginEmail");
    const passwordInput = el("loginPassword");
    const errorBox = el("loginError");

    if (!emailInput || !passwordInput) return;

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (errorBox) {
        errorBox.textContent = "";
        errorBox.classList.add("hidden");
    }

    if (!email || !password) {

        if (errorBox) {
            errorBox.textContent = "Email dan password wajib diisi.";
            errorBox.classList.remove("hidden");
        }

        return;

    }

    const loginButton = el("loginButton");
    if (loginButton) loginButton.disabled = true;

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {

            if (errorBox) {

                errorBox.textContent =
                    "Login gagal. Periksa kembali email/password Anda.";

                errorBox.classList.remove("hidden");

            }

            console.error("Login error:", error);

        })
        .finally(function () {

            if (loginButton) loginButton.disabled = false;

        });

}


function logoutUser() {

    if (typeof firebase === "undefined") return;

    firebase.auth().signOut();

}


function bootstrapApp() {

    const loginScreen = el("loginScreen");
    const appRoot = document.querySelector(".app");

    if (!isFirebaseConfigured()) {

        /* Mode offline biasa (tanpa cloud, tanpa login) */

        if (loginScreen) loginScreen.classList.add("hidden");
        if (appRoot) appRoot.classList.remove("hidden");

        initializeApp();

        return;

    }

    if (!ensureFirebaseApp()) return;

    firebase.auth().onAuthStateChanged(function (user) {

        const userInfo = el("userInfo");

        if (user) {

            if (loginScreen) loginScreen.classList.add("hidden");
            if (appRoot) appRoot.classList.remove("hidden");
            if (userInfo) userInfo.classList.remove("hidden");

            const loggedInUser = el("loggedInUser");
            if (loggedInUser) loggedInUser.textContent = user.email;

            initFirebaseSync();
            initializeApp();

        } else {

            if (loginScreen) loginScreen.classList.remove("hidden");
            if (appRoot) appRoot.classList.add("hidden");
            if (userInfo) userInfo.classList.add("hidden");

        }

    });

}


function initFirebaseSync() {

    if (firebaseReady) return;

    if (!ensureFirebaseApp()) {

        console.log(
            "Firebase belum dikonfigurasi. " +
            "Aplikasi berjalan mode lokal (localStorage saja, tidak sinkron online)."
        );

        return;

    }

    try {

        db = firebase.firestore();

        db.enablePersistence({ synchronizeTabs: true })
            .catch(function (err) {

                console.log(
                    "Firestore offline persistence tidak aktif:",
                    err.code
                );

            });

        firebaseReady = true;

        db.collection("monitoring")
            .orderBy("createdAt", "desc")
            .onSnapshot(
                function (snapshot) {

                    const records = snapshot.docs.map(
                        function (docSnap) {

                            const item = docSnap.data();
                            item.id = docSnap.id;
                            return item;

                        }
                    );

                    localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify(records)
                    );

                    loadHistory();
                    updateDashboard();

                },
                function (error) {

                    console.error(
                        "Sinkronisasi Firestore gagal:",
                        error
                    );

                }
            );

    } catch (error) {

        console.error(
            "Gagal inisialisasi Firebase:",
            error
        );

    }

}


/* =========================================================
   TANGGAL HARI INI
   ========================================================= */

function setToday() {

    if (!visitDate) return;

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    visitDate.value =
        `${year}-${month}-${day}`;

}


/* =========================================================
   SEARCH CUSTOMER
   ========================================================= */

if (customerSearch) {

    customerSearch.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();

            if (!keyword) {

                customerList.innerHTML = "";

                customerList.classList.remove(
                    "show"
                );

                return;
            }


            const customerData =
                getCustomers();


            const results =
                customerData
                    .filter(customer => {

                        const kode =
                            String(
                                customer.kode || ""
                            ).toLowerCase();

                        const nama =
                            String(
                                customer.nama || ""
                            ).toLowerCase();

                        const kota =
                            String(
                                customer.kota || ""
                            ).toLowerCase();

                        return (
                            kode.includes(keyword) ||
                            nama.includes(keyword) ||
                            kota.includes(keyword)
                        );

                    })
                    .slice(0, 30);


            customerList.innerHTML = "";


            if (results.length === 0) {

                customerList.innerHTML = `

                    <div class="customer-item">

                        <strong>
                            Customer tidak ditemukan
                        </strong>

                        <small>
                            Coba cari berdasarkan nama,
                            kode outlet atau kota
                        </small>

                    </div>

                `;

                customerList.classList.add(
                    "show"
                );

                return;
            }


            results.forEach(customer => {

                const item =
                    document.createElement("div");


                item.className =
                    "customer-item";


                item.innerHTML = `

                    <strong>
                        ${escapeHTML(customer.nama)}
                    </strong>

                    <span>
                        ${escapeHTML(customer.kode)}
                    </span>

                    <small>
                        ${escapeHTML(customer.kota)}
                    </small>

                `;


                item.addEventListener(
                    "click",
                    function () {

                        selectCustomer(customer);

                    }
                );


                customerList.appendChild(item);

            });


            customerList.classList.add(
                "show"
            );

        }
    );

}


/* =========================================================
   SELECT CUSTOMER
   ========================================================= */

function selectCustomer(customer) {

    selectedCustomer =
        customer;


    if (selectedCustomerName) {

        selectedCustomerName.textContent =
            customer.nama || "-";

    }


    if (selectedCustomerCode) {

        selectedCustomerCode.textContent =
            customer.kode || "-";

    }


    if (selectedCustomerAddress) {

        selectedCustomerAddress.textContent =
            customer.alamat || "-";

    }


    if (selectedCustomerCity) {

        selectedCustomerCity.textContent =
            `${customer.kota || "-"}, ${customer.provinsi || "-"}`;

    }


    if (selectedCustomerBox) {

        selectedCustomerBox.classList.remove(
            "hidden"
        );

    }


    if (customerSearch) {

        customerSearch.value =
            customer.nama || "";

    }


    if (customerList) {

        customerList.innerHTML = "";

        customerList.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   CLEAR CUSTOMER
   ========================================================= */

function clearCustomer() {

    selectedCustomer =
        null;


    if (customerSearch) {

        customerSearch.value =
            "";

        customerSearch.focus();

    }


    if (selectedCustomerBox) {

        selectedCustomerBox.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   STATUS STOCK
   ========================================================= */

function getStockStatus(
    stockValue,
    minimumValue
) {

    stockValue =
        Number(stockValue || 0);

    minimumValue =
        Number(minimumValue || 0);


    if (stockValue === 0) {

        return "STOCK KOSONG";

    }


    if (stockValue <= minimumValue) {

        return "STOCK MENIPIS";

    }


    return "STOCK AMAN";

}


/* =========================================================
   UPDATE STATUS STOCK
   ========================================================= */

function updateStockStatus() {

    if (!stockStatus) return;


    const stockValue =
        Number(
            stock ? stock.value : 0
        );


    const minimumValue =
        Number(
            stockMinimum ?
            stockMinimum.value :
            0
        );


    stockStatus.className =
        "stock-status";


    if (
        !stock ||
        stock.value === ""
    ) {

        stockStatus.innerHTML = `

            <div class="status-icon">
                📦
            </div>

            <div>

                <small>
                    Status Stock
                </small>

                <strong>
                    Belum Diisi
                </strong>

            </div>

        `;

        return;

    }


    const status =
        getStockStatus(
            stockValue,
            minimumValue
        );


    if (status === "STOCK KOSONG") {

        stockStatus.classList.add(
            "status-danger"
        );


        stockStatus.innerHTML = `

            <div class="status-icon">
                🔴
            </div>

            <div>

                <small>
                    Status Stock
                </small>

                <strong>
                    STOCK KOSONG
                </strong>

            </div>

        `;

        return;

    }


    if (status === "STOCK MENIPIS") {

        stockStatus.classList.add(
            "status-warning"
        );


        stockStatus.innerHTML = `

            <div class="status-icon">
                🟡
            </div>

            <div>

                <small>
                    Status Stock
                </small>

                <strong>
                    STOCK MENIPIS
                </strong>

            </div>

        `;

        return;

    }


    stockStatus.classList.add(
        "status-safe"
    );


    stockStatus.innerHTML = `

        <div class="status-icon">
            🟢
        </div>

        <div>

            <small>
                Status Stock
            </small>

            <strong>
                STOCK AMAN
            </strong>

        </div>

    `;

}


/* =========================================================
   EVENT STOCK
   ========================================================= */

if (stock) {

    stock.addEventListener(
        "input",
        updateStockStatus
    );

}


if (stockMinimum) {

    stockMinimum.addEventListener(
        "input",
        updateStockStatus
    );

}


/* =========================================================
   SAVE STOCK
   ========================================================= */

function saveStock() {

    /* CUSTOMER */

    if (!selectedCustomer) {

        alert(
            "Silakan pilih customer terlebih dahulu."
        );

        if (customerSearch) {

            customerSearch.focus();

        }

        return;

    }


    /* PRODUK */

    if (
        !product ||
        !product.value
    ) {

        alert(
            "Silakan pilih produk."
        );

        if (product) {

            product.focus();

        }

        return;

    }


    /* STOCK */

    if (
        !stock ||
        stock.value === ""
    ) {

        alert(
            "Silakan isi jumlah stock."
        );

        if (stock) {

            stock.focus();

        }

        return;

    }


    const stockValue =
        Number(stock.value);


    const minimumValue =
        Number(
            stockMinimum ?
            stockMinimum.value :
            0
        );


    if (stockValue < 0) {

        alert(
            "Jumlah stock tidak boleh negatif."
        );

        stock.focus();

        return;

    }


    const status =
        getStockStatus(
            stockValue,
            minimumValue
        );


    /* DATA */

    const record = {

        id:
            Date.now(),

        tanggal:
            visitDate ?
            visitDate.value :
            "",

        kode:
            selectedCustomer.kode || "",

        customer:
            selectedCustomer.nama || "",

        alamat:
            selectedCustomer.alamat || "",

        kota:
            selectedCustomer.kota || "",

        provinsi:
            selectedCustomer.provinsi || "",

        produk:
            product.value,

        stock:
            stockValue,

        minimum:
            minimumValue,

        status:
            status,

        catatan:
            note ?
            note.value.trim() :
            ""

    };


    /* SIMPAN */

    if (firebaseReady && db) {

        record.createdAt =
            new Date().toISOString();

        db.collection("monitoring")
            .add(record)
            .catch(function (error) {

                console.error(
                    "Gagal menyimpan ke cloud:",
                    error
                );

                alert(
                    "Gagal mengirim data ke cloud.\n" +
                    "Periksa koneksi internet Anda, atau data " +
                    "akan otomatis terkirim saat online kembali."
                );

            });

    } else {

        const data =
            getStockData();

        data.unshift(record);

        setStockData(data);

    }


    alert(
        "Monitoring stock berhasil disimpan."
    );


    resetForm();

    loadHistory();

    updateDashboard();

}


/* =========================================================
   RESET FORM
   ========================================================= */

function resetForm() {

    selectedCustomer =
        null;


    if (customerSearch) {

        customerSearch.value =
            "";

    }


    if (selectedCustomerBox) {

        selectedCustomerBox.classList.add(
            "hidden"
        );

    }


    if (product) {

        product.value =
            "";

    }


    if (stock) {

        stock.value =
            "";

    }


    if (stockMinimum) {

        stockMinimum.value =
            "5";

    }


    if (note) {

        note.value =
            "";

    }


    setToday();

    updateStockStatus();

}


/* =========================================================
   LOAD HISTORY
   ========================================================= */

function loadHistory() {

    if (!historyList) return;


    const data =
        getStockData();


    historyList.innerHTML =
        "";


    if (data.length === 0) {

        historyList.innerHTML = `

            <div class="empty-history">

                <div>
                    📋
                </div>

                <p>
                    Belum ada data monitoring
                </p>

            </div>

        `;

        return;

    }


    data.forEach(record => {

        const card =
            document.createElement("div");


        card.className =
            "history-card";


        let badgeClass =
            "safe";


        let badgeIcon =
            "🟢";


        if (
            record.status ===
            "STOCK MENIPIS"
        ) {

            badgeClass =
                "warning";

            badgeIcon =
                "🟡";

        }


        if (
            record.status ===
            "STOCK KOSONG"
        ) {

            badgeClass =
                "danger";

            badgeIcon =
                "🔴";

        }


        card.innerHTML = `

            <div class="history-top">

                <div class="history-customer">

                    <strong>
                        ${escapeHTML(record.customer)}
                    </strong>

                    <span>
                        ${escapeHTML(record.kode)}
                    </span>

                </div>

                <div class="history-date">

                    ${formatDate(record.tanggal)}

                </div>

            </div>


            <div class="history-details">

                <div class="history-box">

                    <small>
                        Produk
                    </small>

                    <strong>
                        ${escapeHTML(record.produk)}
                    </strong>

                </div>


                <div class="history-box">

                    <small>
                        Stock
                    </small>

                    <strong>
                        ${record.stock} Karton
                    </strong>

                </div>


                <div class="history-box">

                    <small>
                        Minimum
                    </small>

                    <strong>
                        ${record.minimum} Karton
                    </strong>

                </div>


                <div class="history-box">

                    <small>
                        Status
                    </small>

                    <span class="status-badge ${badgeClass}">

                        ${badgeIcon}

                        ${escapeHTML(record.status)}

                    </span>

                </div>

            </div>


            ${
                record.catatan
                ?
                `

                <div class="history-note">

                    📝
                    ${escapeHTML(record.catatan)}

                </div>

                `
                :
                ""
            }

        `;


        historyList.appendChild(card);

    });

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {

    const data =
        getStockData();


    const customerData =
        getCustomers();


    /* TOTAL CUSTOMER */

    const totalCustomer =
        el("totalCustomer");


    if (totalCustomer) {

        totalCustomer.textContent =
            customerData.length;

    }


    /* TOTAL MONITOR */

    const totalMonitor =
        el("totalMonitor");


    if (totalMonitor) {

        totalMonitor.textContent =
            data.length;

    }


    /* MENIPIS */

    const stockMenipis =
        el("stockMenipis");


    const menipis =
        data.filter(
            item =>
                item.status ===
                "STOCK MENIPIS"
        ).length;


    if (stockMenipis) {

        stockMenipis.textContent =
            menipis;

    }


    /* KOSONG */

    const stockKosong =
        el("stockKosong");


    const kosong =
        data.filter(
            item =>
                item.status ===
                "STOCK KOSONG"
        ).length;


    if (stockKosong) {

        stockKosong.textContent =
            kosong;

    }

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(dateString) {

    if (!dateString) {

        return "-";

    }


    const parts =
        String(dateString).split("-");


    if (parts.length !== 3) {

        return dateString;

    }


    return `${parts[2]}/${parts[1]}/${parts[0]}`;

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   HOME
   ========================================================= */

function showHome() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    setActiveNav(0);

}


/* =========================================================
   HISTORY
   ========================================================= */

function showHistory() {

    const history =
        document.querySelector(
            ".history-section"
        );


    if (history) {

        history.scrollIntoView({

            behavior: "smooth"

        });

    }


    setActiveNav(1);

}


/* =========================================================
   SUMMARY
   ========================================================= */

function showSummary() {

    const dashboard =
        document.querySelector(
            ".dashboard"
        );


    if (dashboard) {

        dashboard.scrollIntoView({

            behavior: "smooth"

        });

    }


    setActiveNav(2);

}


/* =========================================================
   ACTIVE NAV
   ========================================================= */

function setActiveNav(index) {

    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    if (navItems[index]) {

        navItems[index].classList.add(
            "active"
        );

    }

}


/* =========================================================
   CLICK OUTSIDE CUSTOMER
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            customerSearch &&
            customerList &&
            !customerSearch.contains(
                event.target
            ) &&
            !customerList.contains(
                event.target
            )
        ) {

            customerList.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   =========================================================
   EXPORT EXCEL
   =========================================================
   ========================================================= */

function exportExcel() {

    /* CEK LIBRARY */

    if (
        typeof XLSX === "undefined"
    ) {

        alert(
            "Excel belum bisa digunakan.\n\n" +
            "Pastikan library XLSX sudah dipasang " +
            "di index.html sebelum app.js."
        );

        return;

    }


    /* DATA */

    const data =
        getStockData();


    if (data.length === 0) {

        alert(
            "Belum ada data monitoring yang dapat diexport."
        );

        return;

    }


    /* WORKBOOK */

    const workbook =
        XLSX.utils.book_new();


    /* =====================================================
       SHEET 1
       DETAIL MONITORING
    ===================================================== */

    const detailRows = [

        [

            "No",

            "Tanggal",

            "Kode Outlet",

            "Nama Customer",

            "Alamat",

            "Kota",

            "Provinsi",

            "Produk",

            "Stock (Karton)",

            "Minimum Stock",

            "Status",

            "Catatan"

        ]

    ];


    data.forEach(
        (item, index) => {

            detailRows.push([

                index + 1,

                item.tanggal || "",

                item.kode || "",

                item.customer || "",

                item.alamat || "",

                item.kota || "",

                item.provinsi || "",

                item.produk || "",

                Number(
                    item.stock || 0
                ),

                Number(
                    item.minimum || 0
                ),

                item.status || "",

                item.catatan || ""

            ]);

        }
    );


    const wsDetail =
        XLSX.utils.aoa_to_sheet(
            detailRows
        );


    wsDetail["!cols"] = [

        { wch: 6 },

        { wch: 14 },

        { wch: 18 },

        { wch: 30 },

        { wch: 45 },

        { wch: 23 },

        { wch: 20 },

        { wch: 25 },

        { wch: 18 },

        { wch: 18 },

        { wch: 20 },

        { wch: 40 }

    ];


    wsDetail["!autofilter"] = {

        ref: wsDetail["!ref"]

    };


    wsDetail["!freeze"] = {

        xSplit: 0,

        ySplit: 1

    };


    XLSX.utils.book_append_sheet(

        workbook,

        wsDetail,

        "Detail Monitoring"

    );


    /* =====================================================
       SUMMARY CUSTOMER
    ===================================================== */

    const customerMap = {};


    data.forEach(item => {

        const kode =
            item.kode || "-";

        const produk =
            item.produk || "-";


        const key =
            `${kode}|||${produk}`;


        if (!customerMap[key]) {

            customerMap[key] = {

                kode: kode,

                customer:
                    item.customer || "",

                kota:
                    item.kota || "",

                produk:
                    produk,

                monitoring: 0,

                tanggalTerakhir:
                    "",

                stockTerakhir:
                    0,

                minimum:
                    0,

                status:
                    ""

            };

        }


        customerMap[key].monitoring++;


        const tanggalBaru =
            item.tanggal || "";


        const tanggalLama =
            customerMap[key]
                .tanggalTerakhir;


        if (
            !tanggalLama ||
            tanggalBaru >= tanggalLama
        ) {

            customerMap[key]
                .tanggalTerakhir =
                tanggalBaru;


            customerMap[key]
                .stockTerakhir =
                Number(
                    item.stock || 0
                );


            customerMap[key]
                .minimum =
                Number(
                    item.minimum || 0
                );


            customerMap[key]
                .status =
                item.status || "";

        }

    });


    const customerRows = [

        [

            "No",

            "Kode Outlet",

            "Nama Customer",

            "Kota",

            "Produk",

            "Jumlah Monitoring",

            "Tanggal Monitoring Terakhir",

            "Stock Terakhir",

            "Minimum Stock",

            "Status"

        ]

    ];


    Object.values(
        customerMap
    )
    .sort(
        (a, b) =>
            a.customer.localeCompare(
                b.customer
            )
    )
    .forEach(
        (item, index) => {

            customerRows.push([

                index + 1,

                item.kode,

                item.customer,

                item.kota,

                item.produk,

                item.monitoring,

                item.tanggalTerakhir,

                item.stockTerakhir,

                item.minimum,

                item.status

            ]);

        }
    );


    const wsCustomer =
        XLSX.utils.aoa_to_sheet(
            customerRows
        );


    wsCustomer["!cols"] = [

        { wch: 6 },

        { wch: 18 },

        { wch: 30 },

        { wch: 23 },

        { wch: 25 },

        { wch: 20 },

        { wch: 28 },

        { wch: 18 },

        { wch: 18 },

        { wch: 20 }

    ];


    wsCustomer["!autofilter"] = {

        ref: wsCustomer["!ref"]

    };


    wsCustomer["!freeze"] = {

        xSplit: 0,

        ySplit: 1

    };


    XLSX.utils.book_append_sheet(

        workbook,

        wsCustomer,

        "Summary Customer"

    );


    /* =====================================================
       SUMMARY PER KOTA
    ===================================================== */

    const kotaMap = {};


    data.forEach(item => {

        const kota =
            item.kota ||
            "Tidak Diketahui";


        if (!kotaMap[kota]) {

            kotaMap[kota] = {

                customers: new Set(),

                monitoring: 0,

                aman: 0,

                menipis: 0,

                kosong: 0

            };

        }


        if (item.kode) {

            kotaMap[kota]
                .customers
                .add(item.kode);

        }


        kotaMap[kota]
            .monitoring++;


        if (
            item.status ===
            "STOCK AMAN"
        ) {

            kotaMap[kota]
                .aman++;

        }


        if (
            item.status ===
            "STOCK MENIPIS"
        ) {

            kotaMap[kota]
                .menipis++;

        }


        if (
            item.status ===
            "STOCK KOSONG"
        ) {

            kotaMap[kota]
                .kosong++;

        }

    });


    const kotaRows = [

        [

            "No",

            "Kota",

            "Jumlah Customer",

            "Total Monitoring",

            "Stock Aman",

            "Stock Menipis",

            "Stock Kosong"

        ]

    ];


    Object.entries(
        kotaMap
    )
    .sort(
        (a, b) =>
            a[0].localeCompare(
                b[0]
            )
    )
    .forEach(
        ([kota, item], index) => {

            kotaRows.push([

                index + 1,

                kota,

                item.customers.size,

                item.monitoring,

                item.aman,

                item.menipis,

                item.kosong

            ]);

        }
    );


    const wsKota =
        XLSX.utils.aoa_to_sheet(
            kotaRows
        );


    wsKota["!cols"] = [

        { wch: 6 },

        { wch: 28 },

        { wch: 20 },

        { wch: 20 },

        { wch: 18 },

        { wch: 20 },

        { wch: 18 }

    ];


    wsKota["!autofilter"] = {

        ref: wsKota["!ref"]

    };


    wsKota["!freeze"] = {

        xSplit: 0,

        ySplit: 1

    };


    XLSX.utils.book_append_sheet(

        workbook,

        wsKota,

        "Summary per Kota"

    );


    /* =====================================================
       FORMAT EXCEL
    ===================================================== */

    formatExcelSheet(
        wsDetail,
        "detail"
    );


    formatExcelSheet(
        wsCustomer,
        "customer"
    );


    formatExcelSheet(
        wsKota,
        "kota"
    );


    /* =====================================================
       NAMA FILE
    ===================================================== */

    const today =
        new Date();


    const tahun =
        today.getFullYear();


    const bulan =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const tanggal =
        String(
            today.getDate()
        ).padStart(2, "0");


    const filename =
        `Monitoring_Stock_Customer_${tahun}-${bulan}-${tanggal}.xlsx`;


    /* =====================================================
       DOWNLOAD
    ===================================================== */

    XLSX.writeFile(
        workbook,
        filename
    );


    alert(
        "Rekap Excel berhasil dibuat.\n\n" +
        "File berisi:\n" +
        "1. Detail Monitoring\n" +
        "2. Summary Customer\n" +
        "3. Summary per Kota"
    );

}


/* =========================================================
   FORMAT SHEET EXCEL
   ========================================================= */

function formatExcelSheet(
    worksheet,
    type
) {

    if (
        !worksheet ||
        !worksheet["!ref"]
    ) {

        return;

    }


    const range =
        XLSX.utils.decode_range(
            worksheet["!ref"]
        );


    /* =====================================================
       HEADER
    ===================================================== */

    for (
        let col = range.s.c;
        col <= range.e.c;
        col++
    ) {

        const cell =
            worksheet[
                XLSX.utils.encode_cell({
                    r: 0,
                    c: col
                })
            ];


        if (!cell) continue;


        cell.s = {

            font: {

                bold: true,

                color: {
                    rgb: "FFFFFF"
                }

            },

            fill: {

                fgColor: {
                    rgb: "1F4E78"
                }

            },

            alignment: {

                horizontal:
                    "center",

                vertical:
                    "center",

                wrapText:
                    true

            },

            border: {

                top: {
                    style: "thin",
                    color: {
                        rgb: "D9E2F3"
                    }
                },

                bottom: {
                    style: "thin",
                    color: {
                        rgb: "D9E2F3"
                    }
                },

                left: {
                    style: "thin",
                    color: {
                        rgb: "D9E2F3"
                    }
                },

                right: {
                    style: "thin",
                    color: {
                        rgb: "D9E2F3"
                    }
                }

            }

        };

    }


    /* =====================================================
       DATA
    ===================================================== */

    for (
        let row = 1;
        row <= range.e.r;
        row++
    ) {

        for (
            let col = range.s.c;
            col <= range.e.c;
            col++
        ) {

            const cell =
                worksheet[
                    XLSX.utils.encode_cell({
                        r: row,
                        c: col
                    })
                ];


            if (!cell) continue;


            cell.s = {

                alignment: {

                    vertical:
                        "center",

                    wrapText:
                        true

                },

                border: {

                    top: {
                        style: "thin",
                        color: {
                            rgb: "E7E6E6"
                        }
                    },

                    bottom: {
                        style: "thin",
                        color: {
                            rgb: "E7E6E6"
                        }
                    },

                    left: {
                        style: "thin",
                        color: {
                            rgb: "E7E6E6"
                        }
                    },

                    right: {
                        style: "thin",
                        color: {
                            rgb: "E7E6E6"
                        }
                    }

                }

            };

        }

    }


    /* =====================================================
       STATUS COLOR
    ===================================================== */

    for (
        let row = 1;
        row <= range.e.r;
        row++
    ) {

        for (
            let col = range.s.c;
            col <= range.e.c;
            col++
        ) {

            const cell =
                worksheet[
                    XLSX.utils.encode_cell({
                        r: row,
                        c: col
                    })
                ];


            if (!cell) continue;


            const value =
                String(
                    cell.v || ""
                )
                .trim()
                .toUpperCase();


            /* STOCK AMAN */

            if (
                value ===
                "STOCK AMAN"
            ) {

                cell.s = {

                    fill: {

                        fgColor: {
                            rgb: "C6EFCE"
                        }

                    },

                    font: {

                        bold: true,

                        color: {
                            rgb: "006100"
                        }

                    },

                    alignment: {

                        horizontal:
                            "center",

                        vertical:
                            "center"

                    }

                };

            }


            /* STOCK MENIPIS */

            if (
                value ===
                "STOCK MENIPIS"
            ) {

                cell.s = {

                    fill: {

                        fgColor: {
                            rgb: "FFEB9C"
                        }

                    },

                    font: {

                        bold: true,

                        color: {
                            rgb: "9C6500"
                        }

                    },

                    alignment: {

                        horizontal:
                            "center",

                        vertical:
                            "center"

                    }

                };

            }


            /* STOCK KOSONG */

            if (
                value ===
                "STOCK KOSONG"
            ) {

                cell.s = {

                    fill: {

                        fgColor: {
                            rgb: "FFC7CE"
                        }

                    },

                    font: {

                        bold: true,

                        color: {
                            rgb: "9C0006"
                        }

                    },

                    alignment: {

                        horizontal:
                            "center",

                        vertical:
                            "center"

                    }

                };

            }

        }

    }


    /* =====================================================
       ROW HEIGHT
    ===================================================== */

    worksheet["!rows"] = [];

    worksheet["!rows"][0] = {

        hpt: 30

    };


    for (
        let i = 1;
        i <= range.e.r;
        i++
    ) {

        worksheet["!rows"][i] = {

            hpt: 24

        };

    }

}


/* =========================================================
   HAPUS SEMUA DATA
   ========================================================= */

function clearAllData() {

    const data =
        getStockData();


    if (data.length === 0) {

        alert(
            "Belum ada data monitoring."
        );

        return;

    }


    const confirmDelete =
        confirm(
            "PERINGATAN!\n\n" +
            "Semua data monitoring akan dihapus " +
            (firebaseReady ?
                "dari CLOUD dan SEMUA perangkat yang terhubung." :
                "dari perangkat ini.") + "\n\n" +
            "Apakah Anda yakin?"
        );


    if (!confirmDelete) {

        return;

    }


    if (firebaseReady && db) {

        db.collection("monitoring")
            .get()
            .then(function (snapshot) {

                const batch = db.batch();

                snapshot.docs.forEach(function (docSnap) {
                    batch.delete(docSnap.ref);
                });

                return batch.commit();

            })
            .catch(function (error) {

                console.error(
                    "Gagal menghapus data di cloud:",
                    error
                );

            });

    }


    localStorage.removeItem(
        STORAGE_KEY
    );


    loadHistory();

    updateDashboard();


    alert(
        "Semua data monitoring berhasil dihapus."
    );

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeApp() {

    setToday();

    loadHistory();

    updateDashboard();

    updateStockStatus();

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        bootstrapApp
    );

} else {

    bootstrapApp();

}


/* =========================================================
   GLOBAL FUNCTION
   Supaya bisa dipanggil dari HTML onclick=""
   ========================================================= */

window.loginUser =
    loginUser;

window.logoutUser =
    logoutUser;

window.saveStock =
    saveStock;

window.clearCustomer =
    clearCustomer;

window.exportExcel =
    exportExcel;

window.clearAllData =
    clearAllData;

window.showHome =
    showHome;

window.showHistory =
    showHistory;

window.showSummary =
    showSummary;

window.updateStockStatus =
    updateStockStatus;