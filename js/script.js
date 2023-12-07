function hitungLuas(){
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let hitungLuas = 0.5*parseInt(alas)*parseInt(tinggi);
    document.getElementById("luas").value = hitungLuas;
}

function clearFieldLuas(){
    let alas = document.getElementById("alas").value = null;
    let tinggi = document.getElementById("tinggi").value = null;
    let hitungLuas = document.getElementById("luas").value = null;
}

function hitungKeliling(){
    let sisiA = document.getElementById("sisiA").value;
    let sisiB = document.getElementById("sisiB").value;
    let sisiC = document.getElementById("sisiC").value;
    let hitungKeliling = parseInt(sisiA)+parseInt(sisiB)+parseInt(sisiC);
    document.getElementById("keliling").value = hitungKeliling;
}

function clearFieldKeliling(){
    let sisiA = document.getElementById("sisiA").value = null;
    let sisiB = document.getElementById("sisiB").value = null;
    let sisiC = document.getElementById("sisiC").value = null;
    let hitungKeliling = document.getElementById("keliling").value = null;
}
