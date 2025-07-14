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
    return (
        <div>
            <div>15 July 2025</div>
            <div>
                <h2>Book</h2>
                <div>Delhi</div>
                <div>Rs.100</div>
            </div>
        </div>
    )

}

export default ExpenseItem;