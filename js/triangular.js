function triangular(){
    const b = document.getElementById('base');
    const h = document.getElementById('height');

    const bText = b.value;
    const hText = h.value;

    const bTextNum = parseFloat(bText);
    const hTextnum = parseFloat(hText);
    const ans = 0.5 * bTextNum * hTextnum;

    const areaIs = document.getElementById('area');
    areaIs.innerText = ans;

    b.value = '';
    h.value = '';

}