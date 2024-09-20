import PageHeader from '@/components/backoffice/PageHeader'
import TableAction from '@/components/backoffice/TableAction'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'

const page = async() => {
  const trainings=await getData('trainings')
  return (
    <div>
    <PageHeader heading={"Beki Community Trainings"} href={"/dashboard/community/new"} LinkTitle={"Add Training"}/>
    <div className="py-8">
      <DataTable data={trainings} columns={columns} filterKeys={['title']} />
     </div>
   </div>
  )
}

export default page
