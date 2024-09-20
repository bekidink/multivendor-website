"use client";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  ScanSearch,
  SendToBack,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
  Users,
  Warehouse,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { signOut, useSession } from "next-auth/react";

const Sidebar = ({showSidebar,setShowSidebar}) => {
  const[openMenu,setOpenMenu]=useState(false)
  const {data:session,status}=useSession()
  if(status==="loading"){
    return <p>loading...</p>
  }
  const role=session?.user?.role
  console.log(session?.user)
  const pathname = usePathname();
  async function handleLogOut(){
await signOut()
  }
  let catalogueLinks=[
    {
    title:"Products",
    icon:Boxes,
    href:"/dashboard/products"
  }
  ,
  {
    title:"Categories",
    icon:LayoutList,
    href:"/dashboard/categories"
  },
  {
    title:"Banners",
    icon:SendToBack,
    href:"/dashboard/banners"
  },
  {
    title:"Coupons",
    icon:ScanSearch,
    href:"/dashboard/coupons"
  }
]
  let sidebarLinks = [
    {
      title: "Customers",
      icon: Users,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: Truck,
      href: "/dashboard/sales",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title:"kb Community",
      icon:Building2,
      href:"/dashboard/community"
    },
    {
      title:"Wallet",
      icon:CircleDollarSign,
      href:"/dashboard/wallet"
    },
    {
      title: "Settings",
      icon: LayoutGrid,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/dashboard/store",
    },
  ];
  
  // if(role==="FARMER"){
  //   sidebarLinks=[
  //     {
  //       title: "Customers",
  //       icon: Users,
  //       href: "/dashboard/customers",
  //     },
  //     {
  //       title: "Markets",
  //       icon: Warehouse,
  //       href: "/dashboard/markets",
  //     },
     
    
  //     {
  //       title: "Sales",
  //       icon: Truck,
  //       href: "/dashboard/sales",
  //     },
  //     {
  //       title: "Our Staff",
  //       icon: User,
  //       href: "/dashboard/staff",
  //     },
  //     {
  //       title:"kb Community",
  //       icon:Building2,
  //       href:"/dashboard/community"
  //     },
  //     {
  //       title:"Wallet",
  //       icon:CircleDollarSign,
  //       href:"/dashboard/wallet"
  //     },
  //     {
  //       title: "Settings",
  //       icon: LayoutGrid,
  //       href: "/dashboard/settings",
  //     },
  //     {
  //       title: "Online Store",
  //       icon: ExternalLink,
  //       href: "/dashboard/store",
  //     },
  //   ]
  //   catalogueLinks=[
  //     {
  //     title:"Products",
  //     icon:Boxes,
  //     href:"/dashboard/products"
  //   }
  //   ,
   
  //   {
  //     title:"Coupons",
  //     icon:ScanSearch,
  //     href:"/dashboard/coupons"
  //   }
  // ]
  // }
  if(role==='USER'){
  sidebarLinks  =[
      
      {
        title: "MyOrders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Profile",
        icon: Truck,
        href: "/dashboard/profile",
      },
     
      {
        title: "Online Store",
        icon: ExternalLink,
        href: "/dashboard/store",
      },
    ]
    catalogueLinks=[]
  }
  return (
    <div className={showSidebar?" sm:block sm:mt-0 mt-20 dark:bg-slate-700 bg-white space-y-6 w-64 h-screen dark:text-slate-200 text-slate-800  fixed left-0 top-0 shadow-md overflow-y-scroll":" sm:mt-0 mt-20 hidden sm:block dark:bg-slate-700 bg-white space-y-6 w-64 h-screen dark:text-slate-200 text-slate-800  fixed left-0 top-0 shadow-md overflow-y-scroll"}>
      <Link onClick={()=>setShowSidebar(false)} href={"/dashboard"} className="mb-12 px-6 py-4">
        <Image
          src={"/logo.png"}
          alt=""
          className="w-1/2"
          width={36}
          height={36}
        />
      </Link>
      <div className="space-y-3 flex flex-col ">
        <Link
          href={"/dashboard"}
          onClick={()=>setShowSidebar(false)}
          className={
            pathname === "/dashboard"
              ? "flex items-center gap-x-3 space-x-3 px-6 py-2 border-l-4 border-green-600"
              : "flex items-center gap-x-3 space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          Dashboard
        </Link>
        {catalogueLinks.length>0 && (
           <Collapsible className="px-6 py-2">
           <CollapsibleTrigger className="" onClick={()=>setOpenMenu(!openMenu)}>
               <button className="flex items-center space-x-6  py-2">
                 <div className="flex items-center space-x-3">
                   <Slack />
                   <span>Catalogue</span>
                 </div>
                {openMenu?<ChevronDown/>: <ChevronRight />}
               </button>
               </CollapsibleTrigger>
               <CollapsibleContent className="rounded-lg px-3 pl-6 bg-slate-800">
              {catalogueLinks.length>0 && catalogueLinks.map((item,i)=>{
               const Icon=item.icon
               return (
                 <Link
                 key={i}
             href={item.href}
             onClick={()=>setShowSidebar(!showSidebar)}
             className={
               pathname === item.href
                 ? "flex items-center gap-x-3  py-2 text-sm  border-l-8 border-green-600"
                 : "flex items-center gap-x-3  py-2 "
             }
           >
             <Icon />
             {item.title}
           </Link>
               )
              })}
             </CollapsibleContent>
             </Collapsible>
        )}
       

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              className={
                item.href === pathname
                  ? "flex items-center gap-x-3 space-x-3 px-6 py-2 border-l-4 border-green-600 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2 gap-x-3 "
              }
            >
              <Icon />
              {item.title}
            </Link>
          );
        })}

        <div className="px-6 py-2">
          <button onClick={handleLogOut} className=" bg-lime-800 rounded-md flex items-center space-x-3 px-6 py-2">
            <LogOut />
            <span>logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
