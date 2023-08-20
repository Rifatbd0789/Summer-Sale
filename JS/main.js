/* First serial Products */
// Card-1
document.getElementById('card1').addEventListener('click', function(){
    const price = getTheHtmlValue('price1')
    const final = getTheHtmlValue('Total')
    const totalNumber = price + final;
    const Total = parseFloat(totalNumber).toFixed(2)
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
        checkCoupon(Total)
    })
})
// card-2
document.getElementById('card2').addEventListener('click', function(){
    const price = getTheHtmlValue('price2')
    const final = getTheHtmlValue('Total')
    const totalNumber = price + final;
    const Total = parseFloat(totalNumber).toFixed(2)
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
        checkCoupon(Total)
    })
})
// card-3
document.getElementById('card3').addEventListener('click', function(){
    const price = getTheHtmlValue('price3')
    const final = getTheHtmlValue('Total')
    const totalNumber = price + final;
    const Total = parseFloat(totalNumber).toFixed(2)
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
        checkCoupon(Total)
    })
})
/* Second serial Products*/
// Card-4
document.getElementById('card4').addEventListener('click', function(){
    const price = getTheHtmlValue('price4')
    const final = getTheHtmlValue('Total')
    const totalNumber = price + final;
    const Total = parseFloat(totalNumber).toFixed(2)
    setTheHtmlValue('Total', Total);
    createElement('Sports Back Cap');
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
        checkCoupon(Total)
    })
})
// card-5
document.getElementById('card5').addEventListener('click', function(){
    const price = getTheHtmlValue('price5')
    const final = getTheHtmlValue('Total')
    const totalNumber = price + final;
    const Total = parseFloat(totalNumber).toFixed(2)
    setTheHtmlValue('Total', Total);
    createElement('Full Jersey Set');
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
        checkCoupon(Total) 
    })
})
// card-6
document.getElementById('card6').addEventListener('click', function(){
    const price = getTheHtmlValue('price6')
    const final = getTheHtmlValue('Total')
    const totalNumber = price + final;
    const Total = parseFloat(totalNumber).toFixed(2)
    setTheHtmlValue('Total', Total);
    createElement('Sports cates');
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
        checkCoupon(Total)
    })
})
