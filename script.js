// document.getElementById("increase-ticket").addEventListener("click",function(){
// const ticketInput = document.getElementById("firstclass-count");
// const ticketCount = parseInt(ticketInput.value);
// const newTicketCount = ticketCount + 1;
// ticketInput.value = newTicketCount;
// const ticketPrice = newTicketCount * 150;
// calculateTotal()


// document.getElementById("decrease-ticket").addEventListener("click",function(){
// const ticketInput = document.getElementById("firstclass-count");
// const ticketCount = parseInt(ticketInput.value);
// const newTicketCount = ticketCount - 1;
// ticketInput.value = newTicketCount;
// const ticketPrice = newTicketCount * 150;
// calculateTotal()

// function firstclassHandle(isIncrease){
// const ticketInput = document.getElementById("firstclass-count");
// const ticketCount = parseInt(ticketInput.value);
// // const newTicketCount = ticketCount - 1;
// let newTicketCount = ticketCount
// if(isIncrease == true)
// {
//   newTicketCount = ticketCount + 1;
// }
//   if(isIncrease == false && ticketCount > 0)
//   {
//     newTicketCount = ticketCount - 1; 
//   }
// ticketInput.value = newTicketCount;
// const ticketPrice = newTicketCount * 150;
// }




// document.getElementById("add-ticket").addEventListener("click",function(){
// // const ticketInput = document.getElementById("economy-count");
// // const ticketCount = parseInt(ticketInput.value);
// // const newTicketCount = ticketCount + 1;
// // ticketInput.value = newTicketCount;
// // const ticketPrice = newTicketCount * 100;
// calculateTotal()

// document.getElementById("min-ticket").addEventListener("click",function(){

// calculateTotal()


// function economyHandle(isIncrease){
  
// const ticketInput = document.getElementById("economy-count");
// const ticketCount = parseInt(ticketInput.value);
// // const newTicketCount = ticketCount - 1;
// let newTicketCount = ticketCount
// if(isIncrease == true)
// {
//   newTicketCount = ticketCount + 1;
// }
//   if(isIncrease == false && ticketCount > 0)
//   {
//     newTicketCount = ticketCount - 1; 
//   }
// ticketInput.value = newTicketCount;
// const ticketPrice = newTicketCount * 100;
// }



function ticketHandle(ticket, isIncrease){
const ticketInput = document.getElementById(ticket + "-count");
const ticketCount = parseInt(ticketInput.value);
// const newTicketCount = ticketCount - 1;
let newTicketCount = ticketCount
if(isIncrease == true)
{
  newTicketCount = ticketCount + 1;
}
  if(isIncrease == false && ticketCount > 0)
  {
    newTicketCount = ticketCount - 1; 
  }
ticketInput.value = newTicketCount;
const ticketPrice = newTicketCount * 100;
calculateTotal()
}



function calculateTotal()
{
  const ticketInput = document.getElementById("firstclass-count");
  const ticketCount = parseInt(ticketInput.value);
  
  const economyInput = document.getElementById("economy-count");
  const economyCount = parseInt(economyInput.value);
  
  const subTotal = ticketCount * 150 + economyCount * 100;
  document.getElementById("sub-total").innerText = "$" + subTotal;
  const tax = Math.round(subTotal * 0.1);
  document.getElementById("tax").innerText = "$" + tax;
  
  const grandTotal = subTotal + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
  
}

                                                           
                                                           
  document.getElementById("ticket-confirm").addEventListener("click",function()
  {
const bookingArea = document.getElementById("bookingArea")
bookingArea.style.display = "none";
const confirmationArea = document.getElementById("confirmationArea")
confirmationArea.style.display = "block";
  })