class Animate {
  animateOnScroll() {
    //   mengambil elemenet dengan nama class animate
    let animate = document.querySelectorAll(".animate");

    window.addEventListener("load", function () {
      let scrollNew = window.pageYOffset + window.innerHeight - 100;
      //   memforeach elemetn animate
      animate.forEach((e) => {
        //   mengecek jika bagian atas element lebih kecil dari bagian bawah halaman yang terlihat maka tambahkan class show
        if (
          scrollNew >= e.offsetTop &&
          scrollNew <= e.offsetTop + e.clientHeight + 500
        ) {
          e.classList.add("show");
        } else {
          // menghapus kelas show jika kondisi di atas tidak terpenuhi
          e.classList.remove("show");
        }
      });
    });

    window.addEventListener("scroll", function () {
      let scrollNew = window.pageYOffset + window.innerHeight - 100;
      //   memforeach elemetn animate
      animate.forEach((e) => {
        //   mengecek jika bagian atas element lebih kecil dari bagian bawah halaman yang terlihat maka tambahkan class show
        if (
          scrollNew >= e.offsetTop &&
          scrollNew <= e.offsetTop + e.clientHeight + 500
        ) {
          e.classList.add("show");
        } else {
          // menghapus kelas show jika kondisi di atas tidak terpenuhi
          e.classList.remove("show");
        }
      });
    });
    // mendapatkan nilai dari halaman dan mendapatkan nilai bagian bawah di kurangi 300px
  }

  animateLineBar() {
    let bar = document.querySelectorAll(".progress-box");

    window.addEventListener("load", function () {
      let scrollNew = window.pageYOffset + window.innerHeight - 100;

      bar.forEach((e) => {
        if (scrollNew >= e.offsetTop) {
          e.classList.add("show");
        }
      });
    });

    window.addEventListener("scroll", function () {
      let scrollNew = window.pageYOffset + window.innerHeight - 100;
      bar.forEach((b) => {
        if (scrollNew >= b.offsetTop) {
          b.classList.add("show");
        }
      });
    });
  }
}

// membuat objeck dari Class Animate yang akan di gunakan

// mengekport Class supaya bisa di gunakan di luar file
export default Animate;
