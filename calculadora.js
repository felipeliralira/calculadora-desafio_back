function gerar(){
    let num = Number(document.getElementById('numero')).value;
    let lista = document.getElementById('lista');
    lista.innerHTML = "";

    for(let i=1; let <= 10; i++){
        let item = document.createElement("li");
        item.innerText = num + "X" + i + "=" + (num * i);
        lista.appendChild(item);
    }
}