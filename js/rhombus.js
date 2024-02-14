function rhombus(){
    const r1 = document.getElementById('rhombus1');
    const r2 = document.getElementById('rhombus2');

    const ans = 0.5 *  parseFloat(r1.value) * parseFloat(r2.value);

    const area = document.getElementById('rhombusArea');
    area.innerText = ans;
}