import { createContext, useContext, useState } from "react";


const AppContext = createContext();


export default function ContextProvider({children}){
    let [cart , setCart] = useState([])
    const addToCart = (data)=>{
        let isPresent = false;
        cart.forEach(item=>{
            if(item.id==data.id){
                isPresent = true
            }
        })
        if(isPresent){
            setCart(cart.map(item=>{
                if(item.id == data.id){
                    return {...item, count: item.count+1}
                }
                return item
            }))
        }else{
            data = {...data, count : 1}
            setCart([...cart,data])
        }
        
    }

    const incriseItem = (id)=>{
        setCart(cart.map(item=>{
            if(item.id == id){
                return {...item, count: item.count+1}
            }
            return item
        }))
    } 

    const decriseItem = (id)=>{
        setCart(cart.map(item=>{
            if(item.id == id){
                return {...item, count: item.count-1}
            }
            return item
        }))
    } 

    const removeFromCart = (id)=>{
        let newCart = cart.filter((item)=>item.id !== id)
        setCart(newCart)
    }
    return <AppContext.Provider value={{cart,addToCart,removeFromCart,incriseItem,decriseItem}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {useGlobalContext}