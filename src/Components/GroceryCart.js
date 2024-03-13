import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GroceryCart = () => {

    const [text, setText] = useState('');
    const [groceryData, setGroceryData] = useState([]);


    useEffect(() => {
        // Retrieve data from localStorage when component mounts
        const savedData = localStorage.getItem('groceryData');
        console.log('Retrieved data from localStorage:', savedData);
        if (savedData) {
            setGroceryData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        // Update localStorage whenever groceryData changes
        localStorage.setItem('groceryData', JSON.stringify(groceryData));
        console.log('Saved data to localStorage:', groceryData);
    }, [groceryData]);


    const searchText = (e) => {
        setText(e.target.value);
    }

    const onClickHandler = () => {
        let trimmedText = text.trim();
        if (trimmedText === '') {
            toast.error('Please enter a valid item.');
        } else {
            setGroceryData([...groceryData, trimmedText]);
            setText('');
            toast.success('Item added successfully.');
        }
    }

    const deleteHandler = (index) => {
        const updatedData = [...groceryData];
        updatedData.splice(index, 1);
        setGroceryData(updatedData);
        toast.warn('Item deleted.');
    }

    return (
        <>
            <div className='container'>
                <p className='para'>Grocery Bud</p>
                <div className='main-box'>
                    <div className='input-box'>
                        <input type='text' value={text} onChange={searchText} />
                        <button onClick={onClickHandler}>Add Items</button>
                    </div>

                    {groceryData.map((item, index) => (
                        <div className='container-cart' key={index}>
                            <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: "center" }}>
                                <input className='check-box' type='checkbox' />
                                <span className='line-throw'>{item}</span>
                            </div>
                            <button className='delete-btn' onClick={() => deleteHandler(index)}>delete</button>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    );
}
