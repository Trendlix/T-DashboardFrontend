"use client"
import React, { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({children})=>{
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleOpen = () =>{
        setIsModalOpen(true)
        // setTimeout(() => {
        //     setIsModalOpen(false)
        // }, 3000);

    }

    const handleClose = () =>{
        setIsModalOpen(false)
    }

    return(
        <ModalContext.Provider value={{ isModalOpen, handleClose, handleOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () =>{
    return useContext(ModalContext)
}