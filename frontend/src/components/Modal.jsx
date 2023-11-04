import React, { useEffect, useState } from 'react'
import useGetData from '../hooks/useGetData'
import useUpdateData from '../hooks/useUpdateData';
import { fields, checkFields } from '../helpers/supportSchema'
const Modal = ({test,setModal,setRefresh}) => {
  const [values, setValue] = useState(test);
  const [formData, setFormData] = useState(null);
  const [test_type, set_test_type] = useState([])
  const [errors, setErrors] = useState(null);

  console.log(test)
  const {
    data: userInfoData,
    error: userInfoError,
    loading: userInfoLoading,
  } = useGetData('testtype/');
  const {
    data: userUpdatedData,
    error: userUpdatedError,
    loading: userUpdatedLoadin,
  } = useUpdateData(`phptest/${test._id}`,formData);



useEffect(()=>{
  if(userUpdatedData){
    alert("success")
    setRefresh(true)
    setModal(false)
  }
},[userUpdatedData])

  useEffect(() => {
    if (userInfoData) {
      let temp = []
      userInfoData.forEach((item) => {
        temp.push(item['test_type'])
      })
      set_test_type(temp)
    }
    
  }, [userInfoLoading])

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
  return (
    <div className=' bg-white w-[70vw]'>
          <div className='p-10' >
            <button className='mb-5 text-red-800 border-solid border-red-400 border-2 p-2' onClick={()=>setModal(false)}>X</button>
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
                        class="">{test}
                      </option>
                    })}
                  </select>

                  <span className="form_error_message block mt-1">
                      {errors?.test_type}
                    </span>
                   
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
  )
}

export default Modal