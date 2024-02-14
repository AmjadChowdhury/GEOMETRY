function rectangle(){
    const rectangled1 = document.getElementById('rd1');
    const rectangled2 = document.getElementById('rd2');

    const rectangled1Text = rectangled1.value;
    const rectangled2Text = rectangled2.value;

    const rectangled1TextNum = parseFloat(rectangled1Text);
    const rectangled2Textnum = parseFloat(rectangled2Text);
    const ans = rectangled1TextNum * rectangled2Textnum;

    const areaIs = document.getElementById('rectangleArea');
    areaIs.innerText = ans;

    rectangled1.value = '';
    rectangled2.value = '';

}