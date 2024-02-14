function ellipse(){
    const r1 = document.getElementById('ellipse1');
    const r2 = document.getElementById('ellipse2');

    const ans = 3.1416 *  parseFloat(r1.value) * parseFloat(r2.value);

    const area = document.getElementById('ellipseArea');
    area.innerText = ans;
}