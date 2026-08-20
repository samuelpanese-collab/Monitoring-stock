const customers = [
    {
        kode: "BU008",
        nama: "Boom Donut",
        alamat: "Jatiland Mall GF II. Sultan M Dajbir Sjah Gamalama",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU015",
        nama: "Golden Bakery",
        alamat: "Jl. Kapitan Pattimura Kel. Kalumpang",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU017",
        nama: "Holiday Bakery",
        alamat: "Jl. Merdeka",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU338",
        nama: "Swadaya",
        alamat: "Boulevard",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU038",
        nama: "Topan Bakery",
        alamat: "Toboko",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU 189",
        nama: "Gita Bakery",
        alamat: "JL.KEL.KALUMATA RT003 RW001 KEL.KALUMATA KEC.TERNATE",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU030",
        nama: "RM. Bakery",
        alamat: "Samping Hotel Grand Depan Masuk",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU042",
        nama: "Zako Bakery",
        alamat: "JL.KAMBOJA RT012 RW005 KEL.KAYU MERAH KEC.TERNATE",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU225",
        nama: "Roti Bakar Bandung",
        alamat: "Jati Lurus",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU026",
        nama: "Depot Muhajirin",
        alamat: "Kel.Muhajirin Falajawa 1 RT 003/RW 002",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU039",
        nama: "Tops Cake",
        alamat: "Takoma",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU011",
        nama: "Family Bakery",
        alamat: "Bastiong karance",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU020",
        nama: "Koko Bakery",
        alamat: "Jl. Maliaro, Maliaro RT.8/RW.3, Kec. Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU019",
        nama: "Jasmin Bakery",
        alamat: "JL. SKSD Palapa, Salahuddin RT 001 RW 005, Kel.Kalumpang, Kec. Ternate Tengah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU029",
        nama: "Okky Bakery",
        alamat: "JL.LINGK FALAJAWA RT 005 RW 003 KEL.MUHAJIRIN KEC.TERNATE TENGAH",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU500",
        nama: "Y,Kho Bakery",
        alamat: "Jl Stadion, Stadion, Kota Ternate RT002/RT004",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "IK010",
        nama: "Ike/Unique Cake Bakery",
        alamat: "Jl. Gg.Kayu Bua No.275, Takoma, Kec. Ternate Tengah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "DG 001",
        nama: "Depot Gamalama",
        alamat: "Kel. Gamalama Ternate Tengah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSY",
        nama: "Papa Ronz/Pricilia Sutyono",
        alamat: "JL. Boulevard Jatiland mall, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "10714",
        nama: "Fresh Kukis",
        alamat: "Jl. Cendrawasi. Kalumpang. Ternate Tengah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "HB002",
        nama: "Helo Bakery",
        alamat: "BTN BLAKANG GUDANG MURAH MERIAH",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU022",
        nama: "Fafa Bakery",
        alamat: "Tanah Tinggi jln baru",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU2200",
        nama: "Hanisya Bakery",
        alamat: "Ngidi depan Kusuma Samudera, Ternate",
        provinsi: "Maluku Utara",
        kota: "Pulau Morotai"
    },
    {
        kode: "YUSZDL",
        nama: "Depot Puspa Kencana",
        alamat: "Ternate, samping depot Muhajirin",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYHS",
        nama: "Depot Utama",
        alamat: "Gamalama, Kec. Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYTH",
        nama: "Ci Zian",
        alamat: "Kayu Merah Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "01/YUSYHN",
        nama: "Den Bagus",
        alamat: "Mangga dua Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU0013",
        nama: "Fhira Bakery",
        alamat: "Tabona",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZE3",
        nama: "Chicken Crush",
        alamat: "Kota Ternate Maluku Utara",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZG7",
        nama: "Alif Bakery",
        alamat: "Tanah Tinggi Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU9993",
        nama: "Aldy Bakery",
        alamat: "Bastiongtalangame",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU9990",
        nama: "Abadi Roti Bakery",
        alamat: "Bastiong atas, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "RR001",
        nama: "Royal Resto",
        alamat: "Kalumpang",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZHD",
        nama: "Tabita Cake",
        alamat: "Ubo-ubo Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU284",
        nama: "CV.Putra Tunggal Perkasa.Kartini",
        alamat: "Bastiong Talangame, Kec. Ternate Selatan, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU5522",
        nama: "Tk. Eka Lista",
        alamat: "Kayu Merah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "AB001",
        nama: "AB Bakery",
        alamat: "Kel Gambessi kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "HM003",
        nama: "Hj Mardiah",
        alamat: "Bastiong Talangame, Kec. Ternate Selatan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "RB004",
        nama: "Raja Bakery",
        alamat: "Kel Sasa kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "HM004",
        nama: "HJ MASRI / HJ MASRI BACO",
        alamat: "JL.LINGK TALANGAME KEL.BASTIONG TALANGAME KEC.TERNATE",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZA7",
        nama: "Toko Amira",
        alamat: "Jl. Falajawa 2 Bastiong Karance, Kec. Ternate Selatan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZG2",
        nama: "PT.Inara Kreasi Rasa",
        alamat: "Jln. STIKIP Kieraha, Sasa Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZI6",
        nama: "NUR DIANA",
        alamat: "Bastiong, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU6790",
        nama: "ks Sartika",
        alamat: "Kel.Santiong",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU0032",
        nama: "Nabri",
        alamat: "Pasar Bastiong, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU0002",
        nama: "H.Tawe",
        alamat: "Bastiong Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU6622",
        nama: "H.Eny",
        alamat: "Bastiong",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYZP",
        nama: "Hi.Lease",
        alamat: "Sangaji Utara RW004",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZFO",
        nama: "Adam",
        alamat: "Gambessi Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "KI 001",
        nama: "Kalumata Indah",
        alamat: "Jl. Santo Pedro, Kalumata, Kec. Ternate Selatan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "SN001",
        nama: "Hi. Nurdin",
        alamat: "Ternate Selatan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "HJ001",
        nama: "Hj. Jum",
        alamat: "JL.LINGK TALANGAME RT003 RW002 KEL.BASTIONG TALANGAME KEC.TERNATE",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU0111",
        nama: "H.Mariam",
        alamat: "Kel.Bastiong, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "155",
        nama: "Toko BETA",
        alamat: "Kalumata, Kec Ternate Selatan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZ52",
        nama: "ANWAR",
        alamat: "Pasar Bastiong, Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "0001/01/YUSZ10",
        nama: "Ramfit",
        alamat: "Ngade kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU099",
        nama: "Kios Amril",
        alamat: "Gamalama, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU035",
        nama: "CV Mekar",
        alamat: "Revolusi",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU004",
        nama: "Anugrah.Subhan",
        alamat: "Falajawa 1 kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU005",
        nama: "Archi",
        alamat: "Falajawa 2 Kel. Muhajirin samping Toko Anugerah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU031",
        nama: "Sari Rasa",
        alamat: "Jln. Ais Nasution Dpn. SMP.I",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU016",
        nama: "Hasrat/Firjah",
        alamat: "JL. Merdeka, Gamalama, Kec. Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU300",
        nama: "Toko Gemini",
        alamat: "Jl.Arnold Monuhutu Kalumpang",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU3401",
        nama: "TOKO NUSA INDAH",
        alamat: "JL. P. REVOLUSI TERNATE TENGAH",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "TT01",
        nama: "Tk Trully",
        alamat: "Jln. Revolusi Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "157",
        nama: "Nanda/Laras Bakery",
        alamat: "Ngade, Blok A jln. Hadi Abdulah",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "KS-001",
        nama: "Kusuma Samudra/Sunawan",
        alamat: "JL LINGK FALAJAWA II RT:010 RW:002 KEL.BASTIONG KARANCE KEC.TERNATE SELATAN",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00018D",
        nama: "Fabanyo/Taher",
        alamat: "Jl. Seruni Kp. Pisang Kec. Ternate Tengah Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "KJ 005",
        nama: "Kusuma Jaya",
        alamat: "Mangga Dua Utara, Kec. Ternate Selatan, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU0835",
        nama: "H.Wati/Khalifa",
        alamat: "Ngidi",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU5055",
        nama: "H.Roni",
        alamat: "Jln Maliaro",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU6091",
        nama: "kios Bilgis",
        alamat: "Pasar Percontohan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "SRL01",
        nama: "SANGRILA",
        alamat: "JLN NUKILA, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZDZ",
        nama: "Toko Mahabbah",
        alamat: "Ternate, ngidi samping kusuma samudera",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU112",
        nama: "Kios Endang",
        alamat: "Gamalama",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BM007",
        nama: "PT.Bintang Muara Swalayan",
        alamat: "Jl. Merdeka, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU3030",
        nama: "Toko Mujur",
        alamat: "Jl.Pahlawan Revolusi",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "SM001",
        nama: "Selecta MM",
        alamat: "Gamalama, Kec. Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "MI002",
        nama: "Madura Indah",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/000171",
        nama: "Alfian Jaya",
        alamat: "Kampung Pisang Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/00001A",
        nama: "KIOS AL",
        alamat: "BTN TERNATE",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "AB006",
        nama: "Akbar Mur",
        alamat: "Jl. Revolusi, Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZEZ",
        nama: "SAIFUL",
        alamat: "Kalumata, Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU1103",
        nama: "H.Mirna",
        alamat: "Kota Baru",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU6207",
        nama: "kios Dewi",
        alamat: "Pasar Percontohan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU9910",
        nama: "Kios Malik",
        alamat: "Pasar Percontohan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "JA01",
        nama: "Jahir",
        alamat: "Pasar Gamalama Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "RT001",
        nama: "Anugerah.Robert tan",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "HI009",
        nama: "H. Ali",
        alamat: "Pasar percontohan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU2940",
        nama: "Halmahera indah",
        alamat: "Jl. Jati, Tanah Tinggi, Kec. Ternate Selatan, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YuSZEK",
        nama: "Poliama",
        alamat: "Kasturian",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYT0",
        nama: "Ayu",
        alamat: "Tanah Tinggi, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU339",
        nama: "Mutiara",
        alamat: "Jln Revolusi Gamalama Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "SF 002",
        nama: "Kios mba Marni",
        alamat: "Ternate, lorong SMP 1",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "MA003",
        nama: "Kios Muliana",
        alamat: "Pasar Percontohan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZ9X",
        nama: "Asraf",
        alamat: "Kalumata",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU023",
        nama: "Modern Bakery",
        alamat: "Blakang Sd Tarau",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU1221",
        nama: "Sularman",
        alamat: "Kel.ubo2",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BM1902",
        nama: "Fadil",
        alamat: "Tubo",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYZL",
        nama: "Rejeki 2",
        alamat: "Sangaji Utara, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYHP",
        nama: "AILA",
        alamat: "Desa Tarau kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZ3N",
        nama: "Teratai",
        alamat: "sango",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "0001DU",
        nama: "Burger Bangor",
        alamat: "Ternate, ngidi depan indomaret",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/00013S",
        nama: "TOKO SABIA INDAH",
        alamat: "Sabia Indah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU1101",
        nama: "Harian indah",
        alamat: "Kel.Salero Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/00ANDI",
        nama: "Kios Andi",
        alamat: "Kota Baru",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "01YUSZ2G",
        nama: "SortyFound/Nurbaya",
        alamat: "Tafure, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "21",
        nama: "Sempana Prima",
        alamat: "Sabia Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU20731",
        nama: "ks Fajar",
        alamat: "Kel.Jati",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYUD/01",
        nama: "Ci Ani",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "0001EE",
        nama: "Simpang 5",
        alamat: "JL.SIMPANG LIMA RT001 RW001 KEL.MARIKURUBU KEC.TERNATE BTN",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "13401",
        nama: "Olivia",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00017H",
        nama: "Barokah",
        alamat: "Jl. Raya Skep,Salahuddin, Kec. Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZIM",
        nama: "TOKO Bumi Ayu",
        alamat: "Makassar Timur, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "MD009",
        nama: "Irianto/cv Matahari djaya abadi",
        alamat: "tanah tinggi Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU8831",
        nama: "Alya Mart",
        alamat: "Maliaro, Kec. Ternate Tengah, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU6011",
        nama: "Mael",
        alamat: "Soa",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BUJ065",
        nama: "TK JR",
        alamat: "MALIYARO",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYU0",
        nama: "Fajrin",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZHC",
        nama: "Indah Dewi Sulistiowati",
        alamat: "Falajawa Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSYB7",
        nama: "Ifa Dalifa Hasan",
        alamat: "JL.KEL MARIKURUBU RT001 RW001 KEL.MARIKURUBU KEC.TERNATE TENGAH",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZDK",
        nama: "Amirudin",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZHQ",
        nama: "Hadidjah",
        alamat: "Maliaro, Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZIC",
        nama: "ALO",
        alamat: "Facei Sangaji Utara, Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },

    {
        kode: "00001/01/00002O",
        nama: "INDRAWATI",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "0001FA",
        nama: "Awon/Lance Pelafu",
        alamat: "Idam Gamlamo Jailolo, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "YUSZ47",
        nama: "CV. MITRA SEMPURNA KARUNIA JAYA",
        alamat: "Pasar Laiwu, Laiwu Obi, Halmahera Selatan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "00001/01/0001CH",
        nama: "Alfis",
        alamat: "Sofifi Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00001/01/YUSZ9H",
        nama: "Habib Mart 02",
        alamat: "Lelilef Waibulen Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00001/01/YUSZHJ",
        nama: "SAMUEL PANESE",
        alamat: "Jl. Revolusi Gamalama Kota Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU9130",
        nama: "Abu",
        alamat: "Subaim",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "BU7760",
        nama: "Wira Perkasa",
        alamat: "Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU1187",
        nama: "Fendi",
        alamat: "Labuha/Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "YUSZ7Q",
        nama: "Ruslan",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "YUSZ9H",
        nama: "MM Habib Mart",
        alamat: "Lelilef",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "YUSYUB",
        nama: "Nani",
        alamat: "Sagea, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "YUSYGE",
        nama: "HI BAHRUDIN",
        alamat: "Buli Maba, Halmahera Timur",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "YUSZ9W",
        nama: "OPI",
        alamat: "Maba, Halmahera Timur",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "YUSZF8",
        nama: "Serba Bisa",
        alamat: "Labuha",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "YUSZ7C",
        nama: "Irsad",
        alamat: "Gane Timur, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "YUSZF1",
        nama: "Femi/Sunarti Rorong",
        alamat: "Lelilef",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "Tunai",
        nama: "KANTOR-EU",
        alamat: "Jl.Pahlawan Revolusi no.11 kel.Gamalama -Ternate Selatan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZCW",
        nama: "Nilam",
        alamat: "Jailolo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "JA005",
        nama: "Jamaludin",
        alamat: "Subaim, Halmahera Timur",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "123000",
        nama: "Toko Amelia Jailolo / Sadek",
        alamat: "Jailolo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BU7690",
        nama: "Hasan",
        alamat: "Tidore, Kota Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU8031",
        nama: "Hariana",
        alamat: "Boso Jailolo Selatan, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BUS602",
        nama: "Suka Weda",
        alamat: "Weda, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "137",
        nama: "Titi",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZ2K",
        nama: "Ci Siane",
        alamat: "Weda Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00001/01/YUSZH4",
        nama: "Kisman",
        alamat: "Maba Halmahera Timur",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "00001/01/YUSYLW",
        nama: "Makmur Bersama",
        alamat: "Peniti",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZHK",
        nama: "Hastriyani",
        alamat: "Bacan, Halmahera Selatan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "CO112",
        nama: "Toko ANEKA IBU / CI ONGA",
        alamat: "JL.TONGUTE SUNGI RT001 RW001 KEL.TONGUTE SUNGI KEC.IBU",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "KD01",
        nama: "Kios Dita",
        alamat: "Pasar Tugulufa Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "Hj 003",
        nama: "hj.Jana",
        alamat: "JL.LINGK SKEEP RT001 RW002 KEL.SALAHUDDIN KEC.TERNATE TENGAH",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU9051",
        nama: "kios Daus",
        alamat: "Obi, Hal-Sel, Maluku Utara",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU7301",
        nama: "Jasman",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "BU11753",
        nama: "TK Lovina",
        alamat: "Subaim",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "YUSZ8V",
        nama: "Sisry Bakery",
        alamat: "Tobelo, Halmahera Utara",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "IM002",
        nama: "Imanuel",
        alamat: "JL.ACANGO RT003 RW001 KEL.ACANGO KEC.JAILOLO",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "YUSYBK",
        nama: "Upi Mart",
        alamat: "Jl.Frans Kaisepo, Dowora Kel Tidore kec Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSYMY",
        nama: "Hajar Ali/Putri Alam",
        alamat: "Soasio Tidore, Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "11165",
        nama: "Tk. Kasih Tobelo",
        alamat: "Kampung Baru Tobelo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "RM01",
        nama: "Raja Mart",
        alamat: "Desa Lililef - Weda Tengah, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "51",
        nama: "Sudi/Sudirman",
        alamat: "Buli",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "00001/01/000108",
        nama: "MM Megaria/Hi. Sarkawi",
        alamat: "Jailolo, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BU2308",
        nama: "Anwar Arilaha",
        alamat: "Pasar Rum Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00001/01/YUSZI4",
        nama: "Hikma",
        alamat: "Kupal, Halmahera Selatan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BC006",
        nama: "Ci Hoa",
        alamat: "JL.AKEDIRI RT001 RW002 KEL.AKEDIRI KEC.JAILOLO",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "LJ005",
        nama: "Toko Lina Jaya",
        alamat: "Pasar Rum Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSYNM",
        nama: "HI.SITI TIDORE / SITI UMAR",
        alamat: "JL.GURABATI RT001 RW001 KEL.GURABATI KEC.TIDORE SELATAN",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "TI 002",
        nama: "Toko Indri",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "HB003",
        nama: "Toko Hidup Baru",
        alamat: "JL.MARIMOI RT002 RW001 KEL.TOMAGOBA KEC.TIDORE",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU93490",
        nama: "Tk Trijaya",
        alamat: "Buli",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "YUSZFB",
        nama: "Eki",
        alamat: "Gamaf Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "BU056",
        nama: "Hoky Mart",
        alamat: "Gosoma",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "pa01",
        nama: "Palm Persada Bakery",
        alamat: "Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "LD 003",
        nama: "Lam Donat",
        alamat: "Tobelo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "YUSZC5",
        nama: "Toko Ibu Jaya",
        alamat: "DESA GAM ICI KEL.TONGUTE TERNATE KEC IBU",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "NW002",
        nama: "Nirwana",
        alamat: "Labuha",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "MM01",
        nama: "Mars Mart/3 Putri",
        alamat: "Bukit Durian, Oba Utara, Kota Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSYZR",
        nama: "Rafa Mart",
        alamat: "Mareku Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSZBV",
        nama: "Anto",
        alamat: "Weda Selatan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "4691",
        nama: "Ibu ica",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00001/01/NS/2025/004680",
        nama: "Aulia",
        alamat: "Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "YUSZ6W",
        nama: "Erval",
        alamat: "Saketa",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU0050",
        nama: "Dean Bakery",
        alamat: "Tobelo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "BU1770",
        nama: "Toko CEY MART",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "NN05",
        nama: "NINI",
        alamat: "RUM",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "SA06",
        nama: "SALAM",
        alamat: "JLN DUSUN",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00001/01/YUSYJS",
        nama: "Kamal",
        alamat: "Ibu, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "00001/01/YUSZAO",
        nama: "Ai/Taufik Tanjung",
        alamat: "Makian",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "00001/01/YUSZFO",
        nama: "Arfan Thalib",
        alamat: "Jailolo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "YUSZEY",
        nama: "Leni",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "KA004",
        nama: "Kharina Jaya",
        alamat: "JL.DUSUN I RT001 RW001 KEL.GALALA KEC.OBA UTARA",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "UM7392",
        nama: "H.Umi",
        alamat: "Subaim",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BU4011",
        nama: "Toko Usaha Baru/ IM",
        alamat: "Akeguraci, Oba utara",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU10102",
        nama: "ks Andi",
        alamat: "Obi",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU3109",
        nama: "ks Jabal Rahmat",
        alamat: "Galala, Oba Utara, Kota Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "118",
        nama: "hi. Herman",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "3925",
        nama: "Jaya Makmur",
        alamat: "Ternate tanah tinggi",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BU034",
        nama: "Tembal",
        alamat: "Labuha",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU117",
        nama: "Twin Mart/Fanny Sielayar",
        alamat: "Jalan Desa Akediri kec.Jailolo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BU3311",
        nama: "AB/HALIMA ABAICI SALEH",
        alamat: "KEL.GUAEMAADU RT.002 RW.001",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU5520",
        nama: "Ci Meiske",
        alamat: "Jl.RSU foto copy Gema Mitra, samping Aspol Tobelo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "MJ002",
        nama: "Mula Jaya",
        alamat: "Jl. Hijra, Galala, Oba Utara, Kota Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "SM01",
        nama: "Sinar Mulia",
        alamat: "Jl.Raya Sultan Nuku, Galala, Oba Utara, Kota Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "TL01",
        nama: "Tk. Laris",
        alamat: "Bastion - Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "BM009",
        nama: "Modern MM",
        alamat: "Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "IF011",
        nama: "Kios Irfan Baru Madoi",
        alamat: "BALBAR RT004 RW002 KEL.BALBAR KEC.OBA UTARA",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "GB003",
        nama: "Gufasa Bakery",
        alamat: "Soakonora Jailolo, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "SF 004",
        nama: "Makmur Sejatir",
        alamat: "Aketobololo Oba Utara",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSZAV",
        nama: "MASTA",
        alamat: "Pulau Gala",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "0001CJ",
        nama: "Sinar Buton",
        alamat: "JL DS BUKIT DURIAN RT 001 RW 001 KEL BUKIT DURIAN KEC OBA UTARA",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSZ69",
        nama: "satu putra",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00019X",
        nama: "Tata",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00001/01/YUSZA5",
        nama: "Hajawia Ibrahim",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU013",
        nama: "Firman",
        alamat: "JL.AMASING KOTA RT000 RW000 KEL.AMASING KOTA KEC.BACAN",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "00001/01/YUSZFW",
        nama: "Apson Pippa",
        alamat: "Jailolo, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BU0072",
        nama: "kios irwan",
        alamat: "jailolo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "00001/01/YUSZHP",
        nama: "Ibu MAR",
        alamat: "Weda, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00001/01/000150",
        nama: "Juwita",
        alamat: "Soagimalaha, maba",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "00001/01/YUSZHV",
        nama: "CHARLES",
        alamat: "Labuha, Halmahera Selatan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "00001/01/YUSZ2Z",
        nama: "Mbak NENG",
        alamat: "TIDORE, Kepulauan Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU058",
        nama: "Cahaya Lamena",
        alamat: "Desa Galala, Oba Utara, Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU110",
        nama: "Wosia Mart",
        alamat: "Wosia Tobelo tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "BU009",
        nama: "Chokent Bakery",
        alamat: "JL.LUMBA-LUMBA RT001 RW002 KEL.LAIWORU KEC.BATALAIWORU",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "HT01",
        nama: "H.Arifin",
        alamat: "KOMP PASAR RT 003 RW 001 KEL BULI KEC MABA",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "LO001",
        nama: "Indo/La saru",
        alamat: "Loloda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "132",
        nama: "KARISMA 88",
        alamat: "Jl. Wosia Tobelo, Halmahera Utara",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "YUSZ85",
        nama: "CT Mart",
        alamat: "Tomagoba Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "0001BN",
        nama: "Toko Empat Mart",
        alamat: "JL.DOKIRI RT006 RW002 KEL.DOKIRI KEC.TIDORE",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU9088",
        nama: "Bakery 88",
        alamat: "Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "BU0938",
        nama: "Tk Camar",
        alamat: "Hatebicara, Kec Jailolo, Kab. Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "YUSZ1M",
        nama: "Kios Rusly",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "MS1010",
        nama: "Kios Muksin",
        alamat: "Morotai",
        provinsi: "Maluku Utara",
        kota: "Pulau Morotai"
    },
    {
        kode: "SB001",
        nama: "Sederhana Toko",
        alamat: "Rawajaya Tobelo, Halmahera Utara",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "KL002",
        nama: "Kios Larumi",
        alamat: "JL.BABANG RT000 RW000 KEL.BABANG KEC.BACAN TIMUR",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "SF 001",
        nama: "Kios Alfarabi",
        alamat: "Sofifi Oba Utara",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "YUSZCV",
        nama: "Ferdinan",
        alamat: "TOBELO",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "YUSZ6J",
        nama: "Diana",
        alamat: "Daruba, Pulau Morotai",
        provinsi: "Maluku Utara",
        kota: "Pulau Morotai"
    },
    {
        kode: "YUSYHZ",
        nama: "HI.Bahri",
        alamat: "MABA",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "BU5511",
        nama: "PATRA MART",
        alamat: "Tobelo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "00001/01/YUSYX8",
        nama: "Jabir",
        alamat: "Labuha",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU9999",
        nama: "PT. Galaxy Antariksa Tobelo",
        alamat: "Jl. Kemakmuran Tobelo Halmahera Utara",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "0001AA",
        nama: "Fajar Pratama",
        alamat: "Soasio Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "L002",
        nama: "Linda",
        alamat: "Jl. Poros Weda-Payahe, Nurweda, Kec. Weda, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "YUSZEH",
        nama: "Halima",
        alamat: "Kasturian",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YISZ20",
        nama: "Marfeliks Krois",
        alamat: "Doro",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "yusz84",
        nama: "Ci Fany",
        alamat: "Ternate",
        provinsi: "Maluku Utara",
        kota: "Ternate"
    },
    {
        kode: "YUSZEX",
        nama: "INDAH",
        alamat: "Sidangoli, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "YUSYXF",
        nama: "ALFARIZKY BULA",
        alamat: "Maba, Halmahera Timur",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "00001/01/YUSZED",
        nama: "ACUN KHT",
        alamat: "Loloda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "00001/01/YUSZG1",
        nama: "Susanto",
        alamat: "Wairoro",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00001/01/YUSZ13",
        nama: "Kios Salma",
        alamat: "Tidore Kepulauan, Maluku Utara",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00001/01/YUSZ96",
        nama: "Toko Kirana Jaya",
        alamat: "Buli, Halmahera Timur",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "00001/01/YUSZIZ",
        nama: "Fanianti",
        alamat: "Tobelo, Halmahera Utara",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "YUSZ7K",
        nama: "Fadira Mart",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU036",
        nama: "TKN",
        alamat: "Labuha",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "BU5523",
        nama: "ROTI BORERO",
        alamat: "Jl. Tanah Abang Pasar Lama - Labuha Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "SR002",
        nama: "Sri Rejeki",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "DJ003",
        nama: "Djafar",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "SB002",
        nama: "Kios Sibela",
        alamat: "Labuha",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "CW006",
        nama: "Cahaya Wajo",
        alamat: "JL.DUSUN I RT002 RW001 KEL.GALALA KEC.OBA UTARA",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "DO004",
        nama: "Dodinga Pratama",
        alamat: "Jailolo Selatan, Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "AD003",
        nama: "Adisty",
        alamat: "Sidangoli",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "BU8107",
        nama: "Alim",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU9900",
        nama: "Julia",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "BU1154",
        nama: "AD Patani",
        alamat: "Patani",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "ABS 01",
        nama: "AB Bakery Sofifi",
        alamat: "Jl.Barumadoi Sofifi tikep Halmahera",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00014S",
        nama: "BP.Indah",
        alamat: "Obi",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "Yuszci",
        nama: "OKI",
        alamat: "Maba",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "YUSZE2",
        nama: "AM Bakery",
        alamat: "Jl. Balbar No.40, Sofifi, Oba Utara, Kota Tidore Kepulauan",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "00012F",
        nama: "Hi. Manuru",
        alamat: "Pulau Gebe",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "HD002",
        nama: "H Eka",
        alamat: "Bacan",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "AP001",
        nama: "AP Rajawali",
        alamat: "Tobelo",
        provinsi: "Maluku Utara",
        kota: "Halmahera Utara"
    },
    {
        kode: "ST01",
        nama: "Sahabat.toko",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    },
    {
        kode: "KA001",
        nama: "Kios Arif",
        alamat: "KOMP.PASAR.KEL.BULI KEC.MABA",
        provinsi: "Maluku Utara",
        kota: "Halmahera Timur"
    },
    {
        kode: "FI006",
        nama: "Fitra",
        alamat: "Sidangoli Halmahera Barat",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "00018H",
        nama: "Tjang/Paul",
        alamat: "Ibu",
        provinsi: "Maluku Utara",
        kota: "Halmahera Barat"
    },
    {
        kode: "0001II",
        nama: "HI AK Hi.Abu Kasim",
        alamat: "Gitang Pulau Makian",
        provinsi: "Maluku Utara",
        kota: "Halmahera Selatan"
    },
    {
        kode: "YUSZ56",
        nama: "Deva MArt",
        alamat: "Fidi Jaya, Weda Tengah, Halmahera Tengah",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "YUSZGN",
        nama: "Al Hana",
        alamat: "Lelilef Weda",
        provinsi: "Maluku Utara",
        kota: "Halmahera Tengah"
    },
    {
        kode: "00019S",
        nama: "Toko Rahayu / Mbak Yun",
        alamat: "Tidore",
        provinsi: "Maluku Utara",
        kota: "Tidore Kepulauan"
    }
];