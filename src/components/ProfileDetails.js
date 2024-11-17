import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} style={{ width: '200px', borderRadius: '8px' }} />
      <p>{profile.description}</p>
      <h4>Location</h4>
      <MapComponent location={profile.location} />
    </div>
  );
};

export default ProfileDetails;
