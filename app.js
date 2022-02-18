
document.getElementById('calculate-button').addEventListener('click',function(){
    
   
   const incomeInput=document.getElementById('income-input');
   const inputAmountText=incomeInput.value;
   const incomeAmount=parseFloat(inputAmountText);
   
//    current income
    const incomeTotal=document.getElementById('balance-total');
    const incomeTotaltext=incomeTotal.innerText;
    const previousIncomeTotal=parseFloat(incomeTotaltext);
    const incomeTotalTotal=previousIncomeTotal+incomeAmount;
    incomeTotal.innerText=incomeTotalTotal;
    incomeInput.value='';
    const balanceTotal=document.getElementById('remaining-total');
     const balanceTotaltext=balanceTotal.innerText;
     const previousBalanceTotal=parseFloat(balanceTotaltext);
     let subTotalBalance=previousBalanceTotal+incomeTotalTotal;
   
     balanceTotal.innerText=subTotalBalance;


    

    

    
    document.getElementById('save-btn').addEventListener('click',function(){

        
        const costInput=document.getElementById('percent-input');
       
      const inputCostText=costInput.value;
       const costAmount=parseFloat(inputCostText);
  
// //  //  saving
       const costTotal=document.getElementById('saving-amount');
       const costTotaltext=costTotal.innerText;
       let  previouscostTotal=parseFloat(costTotaltext);
       let svingPercent=costAmount/100;
       let savings=svingPercent*incomeTotalTotal;
       let totalParcent=previouscostTotal+savings;
       costTotal.innerText=totalParcent;


     


   costInput.value='';

 
     const balanceTotal=document.getElementById('remaining-total');
     const balanceTotaltext=balanceTotal.innerText;
     const previousBalanceTotal=parseFloat(balanceTotaltext);
     let subTotalBalance=previousBalanceTotal-totalParcent;
   
     balanceTotal.innerText=subTotalBalance;     
})
     
    })  
   
 


    // expensess?
    // food input
    document.getElementById('calculate-button').addEventListener('click',function(){
        const costInput=document.getElementById('food-cost');
   const inputCostText=costInput.value;
   const costAmount=parseFloat(inputCostText);
   
//   food input total
    const costTotal=document.getElementById('expenses-total');
    const costTotaltext=costTotal.innerText;
    const previouscostTotal=parseFloat(costTotaltext);
    costTotal.innerText=previouscostTotal+costAmount;
    costInput.value='';

    })
    // rent input
    document.getElementById('calculate-button').addEventListener('click',function(){
        const costInput=document.getElementById('rent-cost');
   const inputCostText=costInput.value;
   const costAmount=parseFloat(inputCostText);
   
//    rent input total
    const costTotal=document.getElementById('expenses-total');
    const costTotaltext=costTotal.innerText;
    const previouscostTotal=parseFloat(costTotaltext);
    const balanceSubTotal=previouscostTotal+costAmount;
    costTotal.innerText=balanceSubTotal;
    costInput.value='';
    



    })
    // cloth input
    document.getElementById('calculate-button').addEventListener('click',function(){
   const costInput=document.getElementById('cloth-cost');
   const inputCostText=costInput.value;
   const costAmount=parseFloat(inputCostText);
   
   
//    cloth input total
    const costTotal=document.getElementById('expenses-total');
    const costTotaltext=costTotal.innerText;
    const previouscostTotal=parseFloat(costTotaltext);
    let totalCost=previouscostTotal+costAmount;
    costTotal.innerText=totalCost;
    costInput.value='';
// balance
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotaltext=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotaltext);
    let subTotalBalance=previousBalanceTotal-totalCost; 
    
    balanceTotal.innerText=subTotalBalance;

    // remaining balance
        const remainingBalanceTotal=document.getElementById('remaining-total');
    const remainingBalanceTotaltext=remainingBalanceTotal.innerText;
    const remainingPreviousBalanceTotal=parseFloat(remainingBalanceTotaltext);
    let reamainingSubTotalBalance=remainingPreviousBalanceTotal-totalCost; 
    
    remainingBalanceTotal.innerText=reamainingSubTotalBalance;


    })
    



    

    
    


   