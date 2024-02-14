function pentagon(){
    const r1 = document.getElementById('pentagon1');
    const r2 = document.getElementById('pentagon2');

    const ans = 0.5 *  parseFloat(r1.value) * parseFloat(r2.value);

    const area = document.getElementById('pentagonArea');
    area.innerText = ans;
}