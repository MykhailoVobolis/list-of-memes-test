'use client';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';
import { useEffect, useState } from 'react';

export default function EditMemeModal({ isOpen, onOpenChange, meme, onSave }) {
  const { id, name, image, likes } = meme;

  const [memeName, setMemeName] = useState(name);
  const [memeImage, setMemeImage] = useState(image);
  const [memeLikes, setMemeLikes] = useState(likes);

  const [imageError, setImageError] = useState('');

  useEffect(() => {
    setMemeName(name);
    setMemeImage(image);
    setMemeLikes(likes);
    setImageError('');
  }, [meme, isOpen]);

  const isValidUrl = (str) => {
    try {
      const url = new URL(str);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const validateImage = (url) => {
    if (!isValidUrl(url)) {
      setImageError('Enter a valid URL');
    } else if (!url.toLowerCase().endsWith('.jpg')) {
      setImageError('Image URL must end with .jpg');
    } else {
      setImageError('');
    }
  };

  const onSaveMeme = () => {
    const trimmedName = memeName.trim();
    const trimmedImage = memeImage.trim();

    if (!trimmedName || !trimmedImage || memeLikes === '') {
      return;
    }

    validateImage(trimmedImage);
    if (imageError) {
      return;
    }

    const updatedMeme = {
      id,
      name: trimmedName,
      image: trimmedImage,
      likes: memeLikes,
    };

    onSave(updatedMeme, onOpenChange);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="sm"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              You can correct the values
            </ModalHeader>
            <ModalBody>
              <div className="space-y-10">
                <Input
                  isRequired
                  id="name"
                  label="Name"
                  labelPlacement="outside"
                  value={memeName}
                  onChange={(e) => setMemeName(e.target.value)}
                  placeholder="Enter meme name"
                />
                <Input
                  isRequired
                  id="image"
                  label="Image URL"
                  labelPlacement="outside"
                  type="text"
                  value={memeImage}
                  onChange={(e) => {
                    setMemeImage(e.target.value);
                    setImageError('');
                  }}
                  onBlur={() => validateImage(memeImage)}
                  placeholder="Enter image URL"
                  isInvalid={!!imageError}
                  errorMessage={imageError}
                />
                <Input
                  isRequired
                  id="likes"
                  label="Likes"
                  labelPlacement="outside"
                  type="number"
                  value={memeLikes}
                  onChange={(e) => setMemeLikes(Number(e.target.value))}
                  placeholder="Enter number of likes"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                size="sm"
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button color="primary" size="sm" onPress={() => onSaveMeme()}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
