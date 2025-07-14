import "./ExpenseItem.css";

function ExpenseItem() {
    /*When returning more than one element it is necessary to enclose them
    <></> This essentially acts like a container array that holds everything together into a single element
    As return can only 'return' the last element in the given elements that are not bound it is necessary to bind them into a single element;
    We can also use <div></div> to make a bigger wrapper element that wraps around multiple element*/
    // return (
    //     <>                                          
    //         <p> Food - $5</p>
    //         <p> Petrol - $20</p>
    //         <p> Movie - $10</p>
    //     </>
    // )

    /* To use basic javascript inside a .jsx file we must introduce {} brackets and give the relevant javascript within these*/
    //Introducing data
    const expenseDate = new Date(2025, 6, 15).toISOString();
    const expenseTitle = "Book";
    const expenseAmount = "100.99";
    const expenseLocation = "Delhi";
    

    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__location">Delhi</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">Rs.{expenseAmount}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;