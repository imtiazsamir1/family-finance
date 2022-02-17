document.getElementById('calculate-button').addEventListener('click',function(){
   
   const incomeInput=document.getElementById('income-input');
   const inputAmountText=incomeInput.value;
   const incomeAmount=parseFloat(inputAmountText);
   
//    current income
    const incomeTotal=document.getElementById('balance-total');
    const incomeTotaltext=incomeTotal.innerText;
    const previousIncomeTotal=parseFloat(incomeTotaltext);
    incomeTotal.innerText=previousIncomeTotal+incomeAmount;
    incomeInput.value='';
})

    // expensess?
    document.getElementById('calculate-button').addEventListener('click',function(){
        const costInput=document.getElementById('food-cost');
   const inputCostText=costInput.value;
   const costAmount=parseFloat(inputCostText);
   
//    current income
    const costTotal=document.getElementById('expenses-total');
    const costTotaltext=costTotal.innerText;
    const previouscostTotal=parseFloat(costTotaltext);
    costTotal.innerText=previouscostTotal+costAmount;
    costInput.value='';

    })
    document.getElementById('calculate-button').addEventListener('click',function(){
        const costInput=document.getElementById('rent-cost');
   const inputCostText=costInput.value;
   const costAmount=parseFloat(inputCostText);
   
//    current income
    const costTotal=document.getElementById('expenses-total');
    const costTotaltext=costTotal.innerText;
    const previouscostTotal=parseFloat(costTotaltext);
    costTotal.innerText=previouscostTotal+costAmount;
    costInput.value='';

    })
    document.getElementById('calculate-button').addEventListener('click',function(){
        const costInput=document.getElementById('cloth-cost');
   const inputCostText=costInput.value;
   const costAmount=parseFloat(inputCostText);
   
//    current income
    const costTotal=document.getElementById('expenses-total');
    const costTotaltext=costTotal.innerText;
    const previouscostTotal=parseFloat(costTotaltext);
    let totalCost=previouscostTotal+costAmount;
    costTotal.innerText=totalCost;

    // update balance
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotaltext=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotaltext);
    balanceTotal.innerText=previousBalanceTotal-totalCost;



    costInput.value='';


    })
    

    

    
    


   