"use client"
import React, { useContext } from 'react';
import Image from "next/image"
import Gif from "@/public/images/modal.gif"
import { ModalContext, useModal } from '../../app/ModalProvider';

function Modal({modalText, opacity}){
  const { isModalOpen, handleClose } = useModal()

//   const handleOuterClick = () => {
//     closeModal();
//   };

  const handleInnerClick = (event) => {
    // Prevent the click event from propagating to the outer div
    event.stopPropagation();
  };

  if (!isModalOpen) {
    return null; // Render nothing if the modal is not open
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black z-20 ${opacity}`} onClick={handleClose}>
        <div className="bg-white w-[500px] p-12 rounded-lg z-30 flex flex-col items-center relative" onClick={handleInnerClick}>
            <Image src={Gif} width={180} height={180} alt="gif" />
            <p className="text-xl text-black font-semibold">{modalText}</p>
      </div>      
    </div>
  );
};
export default Modal;
