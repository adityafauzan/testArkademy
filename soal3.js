const data = '48172a94'
let nomor = 0
function jadiNomor(){
    nomor = parseInt(data.replace(/[^0-9]/g,''))
    nomor = Array.from(String(nomor),Number)
    console.log(data)
    console.log(nomor.sort((a,b)=> a - b))
}

jadiNomor()


