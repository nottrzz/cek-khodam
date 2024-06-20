const khodamList =[
    "khodam macan putih",
    "khodam free fire",
    "khodam mobilejen",
    "khodam rawarontek",
    "khodam haci elit",
    "khodam ular black mamba",
    "khodam meong",
    "khodam macan pink",
    "khodam macan hitam",
    "khodam singa",
]

//fungsi untuk melihat khodam secara acak

function pilihKhodam(event){
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; //menghapus hasil sebelumnya 
    if (nama){
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamTerpilih = khodamList[randomIndex];
        resultDiv.textContent = `nama anda adalah ${nama} dan khodam anda adalah ${khodamTerpilih}.`

        //menghapus setelah 5detik kntlll lah bgst susah bet

        setTimeout(() => {
            resultDiv.textContent ="";
        }, 50000);
    } else{
        resultDiv.textContent ="nama tidak boleh kosong";
    }
}

// membuka event listener ke form

document.getElementById("khodamForm").addEventListener("submit", pilihKhodam);

alert('oioi');
console.log('bismillah')