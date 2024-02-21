import React, { useState } from 'react'
import { faqs } from '../Data/data'
const Faqs = () => {
  let [faqsdata, setFaqsData] =useState(faqs);
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
        <h4>FAQs</h4>
      </div>
      <div>
        {
          faqsdata.map((fitem)=>{
            return(
              <div key={fitem.id}  className='mt-3'>
                <div onClick={()=> toggleAns(fitem.id)} className='hover:text-orange-600  flex justify-between'>
                  <h5 className='flex justify-between items-end'> {fitem.question} <span className='font-extrabold cursor-pointer'> {getIcon(fitem.id)} </span> </h5>
                </div>
                { show[fitem.id] && <p>{fitem.ans}</p>
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

export default Faqs

