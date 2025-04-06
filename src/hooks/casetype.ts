import React, { useEffect, useState } from 'react'

interface Option
{
   id:number;
   name:string;
}
const Casetype = () => {
    const [casetypeValue,setCasetypeValue]=useState('');
    const [casetypeOptions,setCasetypeOptions]=useState<Option[]>([]);

    useEffect(()=>{
        const fetchData=async ()=>{
           const token=localStorage.getItem("authToken");
           try 
           {
           const response=await fetch("http://15.206.60.189/erp/masters/masters_category/",{
            headers:{
                 "Content-Type": "application/json",
                "Authorization":`Token ${token}`
            }
           });
           const data: Option[]=await response.json();
           setCasetypeOptions(data);
        }
        catch(error)
        {
          console.error("Error fetching options:", error);
        }
        }
        fetchData();
    },[]);
  return {
    casetypeValue,
    setCasetypeValue,
    casetypeOptions
  }
}

export default Casetype
