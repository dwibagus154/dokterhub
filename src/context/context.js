import { createContext, useState, useContext } from "react";

const AddContext = createContext();

export function useLocalContext() {
    return useContext(AddContext);
}

export function ContextProvider({ children }) {


    const blogs = [
        {
            id: 1,
            title: "Efek Alkohol Jangka Pendek yang Harus Diwaspadai",
            description: {
                paragraf1: "Efek alkohol jangka pendek dapat dirasakan sejak tegukan pertama. Efek pertama yang biasanya muncul adalah pusing dan mual. Namun, semakin banyak minuman beralkohol dikonsumsi, semakin banyak pula efek yang dapat dirasakan dan tentunya perlu diwaspadai",
                paragraf2: "Alkohol merupakan zat kimia yang bila dikonsumsi dapat memengaruhi setiap bagian tubuh, termasuk otak, tulang, dan jantung. Efek yang ditimbulkan dapat bersifat jangka pendek maupun jangka panjang.",
                paragraf3: "Minuman beralkohol yang dikonsumsi akan masuk ke darah melalui dinding lambung dan usus kecil. Selanjutnya, alkohol menyebar ke seluruh bagian tubuh termasuk otak, lalu memperlambat kerja otak serta memengaruhi cara berpikir dan berperilaku.",
                paragraf4: "Efek alkohol jangka pendek dapat ditentukan dari satuan unit alkohol yang dikonsumsi. Satu unit alkohol setara dengan 10 mililiter atau 8 gram alkohol murni, yaitu rata-rata alkohol yang dapat diproses dalam tubuh orang dewasa dalam satu jam.",
                paragraf5: "Cara terbaik untuk mengurangi efek alkohol jangka pendek adalah dengan tidak mengonsumsi minuman beralkohol sama sekali atau minum secukupnya. Batasi asupan minuman beralkohol, yaitu tidak lebih dari 14 unit alkohol per minggu. Jumlah tersebut setara dengan 6 liter bir atau 10 gelas kecil anggur."
            },
            image: "/images/blogs/blogs1.jpg",
        },
        {
            id: 2,
            title: "Inilah Ragam Pilihan Obat Vertigo",
            description: {
                paragraf1: "Agar vertigo yang muncul tidak sampai mengganggu aktivitas dan acara yang penting, Anda bisa mengonsumsi obat vertigo. Obat untuk mengatasi vertigo bisa berbahan alami, bisa juga berupa obat-obatan medis.",
                paragraf2: "Ketika vertigo kambuh, penderita akan merasakan pusing dan lingkungan di sekitarnya terasa seperti berputar. Efeknya, penderita bisa kehilangan keseimbangan, sehingga sulit untuk berdiri maupun berjalan.",
                paragraf3: "Selain pusing berputar, vertigo juga bisa disertai gejala lain seperti mual, muntah, keringat dingin, dan nistagmus. Lamanya gejala vertigo berlangsung tergantung pada tingkat keparahan vertigo itu sendiri. Ada yang hanya terjadi beberapa detik, menit, atau jam, ada pula yang hingga berhari-hari.",
                paragraf4: "Vertigo yang dipicu oleh stres atau rasa cemas berlebih biasanya dapat diobati dengan obat penenang, seperti benzodiazepine. Beberapa obat yang masuk ke dalam golongan benzodiazepine adalah diazepam dan alprazolam.",
                paragraf5: "Itulah beragam obat vertigo, baik yang alami maupun medis. Jika Anda menderita vertigo, cobalah untuk mengonsumsi obat vertigo alami atau yang dijual bebas di apotik terlebih dahulu. Jika vertigo tak kunjung reda atau sering kambuh, konsultasikan ke dokter untuk mendapatkan obat lain yang lebih efektif"
            },
            image: "/images/blogs/blogs2.jpg",
        },
        {
            id: 3,
            title: "Feses Bayi Berwarna Gelap, Bahaya atau Tidak, ya?",
            description: {
                paragraf1: "Dalam 1 tahun pertama kehidupan bayi, warna dan tekstur kotoran bayi bisa sesekali berubah, misalnya dari warna kehijauan atau kekuningan menjadi berwarna gelap dan kehitaman. Feses bayi berwarna gelap ini bisa disebabkan oleh beberapa hal. Ada yang berbahaya, tapi ada juga yang tidak.",
                paragraf2: "Feses bayi pada umumnya berwarna kuning kehijauan atau sedikit kecokelatan. Ketika Bunda mendapati tinja Si Kecil berwana lebih gelap, wajar kalau hal ini membuat Bunda merasa khawatir.",
                paragraf3: "Yang perlu Bunda ketahui, feses bayi berwarna gelap bisa disebabkan oleh beberapa hal. Kondisi ini memang tidak selalu berbahaya, terutama jika Si Kecil masih tampak aktif dan mau makan serta minum dengan lancar.",
                paragraf4: "BAB berwarna hitam yang disebabkan oleh penyakit-penyakit di atas juga bisa disertai dengan munculnya gejala lain, seperti bayi tampak rewel, lemas, gelisah, atau kesakitan, kulit pucat, keringat dingin, muntah, kurang atau tidak mau menyusu, dan sering mengantuk.",
                paragraf5: "Apabila feses berwarna gelap yang Si Kecil alami disertai gejala-gejala tersebut, Bunda dan Ayah perlu segera membawanya ke dokter, ya. Dengan demikian, dokter bisa melakukan pemeriksaan dan memberikan penanganan yang tepat."
            },
            image: "/images/blogs/blogs3.jpg",
        },
        {
            id: 4,
            title: "Stres Saat Hamil Bisa Menyebabkan Keguguran, Mitos atau Fakta?",
            description: {
                paragraf1: "Stres saat hamil bukan hanya bisa membuat kehamilan menjadi semakin berat untuk dijalani, tapi juga bisa menimbulkan beragam masalah kesehatan. Bahkan, banyak yang percaya bahwa stres saat hamil juga bisa menyebabkan keguguran.",
                paragraf2: "Saat hamil, tubuh wanita akan mengalami banyak perubahan, termasuk perubahan hormon yang bisa mempengaruhi suasana hati atau mood. Ini juga merupakan salah satu alasan mengapa ibu hamil lebih rentan mengalami stres.",
                paragraf3: "Istirahat yang cukup juga tidak kalah penting untuk dilakukan guna mengelola stres saat hamil. Pasalnya saat tidur, otak akan mengendalikan saraf yang membantu tubuh untuk mengatasi stres.",
                paragraf4: "Nah, untuk membantu tidur Bumil menjadi lebih lelap dan berkualitas, cobalah pasang humidifier atau diffuser dengan aromaterapi kesukaan Bumil di kamar tidur. Bila perlu, mintalah pasangan untuk memijat Bumil sebelum tidur, agar Bumil bisa merasa lebih rileks dan cepat terlelap.",
                paragraf5: "Selain berbagai cara di atas, Bumil juga bisa mencoba relaksasi guna mengurangi stres. Jika banyak beban pikiran, cobalah ceritakan atau curhat dengan pasangan, kerabat, atau keluarga Bumil agar tidak menjadi momok yang membuat Bumil stres."
            },
            image: "/images/blogs/blogs4.jpg",
        },
        {
            id: 5,
            title: "Efek Alkohol d,f,f fmfvfv",
            description: {
                paragraf1: "Efek alkohol jangka pendek dapat dirasakan sejak tegukan pertama. Efek pertama yang biasanya muncul adalah pusing dan mual. Namun, semakin banyak minuman beralkohol dikonsumsi, semakin banyak pula efek yang dapat dirasakan dan tentunya perlu diwaspadai",
                paragraf2: "Alkohol merupakan zat kimia yang bila dikonsumsi dapat memengaruhi setiap bagian tubuh, termasuk otak, tulang, dan jantung. Efek yang ditimbulkan dapat bersifat jangka pendek maupun jangka panjang.",
                paragraf3: "Minuman beralkohol yang dikonsumsi akan masuk ke darah melalui dinding lambung dan usus kecil. Selanjutnya, alkohol menyebar ke seluruh bagian tubuh termasuk otak, lalu memperlambat kerja otak serta memengaruhi cara berpikir dan berperilaku.",
                paragraf4: "Efek alkohol jangka pendek dapat ditentukan dari satuan unit alkohol yang dikonsumsi. Satu unit alkohol setara dengan 10 mililiter atau 8 gram alkohol murni, yaitu rata-rata alkohol yang dapat diproses dalam tubuh orang dewasa dalam satu jam.",
                paragraf5: "Cara terbaik untuk mengurangi efek alkohol jangka pendek adalah dengan tidak mengonsumsi minuman beralkohol sama sekali atau minum secukupnya. Batasi asupan minuman beralkohol, yaitu tidak lebih dari 14 unit alkohol per minggu. Jumlah tersebut setara dengan 6 liter bir atau 10 gelas kecil anggur."
            },
            image: "/images/blogs/blogs1.jpg",
        },

    ]

    const obats = [
        {
            id: 1,
            title: "Bear Brand Susu Steril 189 ml",
            type: "COVID-19",
            description: "BEAR BRAND merupakan 100% susu sapi murni siap konsumsi yang telah mengalami proses sterilisasi tanpa penambahan bahan pengawet didalamnya. Susu murni yang terkandung di dalamnya dapat membantu menjaga kesehatan tubuh.",
            price: 9400,
            unit: "kaleng",
            stock: 200,
            ruleUse: "Dapat langsung di minum, dalam keadaan hangat ataupun dingin",
            dosis: "Dikonsumsi sesuai kebutuhan",
            image: "/images/obat/obat1.jpg"
        },
        {
            id: 2,
            title: "Natur-E 100 IU 16 Kapsul",
            type: "COVID-19",
            description: "NATUR-E 100 IU 16 KAPSULmerupakan suplemen yang mengandung Vitamin E yang terbukti alami, aman serta sehat untuk menjaga kesehatan dan kecantikan kulit. Suplemen ini digunakan untuk membantu memenuhi kebutuhan vitamin E.",
            price: "15900",
            unit: "box",
            stock: "300",
            ruleUse: "dikonsumsi setelah makan",
            dosis: "1-3 kapsul sehari",
            image: "/images/obat/obat2.jpg"
        },
        {
            id: 3,
            title: "Oxycan Green Kaleng",
            type: "COVID-19",
            description: "OXYCAN GREEN KALENG merupakan oksigen yang di kemas dalam tabung kecil yang mudah di bawa dan digunakan. Oxycan membantu mengembalikan kadar oksigen tubuh pada tingkat normal dan dapat digunakan sebagai pertolongan pertama saat tubuh kekurangan oksigen ketika mengalami kelelahan, olahraga berat, stress, pada tempat tinggi, kualitas udara yang buruk, sesak napas, maupun asma.",
            price: 41600,
            unit: "kaleng",
            stock: 400,
            ruleUse: "Buka tutup kecil bagian atas kaleng. Lepaskan penutup dan lekatkan pada kepala kaleng sebagai masker. Tutup hidung dengan masker. Tekan kepala kaleng dan hirup dalam-dalam selama 2 detik.",
            dosis: "digunakan sesuai kebutuhan",
            image: "/images/obat/obat3.jpg"
        },
        {
            id: 4,
            title: "Rhinos SR 10 Kapsul",
            type: "BATUK DAN FLU",
            description: "RHINOS SR merupakan obat dengan kandungan Pseudoephedrine HCl dan Loratadine dalam bentuk kapsul lepas lambat. Obat ini dapat digunakan untuk meringankan gejala rinitis alergi, bersin-bersin, hidung tersumbat, dan rasa gatal pada hidung. Obat ini dianjurkan bila kedua sifat antihistamin dari loratadine dan efek dekongestan dari pseudoephedrine dibutuhkan. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.",
            price: 20000,
            unit: "strip",
            stock: 150,
            ruleUse: "diminum sebelum atau sesudah makan",
            dosis: "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. Dewasa dan anak diatas 12 tahun: 1 kapsul, 2 kali perhari atau setiap 12 jam.",
            image: "/images/obat/obat4.jpg"
        },
        {
            id: 5,
            title: "Tremenza 10 Tablet",
            type: "BATUK DAN FLU",
            description: "TREMENZA merupakan obat dengan kandungan Pseudoephedrine HCl dan Triprolidine HCl. Obat ini digunakan untuk meringankan gejala-gejala flu karena alergi pada saluran pernafasan bagian atas yang memerlukan dekongestan nasal dan antihistamin. Pseudoefedrin dalam obat ini bekerja pada reseptor alfa-adrenergik dalam mukosa saluran pernafasan sehingga menghasilkan vasokonstriksi. Triprolidin dalam obat ini merupakan suatu antihistamin yang bekerja sebagai antagonis reseptor histamin H1 dalam pengobatan alergi. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.",
            price: 15000,
            unit: "strip",
            stock: 235,
            ruleUse: "sesudah makan",
            dosis: "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. Dosis dewasa : 1 tablet, 3-4 kali sehari. Anak 6 - 12 tahun : 1/2 tablet, 3-4 kali sehari.",
            image: "/images/obat/obat5.jpg"
        },
        {
            id: 6,
            title: "Gentasolon Cream 5 g",
            type: "kulit",
            description: "GENTASOLON CREAM adalah obat yang digunakan untuk mengobati penyakit kulit seperti manifestasi inflamasi yang disertai infeksi oleh bakteri tertentu. Gentasolon mengandung zat aktif gentamicin. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.",
            price: 18800,
            unit: "tube",
            stock: 95,
            ruleUse: "dioleskan pada bagian yang sakit",
            dosis: "2-3 kali sehari",
            image: "/images/obat/obat6.jpg"
        },
        {
            id: 7,
            title: "Acyclovir 5% Cream 5 g",
            type: "kulit",
            description: "ACYCLOVIR CREAM merupakan obat generik yang mengandung zat aktif Acyclovir. Krim ini digunakan untuk mengatasi infeksi herpes simpleks pada kulit dan selaput lendir yang biasanya berupa luka melepuh yang terjadi disekitar bibir atau wajah. Selain itu, obat ini juga digunakan untuk mengobati herpes genital dan labial awal serta rekuren. ACYCLOVIR CREAM bekerja dengan menurunkan kemampuan virus dalam menggandakan diri, yaitu melalui penghambatan DNA polymerase dan replikasi DNA virus, sehingga mencegah pembentukan DNA virus tanpa mempengaruhi sel normal (sel tubuh). Dalam penggunaan obat ini HARUS SESUAI DENGAN PETUNJUK DOKTER.",
            price: 5600,
            unit: "tube",
            stock: 96,
            ruleUse: "dioleskan pada area yang sakit",
            dosis: "oleskan 5 kali sehari",
            image: "/images/obat/obat7.jpg"
        },
        {
            id: 8,
            title: "Erlamycetin 1% Salep Mata 3.5 g",
            type: "mata",
            description: "ERLAMYCETIN 1% SALEP MATA adalah salep antibiotik steril untuk mata yang mengandung Chloramphenicol 1%. Chloramphenicol adalah antibiotik spektrum luas yang bersifat bakteriostatik. Obat ini efektif terhadap bakteri gram positif dan gram negatif yang aerob dan anaerob, kecuali Pseudomonas aeruginosa. Obat ini bekerja dengan cara menghambat sintesis protein bakteri. Obat ini berfungsi untuk mengobati mata infeksi seperti iritis, konjungtivitis, keratitis, dakriositis, dan infeksi mata lain yang sensitif terhadap Chloramphenicol. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.",
            price: 9200,
            unit: "tube",
            stock: 255,
            ruleUse: "oleskan pada mata",
            dosis: "3 kali sehari",
            image: "/images/obat/obat8.jpg"
        },
        {
            id: 9,
            title: "Cendo Lyters Mindose 0.6 ml",
            type: "mata",
            description: "CENDO LYTEERS merupakan obat tetes mata yang mengandung Sodium Chloride dan Potassium Chloride. Obat ini digunakan untuk melumasi serta menyejukkan pada mata kering akibat kekurangan sekresi air mata atau teriritasi karena kondisi lingkungan, penggunaan contact lens, dan terdapat lendir berlebih pada mata.",
            price: 20200,
            unit: "strip",
            stock: 255,
            ruleUse: "teteskan pada mata yang sakit",
            dosis: "3-4 kali sehari",
            image: "/images/obat/obat9.jpg"
        },
        {
            id: 10,
            title: "Bear Brand Susu",
            type: "COVID-19",
            description: "BEAR BRAND merupakan 100% susu sapi murni siap konsumsi yang telah mengalami proses sterilisasi tanpa penambahan bahan pengawet didalamnya. Susu murni yang terkandung di dalamnya dapat membantu menjaga kesehatan tubuh.",
            price: 9400,
            unit: "kaleng",
            stock: 200,
            ruleUse: "Dapat langsung di minum, dalam keadaan hangat ataupun dingin",
            dosis: "Dikonsumsi sesuai kebutuhan",
            image: "/images/obat/obat1.jpg"
        },
        {
            id: 11,
            title: "Natur-E 100 IU 10 Kapsul",
            type: "COVID-19",
            description: "NATUR-E 100 IU 16 KAPSULmerupakan suplemen yang mengandung Vitamin E yang terbukti alami, aman serta sehat untuk menjaga kesehatan dan kecantikan kulit. Suplemen ini digunakan untuk membantu memenuhi kebutuhan vitamin E.",
            price: "15900",
            unit: "box",
            stock: "300",
            ruleUse: "dikonsumsi setelah makan",
            dosis: "1-3 kapsul sehari",
            image: "/images/obat/obat2.jpg"
        },
        {
            id: 12,
            title: "Oxycan Red Kaleng",
            type: "COVID-19",
            description: "OXYCAN GREEN KALENG merupakan oksigen yang di kemas dalam tabung kecil yang mudah di bawa dan digunakan. Oxycan membantu mengembalikan kadar oksigen tubuh pada tingkat normal dan dapat digunakan sebagai pertolongan pertama saat tubuh kekurangan oksigen ketika mengalami kelelahan, olahraga berat, stress, pada tempat tinggi, kualitas udara yang buruk, sesak napas, maupun asma.",
            price: 41600,
            unit: "kaleng",
            stock: 400,
            ruleUse: "Buka tutup kecil bagian atas kaleng. Lepaskan penutup dan lekatkan pada kepala kaleng sebagai masker. Tutup hidung dengan masker. Tekan kepala kaleng dan hirup dalam-dalam selama 2 detik.",
            dosis: "digunakan sesuai kebutuhan",
            image: "/images/obat/obat3.jpg"
        }
    ]

    const [email, setemail] = useState(null)
    const [fromKeranjang, setfromKeranjang] = useState(null)
    const value = {
        email,
        setemail,
        blogs,
        obats,
        fromKeranjang,
        setfromKeranjang
    }

    return (
        <AddContext.Provider value={value}>
            {children}
        </AddContext.Provider>
    )
}
