let ticketPackage = [
    {ticketType: "Senior", price: 49.99, numTickets: 1},
    {ticketType: "Adult", price: 79.99, numTickets: 2},
    {ticketType: "Child", price: 29.99, numTickets: 3}
    ];


function getTotalCost(currentTotal, newValue){
    return (newValue.price * newValue.numTickets) + currentTotal;
}


console.log(ticketPackage.reduce(getTotalCost));

