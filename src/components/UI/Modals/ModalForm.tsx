'use client'

import React from 'react';
import Style from '@/styles/modalForm.module.css'
import { X } from 'lucide-react';

interface formModalProps {
  children: React.ReactNode;
  isOpens: boolean;
  closeModal: () => void;
}

export const ModalForm: React.FC<formModalProps> = ({ children, isOpens,  closeModal}) => {
  return (
    <article className={`${Style.modal} ${isOpens && Style.isOpen}`}>
      <div className={Style.modalContainer}>
        <button className={Style.modalClose}
        onClick={closeModal}
        >
          <X />
        </button>
        {children}
      </div>
    </article>
  );
};

export default ModalForm;