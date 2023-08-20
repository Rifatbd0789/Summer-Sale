/* First serial Products */
// Card-1
document.getElementById('card1').addEventListener('click', function(){
    const price = getTheHtmlValue('price1')
    const final = getTheHtmlValue('Total')
    const Total = price + final;
    setTheHtmlValue('Total', Total);
    createElement('K. Accessories');
    // purchase button work
    const btn = document.getElementById('Purchase');
    btn.removeAttribute('disabled');
    // coupon button work
    const btn2 = document.getElementById('Discount')
    if (Total >= 200) {
        btn2.removeAttribute('disabled')
    }
    // coupon button calculation
    document.getElementById('Discount').addEventListener('click', function(){
        // const discount = getTheHtmlValue('DiscountId')
        const coupon =getInputValue('input')
        if (coupon === 'S') {
            const discountField = Total * 20 / 100;
            setTheHtmlValue("DiscountId", discountField);
            const afterDiscount = Total - discountField;
            setTheHtmlValue('Discounted', afterDiscount);
            // console.log(afterDiscount);
        }
        else{
            alert('wrong coupon code')
        }
    })
})
// card-2
document.getElementById('card2').addEventListener('click', function(){
    const price = getTheHtmlValue('price2')
    const final = getTheHtmlValue('Total')
    const Total = price + final;
    setTheHtmlValue('Total', Total);
    createElement('K. Accessories');
    // purchase button work
    const btn = document.getElementById('Purchase');
    btn.removeAttribute('disabled');
    // coupon button work
    const btn2 = document.getElementById('Discount')
    if (Total >= 200) {
        btn2.removeAttribute('disabled')
    }
    // coupon button calculation
    document.getElementById('Discount').addEventListener('click', function(){
        // const discount = getTheHtmlValue('DiscountId')
        const coupon =getInputValue('input')
        if (coupon === 'S') {
            const discountField = Total * 20 / 100;
            setTheHtmlValue("DiscountId", discountField);
            const afterDiscount = Total - discountField;
            setTheHtmlValue('Discounted', afterDiscount);
            // console.log(afterDiscount);
        }
        else{
            alert('wrong coupon code')
        }
    })
})
// card-3
document.getElementById('card3').addEventListener('click', function(){
    const price = getTheHtmlValue('price3')
    const final = getTheHtmlValue('Total')
    const Total = price + final;
    setTheHtmlValue('Total', Total);
    createElement('Home Cooker');
    // purchase button work
    const btn = document.getElementById('Purchase');
    btn.removeAttribute('disabled');
    // coupon button work
    const btn2 = document.getElementById('Discount')
    if (Total >= 200) {
        btn2.removeAttribute('disabled')
    }
    // coupon button calculation
    document.getElementById('Discount').addEventListener('click', function(){
        // const discount = getTheHtmlValue('DiscountId')
        const coupon =getInputValue('input')
        if (coupon === 'S') {
            const discountField = Total * 20 / 100;
            setTheHtmlValue("DiscountId", discountField);
            const afterDiscount = Total - discountField;
            setTheHtmlValue('Discounted', afterDiscount);
            // console.log(afterDiscount);
        }
        else{
            alert('wrong coupon code')
        }
    })
})
