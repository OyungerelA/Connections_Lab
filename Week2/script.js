earningListText = [];
earningListNum = [];
spendingListText = [];
spendingListNum = [];
earningTotal = 0;
spendingTotal = 0;

window.addEventListener('load', ()=>{
    console.log('html loaded');

    let imageElem = document.getElementById('img');
    imageElem.addEventListener('click', function(){
        console.log('working');
        if (document.getElementById('container').style.flexDirection == 'row'){
            document.getElementById('container').style.flexDirection = 'row-reverse'
        }
        else{
            document.getElementById('container').style.flexDirection = 'row'
        }
    })

    // input box for entering description for earning
    let inputBoxEarnText = document.getElementById('input-earning-text');

    // capturing the input and displaying on the screen
    inputBoxEarnText.addEventListener('change', function(e){
        // let listItem1 = document.createElement('p');
        // listItem1.innerHTML = e.target.value;

        // let list1 = document.getElementById('display-earning-text');
        // list1.appendChild(listItem1);
        // e.target.value = '';
        let listItem = e.target.value;
        earningListText.push(listItem);
    })

    // input box for entering amount for earning
    let inputBoxEarnNum = document.getElementById('input-earning-number');

    // capturing the input and displaying on the screen
    inputBoxEarnNum.addEventListener('change', function(e){
        let listItem = e.target.value;
        earningListNum.push(listItem);
    })

    // input box for entering description for spending
    let inputBoxSpendText = document.getElementById('input-spending-text');

    // capturing the input and displaying on the screen
    inputBoxSpendText.addEventListener('change', function(e){
        let listItem = e.target.value;
        spendingListText.push(listItem);
        
    })
    
    // input box for entering amount for spending
    let inputBoxSpendNum = document.getElementById('input-spending-number');

    // capturing the input and displaying on the screen
    inputBoxSpendNum.addEventListener('change', function(e){
        let listItem = e.target.value;
        spendingListNum.push(listItem);
    })

    let balanceNum = document.getElementById('balance-num');

    let earningButton = document.getElementById('button-earning');
    earningButton.addEventListener('click', function(){

        if (!earningListText.length || !earningListNum.length){
            console.log('working')
            alert('Enter complete information.');
        }

        else{
            let list1 = document.getElementById('display-earning-text');
            let listItem1 = document.createElement('p');
            listItem1.innerHTML = earningListText[0];
            list1.appendChild(listItem1);
            earningListText.shift();
            document.getElementById('input-earning-text').value = '';

            let list2 = document.getElementById('display-earning-number');
            let listItem2 = document.createElement('p');
            listItem2.innerHTML = earningListNum[0];
            list2.appendChild(listItem2);
            earningTotal += parseInt(earningListNum[0]);
            earningListNum.shift();
            document.getElementById('input-earning-number').value = '';

            balanceNum.innerHTML = earningTotal-spendingTotal;

            let text=document.getElementById('balance-num');

            if ((earningTotal-spendingTotal) > 0){
                text.style.color = "#3ae067";
            }

            else if ((earningTotal-spendingTotal) < 0){
                text.style.color = "#e03a3a"
            }

            else{
                text.style.color = "#e3d72b";
            }

        }
    })

    let spendingButton = document.getElementById('button-spending');
    spendingButton.addEventListener('click', function(){

        if (!spendingListText.length || !spendingListNum.length){
            alert('Enter complete information.');
        }

        else{
            let list1 = document.getElementById('display-spending-text');
            let listItem1 = document.createElement('p');
            listItem1.innerHTML = spendingListText[0];
            list1.appendChild(listItem1);
            spendingListText.shift();
            document.getElementById('input-spending-text').value = '';

            let list2 = document.getElementById('display-spending-number');
            let listItem2 = document.createElement('p');
            listItem2.innerHTML = spendingListNum[0];
            list2.appendChild(listItem2);
            spendingTotal += parseInt(spendingListNum[0]);
            spendingListNum.shift();
            document.getElementById('input-spending-number').value = '';

            balanceNum.innerHTML = earningTotal-spendingTotal;

            let text=document.getElementById('balance-num');

            if ((earningTotal-spendingTotal) > 0){
                text.style.color = "#3ae067";
            }

            else if ((earningTotal-spendingTotal) < 0){
                text.style.color = "#e03a3a"
            }

            else{
                text.style.color = "#e3d72b";
            }
        }
    })
})