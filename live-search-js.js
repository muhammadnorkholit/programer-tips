
// mengambil elemenet input dengan id
document.querySelector("#s").addEventListener("input", function () {
//             mengambil elemenet list yang memiliki class data
            let data = document.querySelectorAll(".data")
//             melooping element list dengan foreach
            data.forEach(e => {
//              mengambil value dari element inputan dan merubahnya menjadi kecil dengan function toLowerCase
                let data = document.querySelector("#s").value.toLowerCase()
//                 mengambil semua content yang berisi text dari element yang di looping
                let key = e.textContent

//                 melakukan pengecekan dengan menggunakan method incudes()   
                if (key.toLowerCase().includes(data.toLowerCase())) {
//                             jika ada style display di kosongi
                    e.style.display = ""
                } else {
//                             jika tidak ada display menjadi none
                    e.style.display = "none"

                }
            })
        })
