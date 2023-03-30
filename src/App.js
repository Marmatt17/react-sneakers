
import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';
import React from 'react';
import axios from 'axios';
import Home from './Home.jsx'
import AppContext from './context';


function App() {
  
  const[isLoading,setIsLoading] = React.useState(true);
  const [cartOpened,setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue,setSearchValue] =React.useState('');
  const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value)}
  const onAddToCart =async (obj) => {
  try {
    const findItem = cartItems.find((item) =>Number(item.parentId) ===Number(obj.id))
    if (findItem) {
      setCartItems ((prev) => prev.filter((item) => Number(item.parentId)!== Number(obj.id)))
       axios.delete(`https://63ff6213c5c800a723929700.mockapi.io/cart/${findItem.id}`);
   
    } else {
      const {data} = await axios.post('https://63ff6213c5c800a723929700.mockapi.io/cart', obj);
     
    setCartItems((prev) => [...prev,data]);
    }
  } catch (error) {
    alert('Ошибка при добавлении в корзину')
    
  }
  };
  const onAddToFavourite =(obj) => {
    axios.post('https://63ff6213c5c800a723929700.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev,obj]);
  };
  const onRemoveItem = (id) => {
    try {
    axios.delete(`https://63ff6213c5c800a723929700.mockapi.io/cart/${id}`);
setCartItems((prev) => prev.filter(item => item.id!== id))
    } catch (error) {
      alert ('Ошибка при удалении из корзины')
    }
  };
  React.useEffect(() => {   
    async function fetchData() {
      try {
      const cartResponse = await axios.get('https://63ff6213c5c800a723929700.mockapi.io/cart');
      const itemsResponse = await axios.get('https://63ff6213c5c800a723929700.mockapi.io/items');
    setIsLoading(false);
    setCartItems(cartResponse.data); 
    setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных')
      }


    }
    fetchData();
  }, []);
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
      }
  return (
    <AppContext.Provider value={{items,cartItems,isItemAdded,setCartOpened,setCartItems}}>
    <div className="wrapper clear">
      
   <Drawer 
   items={cartItems} 
   onClose={() => setCartOpened(false)} 
   onRemove={onRemoveItem} 
   opened={cartOpened}
   />
   
  <Header onClickCart={() => setCartOpened(true)} />
   
   <Home 
   items={items}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   onChangeSearchInput={onChangeSearchInput}
   onAddToFavourite={onAddToFavourite}
   onAddToCart={onAddToCart}
   cartItems={cartItems}
   isLoading={isLoading}
   />
   
    </div> 
    </AppContext.Provider>
  );
}

export default App;
