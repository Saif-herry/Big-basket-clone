import React, { useState } from 'react'
import Crd from './Crd'
import "./Bigbasket.css"
import foodOilAndMasala from './Foodgrain_Store'
import { Checkbox } from './Checkbox'
import { Slider } from '../Home/Slider/UpperSlider'
// import { useDispatch, useSelector } from 'react-redux'
// import { sorted_data } from '../Redux/action'
export const Mcard = () => {
  
  const [high, setHigh]=useState(false)
  const [low, setLow]=useState(false)
  // const dispatch=useDispatch()
  // const sortedData=useSelector(state=>state.sortedData)
  // console.log(sortedData,"sdata");
  const handleSort= (e)=>{
    if(e.target.value ==="h2l"){
      const sdata=foodOilAndMasala.sort((a,b)=>{
        return b.productprice-a.productprice
      })
      setHigh(true)
    //  sorted_data(dispatch,sdata)
    }
    else if(e.target.value ==="l2h"){
      const sdata=foodOilAndMasala.sort((a,b)=>{
        return a.productprice-b.productprice
      })
      // sorted_data(dispatch,sdata)
      setLow(true)
      setHigh(false)
    }
  }

  return (
    <>
    <div style={{width:"77%",margin:"auto"}}>
    <Slider imgs={[
                'https://www.bigbasket.com/media/uploads/banner_images/YXNP350_1200x300_290322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/YXNP316_1200x300_290322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/YXNP492_1200x300_290322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/YXNP333_1200x300_290322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/YXPL3231_25thapril.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/l1p_cmc_m_tataneu_300_100422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/YXTT485_1200x300_230422.jpg',
                  'https://www.bigbasket.com/media/uploads/banner_images/YXPL3093_YXPL3095_YXPL3096_YXPL3103_YXPL3117_300_250422.jpg',
                  'https://www.bigbasket.com/media/uploads/banner_images/YXPL3093_YXPL3095_YXPL3096_YXPL3103_YXPL3117_300_250422.jpg'
            ]}/>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"30% 68%"}}>
        <div className="sidebar_div">
          <Checkbox/>
        </div>
      <div>
      <select style={{height:'50px',borderRadius:'10px'}} onClick={handleSort}>
              <option value="rev">Relevance</option>
              <option value="h2l">High To Low</option>
              <option value="l2h">Low To High</option>
              <option value="rate">Costomer Ratings</option>
              <option value="new">New Arrival</option>
              <option value="brand">Brand Name</option>
          </select>
    
        <div className='main'>
    {foodOilAndMasala.map((val)=>{
      return(
        <Crd key={val.id} OFF={val.OFF}  QtyPiece={val.QtyPiece} QtyPieceForOneElement={val.QtyPieceForOneElement} productName={val.productName}  productprice={val.productprice} StrikePrice={val.StrikePrice} Brand={val.Brand} Date={val.Date} image={val.image}  />
      )
    })

    }
    </div>
    </div>
        </div>

      
    
    
    
    
    </>
  )
}
