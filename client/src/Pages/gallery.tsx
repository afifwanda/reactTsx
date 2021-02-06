import React, {useState} from 'react';
import '../Style.css';
import BoxColor from '../Components/boxColor';


function Gallery(){

  const [check,setCheck] = useState(true)
  const [color,setColor] = useState('')
  const [boxChecked,setBoxChecked] = useState(false)
  const [brightness,setBrightness] = useState('100%')

  const items = [
  "fe92c6", "2d6836", "53b4d6", "ffff63", 
  "155f9a", "b8bd46", "bb3b31", "51572f",
  "a34246", "06c27c", "7e3222", "0004bf",
  "0b5552", "5c0ffb", "b77aa8", "56c24f", 
  "7a0307", "6a9d73", "667a57", "538613", 
  "1e0c66", "43cd38", "050c79", "fe2dbc", 
  "5ba8ac", "e2afc2", "143e7f", "ccaee9", 
  "ef8d85", "df91bb", "98b8f7", "8fc765", 
  "ae60e2", "d427ad", "344fc9", "0858f2", 
  "304b79", "76643c", "295de3", "8c6bdd"
  ]

  const handleChange = (event:any) => {
    setColor(event.target.value);
    setCheck(false)
  };

  const handleBack = () => {
    setCheck(true)
    setBrightness('100%')
    setBoxChecked(false)
  }

  const handleBrightness = () => {
    if(boxChecked === true){
      setBrightness('100%')
      setBoxChecked(false)
    } else{
      setBoxChecked(true)
      setBrightness('60%')
    }
  }

  function setChange(){
    let selectedItems : Array<any> = [];
    for(let i = 0; i < items.length; i++){
      if(items[i] !== color){
        selectedItems.push('ffffff00')
      } else{
        selectedItems.push(color)
      }
    }
    return selectedItems
  }

  


  
  return(
    <div className='layout'>
      <h2>Color Picker</h2>
      <div className='row'>
        <div>
        <select
        className='select'
        onChange={handleChange}
        >
          {
            items.map((element)=>{
              return <option value={element}>{element}</option>
            })
          }          
        </select>
        {!check ? <button 
          className='button'
          onClick={handleBack}>
          Back
          </button> : <></>}
        </div>
        <div>
          {!check ? <label>
            <input type="checkbox"
            className='check'
            onClick={handleBrightness}
            />
            Darker
          </label> : <></>
          }
        </div>
      </div>
      <div className='container'>
        {
        check ?
        items.map((element)=>{
          return <BoxColor color={element} brightness={brightness} />
        })
        :
        setChange().map((element)=>{
          return <BoxColor color={element} brightness={brightness} />
        }) 
        }
      </div>
    </div>
  )
}

export default Gallery