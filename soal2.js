function username(data){
    if (data.length >= 6){
        console.log(`hai user : ${data}`)
    }else {
        console.log('usernama harus lebih dari 6')
    }}

function password(data){
    if (data.length >= 7){
        console.log(`password berhasil : ${data}`)
    }else{
        console.log('password harus lebih dari 7')
    }
}
username ('coba12')
password ('p@ssW0rd9')