import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    const[state,setstate]=useState(10);
    const[data,setdata]=useState([]);

useEffect(()=>{

    //console.log("third numbber is called");
    async function getdata(){
        const d=await fetch(`https://hub.dummyapis.com/employee?noofRecords= ${state}&idStarts=1001`)
        
        const res=await d.json();
        setdata(res);
    }
    getdata();

    document.title =`(${state} Employee online)`;

},[state])

console.log("first number is called")

  return (
    <div>
    <h1>useEffect</h1>
      <button onClick={()=>setstate(state+1)}>Click me{state}</button>
      {
        data.map((e,i)=>{
            return(
              
                <div  key={i}className="not">
                <h4>{e.firstName}</h4>
                <h4>{e.lastName}</h4>
                    
                </div>
            )

        })
      }
    </div>
  )
}

export default UseEffect