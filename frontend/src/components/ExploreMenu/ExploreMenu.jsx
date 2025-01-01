import React from 'react'
import './ExplorMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category, setCategory}) {


  return (
    <div className='Explore-menu' id='Explore-menu'>
      <h1>Explore our menu</h1>
      <p className='Explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satify your cravings and elevate your dining exerience , one delicious meal at a time</p>
      <div className='Explore-menu-list'>
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className='Explore-menu-list-item'>
              <img  className={category==item.menu_name?"active":""} src={item.menu_image} alt=''/>
              <p>{item.menu_name}</p>
              </div>
          )
        }
        )}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu;
