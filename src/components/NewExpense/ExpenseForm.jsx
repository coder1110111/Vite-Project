

import React, { StrictMode } from 'react';
import {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    // How multiple single state are
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        };
        console.log(enteredData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    

/*    //Multiple to One State
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     });
    // };

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredAmount: event.target.value
    //         }
    //     });
    // };

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredDate: event.target.value
    //         }
    //     });
    // };
*/

    
    return <form onSubmit={formSubmitHandler} >
        <div className='new-expense__controls'>
            <div className='new_expense__control'>
                <label>Title : </label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new_expense__control'>
                <label>Amount : </label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new_expense__control'>
                <label>Date : </label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2025-01-01" max="2026-12-31" />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;