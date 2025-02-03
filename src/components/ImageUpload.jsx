import React, { useState } from 'react';

const ImageUpload = ({ label, currentImage, onUpload }) => {
  const [image, setImage] = useState(currentImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1" />
      {image && <img src={image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
    </div>
  );
};

export default ImageUpload;
