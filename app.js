
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


    

    
//  document.getElementById('calculate-button').addEventListener('click',function(){
    
   
//    const incomeInput=document.getElementById('income-input');
//     const inputAmountText=incomeInput.value;
//     const incomeAmount=parseFloat(inputAmountText);
   
// // //    current income
//      const incomeTotal=document.getElementById('remaining-total');
//      const incomeTotaltext=incomeTotal.innerText;
//      const previousIncomeTotal=parseFloat(incomeTotaltext);
//      const incomeTotalTotal=previousIncomeTotal+incomeAmount;
//      incomeTotal.innerText=incomeTotalTotal;
//      incomeInput.value='';
//  })

    // 
    
    document.getElementById('save-btn').addEventListener('click',function(){

        
        const costInput=document.getElementById('percent-input');
       
      const inputCostText=costInput.value;
       const costAmount=parseFloat(inputCostText);
  
// //  //   current income
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
    const balanceSubTotal=previouscostTotal+costAmount;
    costTotal.innerText=balanceSubTotal;
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
    costInput.value='';

    const rbalanceTotal=document.getElementById('balance-total');
    const rbalanceTotaltext=rbalanceTotal.innerText;
    const rpreviousBalanceTotal=parseFloat(rbalanceTotaltext);
    let rsubTotalBalance=rpreviousBalanceTotal-totalCost; 
    
    rbalanceTotal.innerText=rsubTotalBalance;

    
        const balanceTotal=document.getElementById('remaining-total');
    const balanceTotaltext=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotaltext);
    let subTotalBalance=previousBalanceTotal-totalCost; 
    
    balanceTotal.innerText=subTotalBalance;

    

    


    // update balance
    
    

    
  
    


    document.getElementById('save-btn').addEventListener('click',function(){

        
        const costInput=document.getElementById('percent-input');
       
      const inputCostText=costInput.value;
       const costAmount=parseFloat(inputCostText);

       
// //  //   current income
      const costTotal=document.getElementById('saving-amount');
     const costTotaltext=costTotal.innerText;
      let  previouscostTotal=parseFloat(costTotaltext);
      let svingPercent=costAmount/100;
     let savings=svingPercent*incomeTotalTotal;
      let totalParcent=previouscostTotal+savings;
      costTotal.innerText=totalParcent;
      


     


   costInput.value='';
   


//     const incomeInput=document.getElementById('balance-total');
//     const inputAmountText=incomeInput.value;
//     const incomeAmount=parseFloat(inputAmountText);
   
// // //    current income
//      const incomeTotal=document.getElementById('remaining-total');
//      const incomeTotaltext=incomeTotal.innerText;
//      const previousIncomeTotal=parseFloat(incomeTotaltext);
//    const incomeTotalTotal=previousIncomeTotal+incomeAmount;
//      incomeTotal.innerText=incomeTotalTotal;
//      incomeInput.value='';

    
    


 
    
     const balanceTotal=document.getElementById('remaining-total');
     const balanceTotaltext=balanceTotal.innerText;
     const previousBalanceTotal=parseFloat(balanceTotaltext);
     let rsubTotalBalance=previousBalanceTotal-totalParcent;
    
     balanceTotal.innerText=rsubTotalBalance;

     

    
        
})
    

    })
    



    

    
    


   