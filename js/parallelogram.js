function parallelogram(){
    const pd1 = document.getElementById('pd1');
    const pd2 = document.getElementById('pd2');

    const pd1text = pd1.value;
    const pd2text = pd2.value;

    const ans = parseFloat(pd1text) * parseFloat(pd2text);
    if(!isNaN(ans)){
        const area = document.getElementById('pArea');
        area.innerText = ans;
    }

    setArea(ans,'Parallelogram')
}