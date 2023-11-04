import React, { useEffect, useState } from 'react'
import PhoneInput from "react-phone-input-2";
import Layout from '../components/Layout'
import { fields, checkFields } from '../helpers/supportSchema'
import usePostData from '../hooks/usePostData'
import useGetData from '../hooks/useGetData'

const InputDetails = () => {

  const [test_type, set_test_type] = useState([])
  const [values, setValue] = useState(fields);
  const [formData, setFormData] = useState(null);
  const [newformData, setNewFormData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const[newTestType,setNewTestType] = useState(null);

  const {
    data: userInfoData,
    error: userInfoError,
    loading: userInfoLoading,
  } = useGetData('testtype/');

  const { data: test_type_data,
    error:test_type_error, 
    loading:test_type_loading
  } = usePostData('phptest/', formData);
  
  const { data: new_test_type_data,
    error:new_test_type_error, 
    loading:new_test_type_loading
  } = usePostData('testtype/', newformData);
  
  useEffect(() => {
    if (userInfoData) {
      let temp = []
      userInfoData.forEach((item) => {
        temp.push(item['test_type'])
      })
      set_test_type(temp)
    }
    
  }, [userInfoLoading])
  
  useEffect(() => {
    if (test_type_data) {
     alert("success")
    }
    
  }, [test_type_data])

  useEffect(() => {
    if (new_test_type_data) {
      test_type.push(newTestType)
      alert("success")
      setShowModal(false)
    }
    
  }, [new_test_type_loading])

  const updateValue = (e) => {
    console.log()
    if (!e.target.id) {

      setValue({ ...values, 'test_type': e.target.value });
    } else {

      setValue({ ...values, [e.target.name]: e.target.value });
    }
  };

  const processForm = (e) => {
    const errList = checkFields(values);
    e.preventDefault();
    if (!errList) {
      setFormData(values);
      setErrors("");
    } else {
      setErrors(errList);
    }
  };

  const newTestTypeHandler=function(e){
    
      if(test_type.includes(newTestType))alert("Test type already exist")
      else setNewFormData({test_type:newTestType})
      
      
  }

console.log(test_type_data);
  return (
    <Layout>
      <div className={`${showModal ?'opacity-30 text-blue-500 flex justify-center mt-10':' text-blue-500 flex justify-center mt-10'}`}>
        <div className=' bg-white w-[70vw]'>
        <div className='text-2xl text-center text-black'>FORM</div>
          <div className='p-10' >
            <form
              onSubmit={(e) => {
                processForm(e);
              }}
            >
              <div className="w-full mb-4 md:flex">
                <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
                  <label
                    class="block mb-2 text-base font-bold text-gray-500"
                    htmlFor="test_name"
                  >
                    Test Name
                  </label>
                  <input
                    type="text"
                    id="test_name"
                    name="test_name"
                    value={values?.test_name}
                    class="block w-full rounded-md border-gray-200 border-2 h-14 p-5 focus:outline-none focus:shadow-outline"
                    onChange={(e) => updateValue(e)}
                  />

                 <span className="form_error_message block mt-1">
                      {errors?.test_name}
                    </span>
                </div>

              </div>
              <div className="w-full mb-4 md:flex">
                <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
                  <label
                    class="block mb-2 text-base font-bold text-gray-500"
                    htmlFor="test_type"
                  >
                    Test Type
                  </label>
                  <select
                    class="block w-full rounded-md border-gray-200 border-2 h-14 pl-5 focus:outline-none focus:shadow-outline"
                    onChange={(e) => updateValue(e)}
                  >
                    {/* <option defaultValue={null} ></option> */}
                    {test_type?.map(test => {
                      return <option
                        id="test_types"
                        value={test}
                        class="">
                        {test}
                      </option>
                    })}
                  </select>

                  <span className="form_error_message block mt-1">
                      {errors?.test_type}
                    </span>
                    <div  onClick={()=>setShowModal(true)} className='"text-white bg-black mx-auto focus:outline-none flex justify-center h-10 p-2  rounded font-bold cursor-pointer hover:bg-blue-700 bg-dark-btnblue2 text-white '>
                      new test type
                    </div>
                </div>
              </div>

              <div className="w-full mb-4">
                <label
                  class="block mb-2 text-base font-bold text-gray-500"
                  htmlFor="tester_email_id"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="tester_email_id"
                  name="tester_email_id"
                  value={values?.tester_email_id}
                  class="block w-full rounded-md border-gray-200 border-2 h-14 p-5 focus:outline-none focus:shadow-outline"
                  onChange={(e) => updateValue(e)}
                />
                 <span className="form_error_message block mt-1">
                      {errors?.tester_email_id}
                    </span>
              </div>

              <div className="w-full mb-4 custom-phone">
                <label
                  class="block mb-2 text-base font-bold text-gray-500"
                  htmlFor="tester_mobile_number"
                >
                  Phone Number
                </label>
                <input
                  type='number'
                  id="tester_mobile_number"
                  name="tester_mobile_number"

                  value={values?.tester_mobile_number}
                  class="block w-full rounded-md border-gray-200 border-2 h-14 p-5 focus:outline-none focus:shadow-outline"
                  onChange={(e) => updateValue(e)}
                />
                <span className="form_error_message block mt-1">
                      {errors?.tester_mobile_number}
                    </span>
              </div>
              <div className="w-full mb-4 custom-phone">
                <label
                  class="block mb-2 text-base font-bold text-gray-500"
                  htmlFor="tester_alternative_number"
                >
                  Alternate Number
                </label>
                <input
                  type='number'
                  id="tester_alternative_number"
                  name="tester_alternative_number"

                  value={values?.tester_alternative_number}
                  class="block w-full rounded-md border-gray-200 border-2 h-14 p-5 focus:outline-none focus:shadow-outline"
                  onChange={(e) => updateValue(e)}
                />
               <span className="form_error_message block mt-1">
                      {errors?.tester_alternative_number}
                    </span>
              </div>

              <div className="flex p-2 pt-2">
                <div className="md:flex-auto md:flex w-full md:items-right items-center justify-center md:justify-end">

                  <button className="text-white bg-black mx-auto focus:outline-none flex justify-center md:px-12 px-6 py-2 rounded font-bold cursor-pointer hover:bg-blue-700 bg-dark-btnblue2 text-white border duration-200 ease-in-outborder-dark-btnblue2 transition">
                    
                    submit
                  </button>
                </div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
        {
          showModal &&  <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className='bg-white h-60 w-60 p-5'>
            
          <label
                  class="block mb-2 text-base font-bold text-gray-500"
                  htmlFor="new_test_type"
                >
                  new test type
                </label>
                <input
                  type='text'
                  id="new_test_type"
                  name="new_test_type"

                  value={newTestType}
                  class="block w-full rounded-md border-gray-200 border-2 h-14 p-5 focus:outline-none focus:shadow-outline"
                  onChange={(e) => setNewTestType(e.target.value)}
                />
                <div className='flex justify-between'>

                <button onClick={(e)=>newTestTypeHandler(e)}>submit</button>
                <button onClick={()=>setShowModal(false)}>X</button>
                </div>
          </div>
        </div>
        }
    </Layout>
  )
}

export default InputDetails