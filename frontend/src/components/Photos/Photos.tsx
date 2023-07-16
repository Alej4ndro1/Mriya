import React, { useState, useRef } from 'react';
import emptyImage from '../../images/icons/empty.png';

export const Photos = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    }
  };

  const handleAddPhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoDownload = () => {
    photos.forEach((photo) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(photo);
      downloadLink.download = photo.name;
      downloadLink.click();
    });
  };

  return (
    <div className='details-info'>
      <form>
        <div className='personal-info__location'>
          <label className='personal-info__label personal-info__location__label'>Add 4 photos</label>
        </div>
        <div className='photos__container'>
          <div className="photos__grid">
            {[...Array(4)].map((_, index) => {
              if (index < photos.length) {
                const photo = photos[index];
                return (
                  <div
                    key={index}
                    className="photo__square"
                    style={{
                      backgroundImage: `url(${URL.createObjectURL(photo)})`,
                    }}
                  ></div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="photo__square photo__empty-square"
                    style={{
                      backgroundImage: `url(${emptyImage})`,
                    }}
                  ></div>
                );
              }
            })}
            {photos.length < 4 ? (
              <div>
                <input type="file" accept="image/*" multiple onChange={handlePhotoUpload} style={{ display: 'none' }} ref={fileInputRef} />
                <button className='photos__button' onClick={handleAddPhotoClick}>+ Add photo</button>
              </div>
            ): null}
          </div>

          <button className='personal-info__button' onClick={handlePhotoDownload}>
              Post dream
          </button>
        </div>
      </form>
    </div>
  );
};
