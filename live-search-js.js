
document.querySelector("#s").addEventListener("input", function () {
            let data = document.querySelectorAll(".data")
            data.forEach(e => {
                let data = document.querySelector("#s").value.toLowerCase()
                let key = e.textContent

                if (key.toLowerCase().includes(data.toLowerCase())) {
                    e.style.display = ""
                } else {
                    e.style.display = "none"

                }
            })
        })
