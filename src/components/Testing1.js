import React,{useState} from 'react'

export default function Testing() {
    const onSubmit=()=>{
        const updateText1=text1.toUpperCase();
        // const updateText2=text2.toLowerCase();
        newText1(updateText1);
        document.getElementById("showTxt").innerHTML=updateText1;
        // newText2(updateText2);
    }
    const onSubmit2=()=>{
        const updateText1=text1.toLowerCase();
        // const updateText2=text2.toLowerCase();
        newText1(updateText1);
        document.getElementById("showTxt").innerHTML=updateText1;
        
        // newText2(updateText2);
    }
    const onChngText1=(event)=>{ 
        newText1(event.target.value);
    }
    // const onChngText2=(event)=>{
    //     newText2(event.target.value);
    // }
    const [text1,newText1]=useState('');
    // const [text2,newText2]=useState('Text area 2');
  return (
    <div>
        <textarea name='text' onChange={onChngText1} value={text1} rows='8' />
        {/* <textarea name='text1' onChange={onChngText2} value={text2} rows='8' /> */}
        <button onClick={onSubmit} name="button">Convert to UpperCase</button>
        <button onClick={onSubmit2} name="button1">Convert to Lowercase</button>
        <br/>
        <h2>Result</h2>
        <p>{text1.split(' ').length} words and {text1.length} characters</p>
        <p>{0.008 * text1.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p id='showTxt'></p>
        <p>{text1}</p>
    </div>
  )
}
