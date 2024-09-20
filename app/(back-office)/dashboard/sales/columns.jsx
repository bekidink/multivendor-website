"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "@/components/datatablecolumns/DateColumn"
import ImageColumn from "@/components/datatablecolumns/ImageColumn"
import SortableColumn from "@/components/datatablecolumns/SortableColumn"
import ActionColumn from "@/components/datatablecolumns/ActionColumn"


export const columns = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "productTitle",
    header: ({ column }) =>(<SortableColumn column={column} title={"Product Title"}/>)
  },
  {
    accessorKey: "productImage",
    header: "Product Image",
    cell:({row})=><ImageColumn row={row} accessorKey="productImage"/>
  },
//   {
//     accessorKey: "description",
//     header: "Description",
//     cell:({row})=>{
//         const description=row.getValue('description')
//         return <div className="line-clamp-1">
//             {description}
//         </div>
//     }
//   },
{accessorKey:"productPrice",
    header:"Price",
    
},
{accessorKey:"productQty",
    header:"Quantity",
    
},
{accessorKey:"total",
    header:"Total",
    
},

 
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell:({row})=>(<DateColumn row={row} accessorKey={'createdAt'}/>)
  },
//   {id:"actions",
//   cell: ({ row }) => {
//     const coupon=row.original
//   return  (<ActionColumn row={row} title="coupon" endpoint={`coupon/${coupon.id}`} editEndpoint={`coupons/update/${coupon.id}`}/>)
//   }
//   },
  
]
