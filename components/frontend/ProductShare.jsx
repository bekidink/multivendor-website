
"use client";

import { Button, Modal } from "flowbite-react";
import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Share2, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ShareSocial } from "react-share-social";
export default function ProductShareButton({urlToShare}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 text-green-950 dark:text-slate-100'>
    <Share2/>
</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Share the link</Modal.Header>
        <Modal.Body>
      <ShareSocial url={urlToShare} socialTypes={['whatsapp','email','facebook','twitter','reddit','linkedin']}/>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
