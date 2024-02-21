import React, { useState } from 'react'
import { partner } from '../Data/data'
const Partner = () => {
  let [faqsdata, setFaqsData] =useState(partner);
  let [show,setShow] =useState(false)

  let toggleAns=(id)=>{
    setShow((preShow)=>({
      ...preShow,
      [id] : !preShow[id]
    }))
  }

  const getIcon = (id) => (show[id] ? "-" : "+");
  return (
    <div>
      <div>
        <h4>Partner</h4>
      </div>
      <div>
        {
          faqsdata.map((pitem)=>{
            return(
              <div key={pitem.id}  className='mt-3'>
                <div onClick={()=> toggleAns(pitem.id)} className='hover:text-orange-600  flex justify-between'>
                  <h5> {pitem.question} <span className='font-extrabold cursor-pointer'> {getIcon(pitem.id)} </span> </h5>
                </div>
                { show[pitem.id] && <p>{pitem.ans}</p>
                }
                <hr />
              </div>
            )

          })
        }
      </div>

    </div>
  )
}

export default Partner

