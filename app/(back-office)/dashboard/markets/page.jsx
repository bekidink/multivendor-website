import PageHeader from '@/components/backoffice/PageHeader'
import TableAction from '@/components/backoffice/TableAction'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'

export default async function page() {
  const markets=await getData('markets')||[]
  return (
    <div>
     <PageHeader heading={"Markets"} href={"/dashboard/markets/new"} LinkTitle={"Add Market"}/>
     <div className="py-8">
      {markets && <DataTable data={markets} columns={columns} filterKeys={['title']} />}
     </div>
    </div>
  )
}

