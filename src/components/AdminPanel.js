import React, { useState } from 'react';

const AdminPanel = ({ addProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    description: '',
    lat: '',
    lng: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.lat && formData.lng) {
      addProfile({
        id: Date.now(),
        name: formData.name,
        photo: formData.photo || 'https://via.placeholder.com/150',
        description: formData.description,
        location: { lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) },
      });
      setFormData({ name: '', photo: '', description: '', lat: '', lng: '' });
    } else {
      alert('Name, Latitude, and Longitude are required!');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', background: '#f9f9f9', borderRadius: '8px' }}>
      <h3>Add New Profile</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={formData.photo}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="text"
          name="lat"
          placeholder="Latitude"
          value={formData.lat}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="text"
          name="lng"
          placeholder="Longitude"
          value={formData.lng}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none' }}>
          Add Profile
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
