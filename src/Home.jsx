import Card from "./components/Card/Card";
import React from "react";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart,isLoading}) {
    
  const renderItems =() => {
        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isLoading ? [...Array(10)] : filtredItems).map((item,index) => (
          <Card
          key={index} 
          onPlus={(obj) =>onAddToCart(obj)}
          loading={isLoading}
          {...item}
          />
        ))
    }
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
  <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
  <div className="search-block d-flex">
  {searchValue && <img onClick={() => setSearchValue('')} className=" clear cu-p" src="/img/btn-remove.svg" alt="Remove" />}
  <img src="/img/search.svg"  alt="Search" />
  <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
  </div>
  </div>
  <div className="d-flex flex-wrap">
    {renderItems()}
  </div>
       </div>
    )
        
}
export default Home