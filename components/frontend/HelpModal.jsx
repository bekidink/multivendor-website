
"use client";

import { Button, Modal } from "flowbite-react";
import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}><button className='flex items-center space-x-1 text-green-950 dark:text-slate-100'>
    <HelpCircle/>
    <span>Help</span>
</button></Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Need Help with Shopping,Talk to our Help Desk</Modal.Header>
        <Modal.Body>
        <div className="grid grid-cols-2 gap-6">
            <Link href={"tel:0901108024"} className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
              <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
              <Headphones className="w-4 h-4 text-lime-800"/>
              </div>
                 <span>Call:0934569010</span>
            </Link>
            <Link href={"/truck"} className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
              <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
              <Truck className="w-4 h-4 text-lime-800"/>
              </div>
                 <span>Track your Order</span>
            </Link>
            <Link href={"/returns"} className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
              <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
              <CornerDownLeft className="w-4 h-4 text-lime-800"/>
              </div>
                 <span>Returns and Refunds</span>
            </Link>
            <Link href={"/chat"} className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
              <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
              <MessageSquare className="w-4 h-4 text-lime-800"/>
              </div>
                 <span>Chat with Us</span>
            </Link>
        </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
