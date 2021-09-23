import { createContext, useState, useContext } from "react";

const AddContext = createContext();

export function useLocalContext() {
    return useContext(AddContext);
}

export function ContextProvider({ children }) {


    const blogs = [
        {
            id: 1,
            title: "Benarkah Infeksi Saluran Kemih Harus Selalu Diatasi dengan Antibiotik?",
            description: {
                paragraf1: "infeksi saluran kemih adalah penyakit yang terjadi karena ada infeksi bakteri pada saluran kemih. Kondisi ini biasanya akan sembuh sendiri setelah beberapa hari. Namun, ISK yang parah mungkin harus ditangani dengan konsumsi obat antibiotik atau jenis obat lain.",
                paragraf2: "Sebenarnya tidak harus seperti itu. Bahkan, antibiotik biasanya hanya diberikan pada pengidap infeksi saluran kemih yang disertai dengan gejala berat atau cukup parah. Pada kondisi yang tergolong ringan, biasanya antibiotik tidak diberikan. Sebab, infeksi umumnya akan mereda dan sembuh dengan sendirinya setelah beberapa saat. ",
                paragraf3: "Minuman beralkohol yang dikonsumsi akan masuk ke darah melalui dinding lambung dan usus kecil. Selanjutnya, alkohol menyebar ke seluruh bagian tubuh termasuk otak, lalu memperlambat kerja otak serta memengaruhi cara berpikir dan berperilaku.",
                paragraf4: "Efek alkohol jangka pendek dapat ditentukan dari satuan unit alkohol yang dikonsumsi. Satu unit alkohol setara dengan 10 mililiter atau 8 gram alkohol murni, yaitu rata-rata alkohol yang dapat diproses dalam tubuh orang dewasa dalam satu jam.",
                paragraf5: "Setelah mendapatkan resep obat ISK dari dokter, terutama antibiotik, obat harus dikonsumsi sampai habis. Sebab, antibiotik yang tidak dihabiskan bisa menyebabkan bakteri yang menginfeksi kembali aktif dan memicu gejala. Hal ini terjadi karena belum semua bakteri berhasil dibasmi oleh obat antibiotik. Kabar buruknya, hal ini bisa membuat ISK kambuh dan menjadi semakin parah. "
            },
            image: "/images/blogs/blogs1.jpg",
        },
        {
            id: 2,
            title: "5 Makanan Berbahaya yang Tak Boleh Diberikan untuk Anjing",
            description: {
                paragraf1: "Makanan yang berbahaya untuk anjing berarti bahwa jenis makanan tersebut tidak boleh diberikan. Sebab, ada risiko gangguan kesehatan jika jenis-jenis makanan, seperti alpukat, anggur, serta kopi dan teh diberikan kepada anjing peliharaan. Pada tingkat yang parah, salah memberi makan bisa menyebabkan kematian pada anjing",
                paragraf2: "Sebenarnya, makanan khusus untuk anjing peliharaan sudah banyak tersedia di pasaran dan bisa dengan mudah dibeli. Jenis makanan ini sudah dirancang khusus dan dilengkapi dengan beragam nutrisi yang dibutuhkan hewan peliharaan. Namun, kamu mungkin merasa ingin memberikan jenis makanan lain untuk anjing. Maka dari itu, wajib tahu jenis-jenis makanan yang berbahaya untuk anjing!",
                paragraf3: "Selain pusing berputar, vertigo juga bisa disertai gejala lain seperti mual, muntah, keringat dingin, dan nistagmus. Lamanya gejala vertigo berlangsung tergantung pada tingkat keparahan vertigo itu sendiri. Ada yang hanya terjadi beberapa detik, menit, atau jam, ada pula yang hingga berhari-hari.",
                paragraf4: "Vertigo yang dipicu oleh stres atau rasa cemas berlebih biasanya dapat diobati dengan obat penenang, seperti benzodiazepine. Beberapa obat yang masuk ke dalam golongan benzodiazepine adalah diazepam dan alprazolam.",
                paragraf5: "jAngan membiarkan anjing mengunyah bawang merah maupun bawang putih. Sebab, keduanya masuk dalam kelompok makanan yang berbahaya untuk anjing. Kedua jenis bawang ini disebut bisa memengaruhi kondisi sel darah merah anjing peliharaan, sehingga meningkatkan risiko terjadinya anemia atau penyakit lain yang berkaitan dengan sel darah merah"
            },
            image: "/images/blogs/blogs2.jpg",
        },
        {
            id: 3,
            title: "Bakteri Masuk ke Telinga Bisa Sebabkan Otitis Media",
            description: {
                paragraf1: "infeksi telinga bagian tengah atau otitis media bisa terjadi karena infeksi yang disebabkan oleh bakteri. Bakteri bisa masuk melalui telinga atau dari saluran pernapasan yang kemudian menyebar ke telinga. Selain nyeri dan rasa tidak nyaman di telinga, orang yang terkena otitis media juga bisa mengalami sejumlah gejala lainnya.",
                paragraf2: "Namun, ketika ada bakteri yang masuk, menumpuk, dan menimbulkan infeksi di dalam telinga, ada beberapa gangguan atau penyakit yang dapat terjadi. Salah satunya adalah otitis media, yaitu infeksi pada bagian tengah telinga, tepatnya pada area belakang gendang telinga.",
                paragraf3: "Yang perlu Bunda ketahui, feses bayi berwarna gelap bisa disebabkan oleh beberapa hal. Kondisi ini memang tidak selalu berbahaya, terutama jika Si Kecil masih tampak aktif dan mau makan serta minum dengan lancar.",
                paragraf4: "BAB berwarna hitam yang disebabkan oleh penyakit-penyakit di atas juga bisa disertai dengan munculnya gejala lain, seperti bayi tampak rewel, lemas, gelisah, atau kesakitan, kulit pucat, keringat dingin, muntah, kurang atau tidak mau menyusu, dan sering mengantuk.",
                paragraf5: "Kebanyakan kasus otitis media dapat sembuh dengan sendirinya dalam beberapa hari, tanpa pengobatan khusus. Namun, jika gejala berlangsung lebih dari 3 hari, pemeriksaan ke dokter diperlukan. Dokter biasanya akan meresepkan antibiotik untuk mengatasi infeksi bakteri yang terjadi (jika otitis media disebabkan oleh bakteri), serta obat penawar rasa sakit seperti ibuprofen"
            },
            image: "/images/blogs/blogs3.jpg",
        },
        {
            id: 4,
            title: "Jangan Sampai Otitis Media Alias Infeksi Telinga Ganggu Malam Tahun Baru",
            description: {
                paragraf1: "Saat acara spesial seperti pergantian tahun, munculnya penyakit pada telinga, seperti otitis media bisa sangat menyebalkan. Kondisi ini sangat mengganggu pendengaran dan bisa sebabkan rasa sakit. Jadi sebaiknya segera diobati sebelum komplikasi yang tidak diinginkan terjadi",
                paragraf2: "Siapa saja bisa mengalami otitis media, tetapi kondisi ini lebih umum terjadi pada anak-anak berusia di bawah 10 tahun dan pada bayi berusia 6–15 bulan. Ini karena tuba eustachius atau saluran yang berfungsi untuk menyalurkan udara ke dalam telinga bagian tengah pada anak-anak memiliki ukuran yang lebih sempit, dibandingkan dengan orang dewasa. Oleh karena itulah, anak-anak lebih rentan terkena otitis media.",
                paragraf3: "Istirahat yang cukup juga tidak kalah penting untuk dilakukan guna mengelola stres saat hamil. Pasalnya saat tidur, otak akan mengendalikan saraf yang membantu tubuh untuk mengatasi stres.",
                paragraf4: "Nah, untuk membantu tidur Bumil menjadi lebih lelap dan berkualitas, cobalah pasang humidifier atau diffuser dengan aromaterapi kesukaan Bumil di kamar tidur. Bila perlu, mintalah pasangan untuk memijat Bumil sebelum tidur, agar Bumil bisa merasa lebih rileks dan cepat terlelap.",
                paragraf5: "Beberapa cara di atas hanya dilakukan untuk mengurangi risiko terkena otitis media, karena tidak ada cara yang bisa dilakukan untuk mencegah terjadinya infeksi telinga tengah. Penyakit ini perlu diwaspadai, karena gangguan otitis media bisa menyebabkan komplikasi dan tergolong sangat berbahaya, meskipun jarang terjadi."
            },
            image: "/images/blogs/blogs4.jpg",
        },
        {
            id: 5,
            title: "Cara Mengelola Diabetes Tipe 2 di Tengah Pandemi COVID-19",
            description: {
                paragraf1: "Orang yang mengidap diabetes tipe 2 adalah kelompok yang berisiko tinggi mengalami sakit yang parah dan komplikasi akibat COVID-19. Hal itu lebih mungkin terjadi bila kadar gula darah tidak terkontrol. Karena itu, penting bagi pengidap diabetes tipe 2 untuk mengelola penyakitnya tersebut dengan baik selama masa pandemi.",
                paragraf2: "Orang yang mengidap diabetes, baik tipe 1 maupun 2, berisiko tinggi mengalami sakit yang parah dan komplikasi akibat COVID-19. Itulah mengapa penting bagi pengidap diabetes untuk menjaga diri sebaik mungkin agar tidak terkena virus Corona. Selain itu, orang dengan gula darah tinggi juga dianjurkan tetap mengonsumsi obat-obatan secara rutin untuk mengendalikan kadar gula darah. Dengan menjaga kadar gula darah tetap normal, risiko pengidap diabetes untuk mengalami komplikasi COVID-19 pun bisa dikurangi. Yuk, simak cara mengelola diabetes tipe 2 selama pandemi COVID-19 di sini.",
                paragraf3: "Minuman beralkohol yang dikonsumsi akan masuk ke darah melalui dinding lambung dan usus kecil. Selanjutnya, alkohol menyebar ke seluruh bagian tubuh termasuk otak, lalu memperlambat kerja otak serta memengaruhi cara berpikir dan berperilaku.",
                paragraf4: "Efek alkohol jangka pendek dapat ditentukan dari satuan unit alkohol yang dikonsumsi. Satu unit alkohol setara dengan 10 mililiter atau 8 gram alkohol murni, yaitu rata-rata alkohol yang dapat diproses dalam tubuh orang dewasa dalam satu jam.",
                paragraf5: "Kamu yang mengidap diabetes tipe 2 juga perlu memeriksakan kadar gula darah kamu secara teratur untuk memastikan kadar gula darah kamu tetap dalam kisaran target. Dokter bisa memberi tahu kamu seberapa sering kamu perlu memeriksakan gula darah. Kamu mungkin perlu memeriksakannya sekali sehari dan sebelum atau sesudah berolahraga. Bila kamu menggunakan insulin, kamu mungkin perlu melakukannya beberapa kali sehari. Pemeriksaan gula darah bisa dilakukan dengan alat kecil di rumah yang disebut pengukur glukosa darah."
            },
            image: "/images/blogs/blogs5.jpg",
        },

    ]

    const obats = [
        {
            id: 1,
            title: "Rhea Health Tone 30 ml",
            type: "COVID-19",
            description: "RHEA HEALTH TONE merupakan suplemen yang mengandung Gardenia jasminoides oleum, Commiphora myrrha oleum, Boswellia serrata oleum, Daucus carota oleum, Foeniculum vulgarae oleum, dan Olea europaea oleum (Olive oil) yang berkhasiat untuk membantu memperbaiki sistem imunitas tubuh sebagai salah satu upaya memelihara kesehatan tubuh.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 4,
            ruleUse: "Dapat langsung di minum",
            dosis: "Dikonsumsi sesuai kebutuhan",
            image: "/images/obat/obat1.jpg"
        },
        {
            id: 2,
            title: "Stimuno Forte 10 Kapsul",
            type: "COVID-19",
            description: "STIMUNO FORTE KAPSUL merupakan sediaan fitofarmaka yang terbuat dari ekstrak tanaman Phyllanthus niruri (Meniran) yang terstandarisasi dan telah melalui berbagai uji pre-klinik da klinik. Stimuno forte adalah imunomodulator (memperbaiki sistem imun) dengan membantu merangsang tubuh memproduksi lebih banyak antibodi dan mengaktifkan sistem kekebalan tubuh agar daya tahan tubuh bekerja optimal.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 4,
            ruleUse: "dikonsumsi setelah makan",
            dosis: "1-3 kapsul sehari",
            image: "/images/obat/obat2.jpg"
        },
        {
            id: 3,
            title: "Imboost Kids Sirup 60 ml",
            type: "COVID-19",
            description: "IMBOOST KIDS SIRUP merupakan suplemen daya tahan tubuh yang bersifat imunostimulan yang berfungsi untuk menjaga kesehatan tubuh agar tidak mudah sakit. Suplemen ini mengandung Echinacea purpurea herb dry extract dan Zn Piccolinate yang bekerja cepat mengaktifkan sistem daya tahan tubuh namun tetap aman untuk dikonsumsi. Imboost akan bekerja langsung di sistem pertahanan tubuh kita dengan memperbanyak antibodi sehingga daya tahan tubuh lebih kuat melawan serangan virus.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 5,
            ruleUse: "diminum sebelum atau sesudah makan",
            dosis: "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. Dewasa dan anak diatas 12 tahun: 1 kapsul, 2 kali perhari atau setiap 12 jam.",
            image: "/images/obat/obat3.jpg"
        },
        {
            id: 4,
            title: "Stimuno Forte 30 Kapsul",
            type: "COVID-19",
            description: "STIMUNO FORTE 30 KAPSUL di gunakan untuk membantu memperbaiki sistem imun, Suplemen ini mengandung bahan aktif dari ekstrak tanaman Phyllanthus niruri L yang berfungsi sebagai imunomodulator.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 5,
            ruleUse: "Dapat langsung di minum",
            dosis: "Dikonsumsi sesuai kebutuhan",
            image: "/images/obat/obat4.jpg"
        },
        {
            id: 5,
            title: "Halowell C500 mg 30 Tablet",
            type: "COVID-19",
            description: "HALOWELL C 500 MG TABLET merupakan suplemen berbentuk tablet yang mengandung Vitamin C. Suplemen ini digunakan untuk memenuhi kebutuhan harian vitamin C tubuh.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 4,
            ruleUse: "dikonsumsi setelah makan",
            dosis: "1-3 kapsul sehari",
            image: "/images/obat/obat5.jpg"
        },
        {
            id: 6,
            title: "Rhinos Neo Drops 10 ml",
            type: "BATUK DAN FLU",
            description: "RHINOS NEO DROPS merupakan obat dengan kandungan Pseudoephedrine HCl. Obat ini dapat digunakan untuk meringankan gejala flu seperti hidung tersumbat karena pilek pada anak-anak. Pseudoephedrine mempunyai aktivitas simpatomimetik langsung maupun tidak langsung dan merupakan dekongestan saluran nafas bagian atas.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 5,
            ruleUse: "diminum sebelum atau sesudah makan",
            dosis: "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. Dewasa dan anak diatas 12 tahun: 1 kapsul, 2 kali perhari atau setiap 12 jam.",
            image: "/images/obat/obat6.jpg"
        },
        {
            id: 7,
            title: "Sanadryl DMP Sirup 120 ml",
            type: "BATUK DAN FLU",
            description: "SANADRYL DMP SIRUP merupakan obat batuk tidak berdahak yang mengandung zat aktif Dextromethorphan HBr, Difenhidramin HCl, Ammonium Klorida, Natrium Sitrat dan menthol. Sanadryl DMP digunakan untuk meringankan gejala batuk tidak berdahak yang menimbulkan rasa sakit atau batuk karena alergi. Dextromethorphan HBr sebagai antitusif yang bisa menekan refleks batuk. Difenhidramin HCl bekerja sebagai antihistamin/anti alergi untuk meredakan gejala alergi seperti bersin-bersin. Ammonium Klorida digunakan sebagai campuran dalam obat batuk yang memiliki efek sebagai pengencer dahak sehingga dapat meringankan gejala batuk tidak berdahak yang menimbulkan rasa sakit atau batuk karena alergi.",
            price: 15000,
            unit: "strip",
            stock: 235,
            rating: 4,
            ruleUse: "sesudah makan",
            dosis: "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. Dosis dewasa : 1 tablet, 3-4 kali sehari. Anak 6 - 12 tahun : 1/2 tablet, 3-4 kali sehari.",
            image: "/images/obat/obat7.jpg"
        },
        {
            id: 8,
            title: "Rohto Eyeflush 150 ml",
            type: "mata",
            description: "ROHTO EYE FLUSH merupakan cairan steril pencuci mata dengan kandungan Distilled Witch Hazel 13%, Benzalkonium Klorida, L-Menthol, dan Vitamin E. Obat ini digunakan untuk membersihkan mata, menyejukkan dan menyegarkan mata lelah, meringankan iritasi mata ringan akibat debu dan pekerjaan yang memerlukan penglihatan dekat..",
            price: 9200,
            unit: "tube",
            stock: 255,
            rating: 4,
            ruleUse: "oleskan pada mata",
            dosis: "3 kali sehari",
            image: "/images/obat/obat8.jpg"
        },
        {
            id: 9,
            title: "Alcon Tears Naturale Ii 15 ml",
            type: "mata",
            description: "ALCON TEARS NATURALE II merupakan obat tetes mata yang digunakan untuk mencegah mata terasa kering dan teiritasi yang disebabkan oleh angin, sinar matahari, pemanas atau pendingin ruangan, menggunakan layar komputer atau smartphone, membaca dan menggunakan obat-obat tertentu. Tetes mata ini digunakan untuk menjaga agar mata tetap lembab dan membantu melindungi mata dari luka dan infeksi serta mengurangi atau meringankan gejala mata kering seperti perih, gatal dan mengganjal pada mata.",
            price: 20200,
            unit: "strip",
            stock: 255,
            rating: 5,
            ruleUse: "teteskan pada mata yang sakit",
            dosis: "3-4 kali sehari",
            image: "/images/obat/obat9.jpg"
        },
        {
            id: 10,
            title: "Rhea Health Tone 30 ml",
            type: "COVID-19",
            description: "RHEA HEALTH TONE merupakan suplemen yang mengandung Gardenia jasminoides oleum, Commiphora myrrha oleum, Boswellia serrata oleum, Daucus carota oleum, Foeniculum vulgarae oleum, dan Olea europaea oleum (Olive oil) yang berkhasiat untuk membantu memperbaiki sistem imunitas tubuh sebagai salah satu upaya memelihara kesehatan tubuh.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 4,
            ruleUse: "Dapat langsung di minum",
            dosis: "Dikonsumsi sesuai kebutuhan",
            image: "/images/obat/obat1.jpg"
        },
        {
            id: 11,
            title: "Stimuno Forte 10 Kapsul",
            type: "COVID-19",
            description: "STIMUNO FORTE KAPSUL merupakan sediaan fitofarmaka yang terbuat dari ekstrak tanaman Phyllanthus niruri (Meniran) yang terstandarisasi dan telah melalui berbagai uji pre-klinik da klinik. Stimuno forte adalah imunomodulator (memperbaiki sistem imun) dengan membantu merangsang tubuh memproduksi lebih banyak antibodi dan mengaktifkan sistem kekebalan tubuh agar daya tahan tubuh bekerja optimal.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 4,
            ruleUse: "dikonsumsi setelah makan",
            dosis: "1-3 kapsul sehari",
            image: "/images/obat/obat2.jpg"
        },
        {
            id: 12,
            title: "Imboost Kids Sirup 60 ml",
            type: "COVID-19",
            description: "IMBOOST KIDS SIRUP merupakan suplemen daya tahan tubuh yang bersifat imunostimulan yang berfungsi untuk menjaga kesehatan tubuh agar tidak mudah sakit. Suplemen ini mengandung Echinacea purpurea herb dry extract dan Zn Piccolinate yang bekerja cepat mengaktifkan sistem daya tahan tubuh namun tetap aman untuk dikonsumsi. Imboost akan bekerja langsung di sistem pertahanan tubuh kita dengan memperbanyak antibodi sehingga daya tahan tubuh lebih kuat melawan serangan virus.",
            price: 21800,
            unit: "kaleng",
            stock: 200,
            rating: 5,
            ruleUse: "diminum sebelum atau sesudah makan",
            dosis: "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. Dewasa dan anak diatas 12 tahun: 1 kapsul, 2 kali perhari atau setiap 12 jam.",
            image: "/images/obat/obat3.jpg"
        },
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
