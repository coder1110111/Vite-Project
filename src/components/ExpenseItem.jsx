//Complex Components
/*When returning more than one element it is necessary to enclose them
    <></> This essentially acts like a container array that holds everything together into a single element
    As return can only 'return' the last element in the given elements that are not bound it is necessary to bind them into a single element;
    We can also use <div></div> to make a bigger wrapper element that wraps around multiple element
*/

//JavaScript inside .jsx
    /* To use basic javascript inside a .jsx file we must introduce {} brackets and give the relevant javascript within these*/

// Props
/* 
  Props in React can be thought of like parameters in a function.
  If a function uses hardcoded values, it always returns the same result.
  But if it takes parameters, it becomes dynamic — it can work with different inputs.

  Similarly, React components become dynamic when they use props.
  The parent component passes props (as an object) like arguments,
  and the child component receives them (like parameters).

  This allows us to reuse the same component with different data.
  For example, we can use a single <ListItem /> component multiple times 
  with different text, instead of creating a separate component for each item.
*/


import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";


function ExpenseItem(props) {           //Here we recieve an Object, we name it prop; prop will hold some key-value pairs that we can use
    /* What used to be */
    // return (
    //     <>                                          
    //         <p> Food - $5</p>
    //         <p> Petrol - $20</p>
    //         <p> Movie - $10</p>
    //     </>
    // )


    //Introducing data
    // const expenseDate = props.date.toISOString();
    // const expenseTitle = props.title;
    // const expenseAmount = props.price;
    // const expenseLocation = props.location;
    

    return (            //Now Everything within this card will be taken as there children hence we need to add a line in Card.jsx ogf accessing children; else they will not show up during build
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}       {/*To give a calendar like look we cannot display it as such hence we display in a different way */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__location">{props.location}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs.{props.price}</div>
            </div>
        </Card>
    )

}

export default ExpenseItem;


