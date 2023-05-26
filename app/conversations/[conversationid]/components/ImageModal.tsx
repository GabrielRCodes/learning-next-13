"use client"

import Modal from '@/app/components/Modal';
import React from 'react'
import Image from "next/image"

interface ImageModalprops {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalprops> = ({
  isOpen,
  onClose,
  src
}) => {

  if (!src) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  )
}

export default ImageModal