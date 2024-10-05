import React from 'react'
import '../Style/menu.css'
import { menu_list } from '../assets/assets'
export default function Menu({category,setcategory}) {

  return (
    <div className='explore-menu' id='exp-menu'>
        <h1>
            Explore menu
        </h1>
        <p className='exp-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, excepturi. Expedita ex nisi laborum voluptatem reprehenderit nobis obcaecati maiores fuga rem hic, molestiae earum ipsum, in culpa necessitatibus similique voluptas.
  
        </p>
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="exp-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                            
                    </div>
                )
            })
            }
        </div>
        <div>
            <hr/>
        </div>
        
    </div>
  )
}
