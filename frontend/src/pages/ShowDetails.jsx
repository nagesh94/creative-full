import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import useGetData from '../hooks/useGetData'
import useDeleteData from '../hooks/useDeleteData'
import useUpdateData from '../hooks/useUpdateData'
import TableRow from '../components/TableRow'
import Modal from '../components/Modal'

const ShowDetails = () => {

  const [data, setData] = useState([])
  const [delurl, setDelurl] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [modal, showSetModal] = useState(false)
  const [id,setId] =useState({})

  const {
    data: userInfoData,
    error: userInfoError,
    loading: userInfoLoading,
  } = useGetData('phptest/', refresh);
  const {
    data: deleteData,
    error: deleteError,
    loading: deleteLoading,
  } = useDeleteData(delurl);

  useEffect(() => {
    if (userInfoData?.length > 0) {

      setData([...userInfoData])
      setRefresh(false)
    }
  }, [userInfoData])

  useEffect(() => {
    if (deleteData) {
      setRefresh(true)
    }
  }, [deleteData])

  const deleteTest = (item) => {
    setDelurl(`phptest/${item._id}`)
  }

  return (
    <Layout>

      <div className={`${modal ? 'opacity-30 text-blue-500 flex justify-center mt-10 ': 'text-blue-500 flex justify-center mt-10' } `}>
        <div className=' bg-white '>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">id</th>
                  <th class="py-3 px-6 text-left">name</th>
                  <th class="py-3 px-6 text-left">test type</th>
                  <th class="py-3 px-6 text-left">creation_data</th>
                  <th class="py-3 px-6 text-left">mobile number</th>
                  <th class="py-3 px-6 text-left">alternative number</th>
                  <th class="py-3 px-6 text-left">email</th>

                  <th class="py-3 px-6 text-left">delete</th>
                  <th class="py-3 px-6 text-left">updata</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <TableRow />
                {
                  data && data.map(item => {
                    return <tr
                      className={`border-b text-black font-bold border-gray-200 hover:bg-gray-100 ${item.test_type.test_type === 'node' ? 'bg-yellow-500' : item.test_type.test_type === 'php' ? 'bg-green-200'
                          : 'bg-orange-600'
                        }`}
                    >
                      <td class="py-3 px-6 text-left">{item.test_id}</td>
                      <td class="py-3 px-6 text-left">{item.test_name}</td>
                      <td class="py-3 px-6 text-left">{item.test_type.test_type}</td>
                      <td class="py-3 px-6 text-left">{item.creation_data}</td>
                      <td class="py-3 px-6 text-left">{item.tester_mobile_number}</td>
                      <td class="py-3 px-6 text-left">{item.tester_alternative_number}</td>
                      <td class="py-3 px-6 text-left">{item.tester_email_id}</td>
                      <td class="py-3 px-6 text-left"><button className='border-solid border-blue-600 border-2 p-1' onClick={() => deleteTest(item)}>del</button></td>

                      <td class="py-3 px-6 text-left"><button className='border-solid   border-blue-600 border-2 p-1' onClick={() => {
                        showSetModal(true)
                        setId(item)}
                        }>update</button></td>
                    </tr>
                  })
                }



              </tbody>
            </table>
          </div>

        </div>
      </div>
      {modal && <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <Modal test={id} setModal={showSetModal} setRefresh={setRefresh}/>
        </div>}
    </Layout>
  )
}

export default ShowDetails