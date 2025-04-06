//New
"use client"
import Casetype from '@/hooks/casetype';
import Country from '@/hooks/country';
import departmentAutocomplete from '@/hooks/departmentAutocomplete';
import DistrictStateId from '@/hooks/districtStateId';
import Establishment from '@/hooks/establishment';
import Relation from '@/hooks/relation';
import Specialtype from '@/hooks/specialtype';
import State from '@/hooks/state';
import SubdistrictDistrictId from '@/hooks/subdistrictDistrictId';
import VillageSubdistrictId from '@/hooks/villageSubdistrictId';
import { relative } from 'path';
import { useState } from 'react';

const Filing = () => {
  const {
    estbValue,
    setEstbValue,
    estbOptions
  }=Establishment();

  const {
    casetypeValue,
    setCasetypeValue,
    casetypeOptions
  }=Casetype();

  const {
     specialtypeOptions,
    specialtypeValue,
    setSpecialtypeValue
  }=Specialtype();

  const {
    relationValue,
    setRelationValue,
     relationOptions
  }= Relation();

  const {
    countryValue,
    setCountryValue,
     countryOptions
  }=Country();

  const {
    stateValue,
    setStateValue,
 stateOptions
  }=State();

  const {
    districtOptions,
    districtValue,
    setDistrictValue
  }=DistrictStateId(Number(stateValue));

  const {
    subdistrictOptions,
    subdistrictValue,
    setSubDistrictValue
  }=SubdistrictDistrictId(Number(districtValue));

  const {
    villageOptions,
    villageValue,
    setVillageValue
  }=VillageSubdistrictId(Number(subdistrictValue));

  const {
    stateValue:stateoValue,
    setStateValue:setStateoValue,
    stateOptions:stateoOptions
  }=State();

  const {
    districtOptions:districtoOptions,
    districtValue:districtoValue,
    setDistrictValue:setDistrictoValue
  }=DistrictStateId(Number(stateoValue));

  const {
    subdistrictOptions:subdistrictoOptions,
    subdistrictValue:subdistrictoValue,
    setSubDistrictValue:setSubDistrictoValue
  }=SubdistrictDistrictId(Number(districtoValue));

  const {
    villageOptions:villageoOptions,
    villageValue:villageoValue,
    setVillageValue:setVillageoValue
  }=VillageSubdistrictId(Number(subdistrictoValue));

  const {
    query,
    setQuery,
    suggestions,
    loading,
    handleSelect,
    selectedOption,
    handleInputChange
  }=departmentAutocomplete();


  
const [petitionerType,setPetitionerType]=useState<string>('');
const [gender,setGender]=useState<string>('');
  return (
     <>
        <div className="card">
  <div className="card-header bg-dark text-white">
   Case Details
  </div>
  <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <label htmlFor="ddl_establishment" className="control-label"><b>Establishment</b></label>
            <select name="ddl_establishment" id="ddl_establishment" className="form-select form-select-sm" onChange={(e)=>setEstbValue(e.target.value)} value={estbValue}>
               <option value="">Select</option>
              {
                estbOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
              }
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="ddl_casetype" className="control-label"><b>Case Type</b></label>
            <select name="ddl_casetype" id="ddl_casetype" className="form-select form-select-sm" value={casetypeValue} onChange={(e)=>setCasetypeValue(e.target.value)}>
               <option value="">Select</option>
               {
                casetypeOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
          </div>
          <div className="col-sm-2">
          <label htmlFor="txt_tot_page" className="control-label"><b>Total No. of Pages in file</b></label>
          <input type="text" name="txt_tot_page" id="txt_tot_page" className="form-control form-control-sm" placeholder="Total Pages"/>
          </div>

          <div className="col-sm-2">
          <label htmlFor="ddl_spl_type" className="control-label"><b>Special Type</b></label>
          <select name="ddl_spl_type" id="ddl_spl_type" className="form-select form-select-sm" value={specialtypeValue} onChange={(e)=>setSpecialtypeValue(e.target.value)}>
               <option value="">Select</option>
               {
                specialtypeOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-12 mt-2">
            
          <div className="alert alert-info mt-1">
         <label className='mx-4'>Petitioner Individual / Dept.:</label> 
          <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_i_d" id="chk_individual" value="I" onChange={(e)=>setPetitionerType(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_individual">Individual</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_i_d" id="chk_d1" value="D1" onChange={(e)=>setPetitionerType(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_d1">State Department</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_i_d" id="chk_d2" value="D2" onChange={(e)=>setPetitionerType(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_d2">Central Department</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_i_d" id="chk_d3" value="D3" onChange={(e)=>setPetitionerType(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_d3">Other Organization</label>
</div>
          </div>
          </div>
        </div>

        <div className={`row ${petitionerType==="I" ? "":"d-none"}`} id="dv_individual">
          <div className="col-sm-3">
          <label htmlFor="txt_pet_name" className="control-label"><b>Name</b></label>
          <input type="text" name="txt_pet_name" id="txt_pet_name" className="form-control form-control-sm" placeholder="Total Pages"/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_relation" className="control-label"><b>Relation</b></label>
            <select name="ddl_relation" id="ddl_relation" className="form-select form-select-sm" value={relationValue} onChange={(e)=>setRelationValue(e.target.value)}>
               <option value="">Select</option>
               {
                relationOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
        </div>
        <div className="col-sm-3">
          <label htmlFor="txt_relationname" className="control-label"><b>Father/Husband</b></label>
          <input type="text" name="txt_relationname" id="txt_relationname" className="form-control form-control-sm" placeholder="Father/Husband Name"/>
          </div>
        
        <div className="col-sm-3">
        <label  className="control-label d-block"><b>Gender</b></label>
            <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_gender" id="chk_male" value="M" onChange={(e)=>setGender(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_male">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_gender" id="chk_female" value="F" onChange={(e)=>setGender(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_female">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="chk_gender" id="chk_na" value="N" onChange={(e)=>setGender(e.target.value)}/>
  <label className="form-check-label" htmlFor="chk_d2">NA</label>
</div>
        </div>
        <div className="col-sm-3">
          <label htmlFor="txt_age" className="control-label"><b>Age</b></label>
          <input type="text" name="txt_age" id="txt_age" className="form-control form-control-sm" placeholder="Age"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_occupation" className="control-label"><b>Occupation/Dept:</b></label>
          <input type="text" name="txt_occupation" id="txt_occupation" className="form-control form-control-sm" placeholder="Occupation"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_address" className="control-label"><b>Address</b></label>
          <input type="text" name="txt_address" id="txt_address" className="form-control form-control-sm" placeholder="Address"/>
          </div>
          <div className="col-sm-3">
        <label htmlFor="ddl_country" className="control-label"><b>Country</b></label>
            <select name="ddl_country" id="ddl_country" className="form-select form-select-sm" value={countryValue} onChange={(e)=>setCountryValue(e.target.value)}>
               <option value="">Select</option>
               {
                countryOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_state" className="control-label"><b>State</b></label>
            <select name="ddl_state" id="ddl_state" className="form-select form-select-sm" value={stateValue} onChange={(e)=>setStateValue(e.target.value)}>
               <option value="">Select</option>
               {
                stateOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_district" className="control-label"><b>District</b></label>
            <select name="ddl_district" id="ddl_district" className="form-select form-select-sm" value={districtValue} onChange={(e)=>setDistrictValue(e.target.value)}>
               <option value="">Select</option>
             {  
             districtOptions.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
               ))
              }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_subdistrict" className="control-label"><b>Sub District</b></label>
            <select name="ddl_subdistrict" id="ddl_subdistrict" className="form-select form-select-sm" value={subdistrictValue} onChange={(e)=>setSubDistrictValue(e.target.value)}>
               <option value="">Select</option>
             {  
             subdistrictOptions.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
               ))
              }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_village" className="control-label"><b>Village</b></label>
            <select name="ddl_village" id="ddl_village" className="form-select form-select-sm" value={villageValue} onChange={(e)=>setVillageValue(e.target.value)}>
               <option value="">Select</option>
             {  
             villageOptions.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
               ))
              }
            </select>
        </div>
        <div className="col-sm-3">
          <label htmlFor="txt_pincode" className="control-label"><b>Pincode</b></label>
          <input type="text" name="txt_pincode" id="txt_pincode" className="form-control form-control-sm" placeholder="Pincode"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_mobileno" className="control-label"><b>Mobile No.</b></label>
          <input type="text" name="txt_mobileno" id="txt_mobileno" className="form-control form-control-sm" placeholder="Mobile No."/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_emailid" className="control-label"><b>Email Id</b></label>
          <input type="text" name="txt_emailid" id="txt_emailid" className="form-control form-control-sm" placeholder="Email Id"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_totpet" className="control-label"><b>Total Petitioner</b></label>
          <input type="text" name="txt_totpet" id="txt_totpet" className="form-control form-control-sm" placeholder="Total Petitioner"/>
          </div>
        </div>

        <div className={`row  ${petitionerType==="D1" ? "":"d-none"}`} id="dv_organization">
        <div className="col-sm-3 ">
          <label htmlFor="txt_department" className="control-label"><b>Department</b></label>
          <input type="text" name="txt_department" id="txt_department" className="form-control form-control-sm"  placeholder="Department" value={query} onChange={handleInputChange}/>
          
          {
            suggestions.length>0 && (
              <ul className='absolute z-50 bg-white border shadow-lg rounded-md max-h-40 overflow-y-auto w-full' >
                {
                  suggestions.map((item)=>(
                    <li key={item.id} className='px-4 py-2 cursor-pointer hover:bg-gray-100' onClick={()=>handleSelect(item)}>
                      {item.name}
                    </li>
                  ))
                }
              </ul>
            )
          }
{ loading && <p className='absolute left-0 mt-2 text-gray-500 bg-white p-1 z-50'>Loading..</p> }
{selectedOption && (
        <div className="mt-2 text-sm text-gray-600">
          <strong>Selected:</strong> {selectedOption.name} (ID: {selectedOption.id})
        </div>
      )}
   
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_post" className="control-label"><b>Post</b></label>
          <input type="text" name="txt_post" id="txt_post" className="form-control form-control-sm" placeholder="Post"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_statedepartment" className="control-label"><b>State Department</b></label>
          <input type="text" name="txt_statedepartment" id="txt_statedepartment" className="form-control form-control-sm" placeholder="State Department"/>
          </div>

          <div className="col-sm-3">
          <label htmlFor="txt_address_o" className="control-label"><b>Address</b></label>
          <input type="text" name="txt_address_o" id="txt_address_o" className="form-control form-control-sm" placeholder="Address"/>
          </div>
          <div className="col-sm-3">
        <label htmlFor="ddl_country_o" className="control-label"><b>Country</b></label>
            <select name="ddl_country_o" id="ddl_country_o" className="form-select form-select-sm" value={countryValue} onChange={(e)=>setCountryValue(e.target.value)}>
               <option value="">Select</option>
               {
                countryOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_state_o" className="control-label"><b>State</b></label>
            <select name="ddl_state_o" id="ddl_state_o" className="form-select form-select-sm" value={stateoValue} onChange={(e)=>setStateoValue(e.target.value)}>
               <option value="">Select</option>
               {
                stateoOptions.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))
               }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_district_o" className="control-label"><b>District</b></label>
            <select name="ddl_district_o" id="ddl_district_o" className="form-select form-select-sm" value={districtoValue} onChange={(e)=>setDistrictoValue(e.target.value)}>
               <option value="">Select</option>
             {  
             districtoOptions.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
               ))
              }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_subdistrict_o" className="control-label"><b>Sub District</b></label>
            <select name="ddl_subdistrict_o" id="ddl_subdistrict_o" className="form-select form-select-sm" value={subdistrictoValue} onChange={(e)=>setSubDistrictoValue(e.target.value)}>
               <option value="">Select</option>
             {  
             subdistrictoOptions.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
               ))
              }
            </select>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ddl_village_o" className="control-label"><b>Village</b></label>
            <select name="ddl_village_o" id="ddl_village_o" className="form-select form-select-sm" value={villageoValue} onChange={(e)=>setVillageoValue(e.target.value)}>
               <option value="">Select</option>
             {  
             villageoOptions.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
               ))
              }
            </select>
        </div>
        <div className="col-sm-3">
          <label htmlFor="txt_pincode_o" className="control-label"><b>Pincode</b></label>
          <input type="text" name="txt_pincode_o" id="txt_pincode_o" className="form-control form-control-sm" placeholder="Pincode"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_mobileno_o" className="control-label"><b>Mobile No.</b></label>
          <input type="text" name="txt_mobileno_o" id="txt_mobileno_o" className="form-control form-control-sm" placeholder="Mobile No."/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_emailid_o" className="control-label"><b>Email Id</b></label>
          <input type="text" name="txt_emailid_o" id="txt_emailid_o" className="form-control form-control-sm" placeholder="Email Id"/>
          </div>
          <div className="col-sm-3">
          <label htmlFor="txt_totpet_o" className="control-label"><b>Total Petitioner</b></label>
          <input type="text" name="txt_totpet_o" id="txt_totpet_o" className="form-control form-control-sm" placeholder="Total Petitioner"/>
          </div>
        </div>

        <div className={`row ${petitionerType==="D2" ? "":"d-none"}`} id="dv_organization1">
          <div className="col-sm-12">
            Ans2
          </div>
        </div>

        <div className={`row ${petitionerType==="D3" ? "":"d-none"}`} id="dv_organization2">
          <div className="col-sm-12">
            Ans3
          </div>
        </div>
  </div>
</div> 
     </>
  )
}

export default Filing
