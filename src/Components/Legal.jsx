import React, { useState } from 'react'
import { legal } from '../Data/data'
const Legal = () => {
  let [legaldata, setLegalData] =useState(legal);
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
        <h4>Legal</h4>
      </div>
      <div>
        {
          legaldata.map((litem)=>{
            return(
              <div key={litem.id}  className='mt-3'>
                <div onClick={()=> toggleAns(litem.id)} className='hover:text-orange-600  flex justify-between'>
                  <h5> {litem.question} <span className='font-extrabold cursor-pointer'> {getIcon(litem.id)} </span> </h5>
                </div>
                { show[litem.id] && <p>{litem.ans}</p>
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

export default Legal

