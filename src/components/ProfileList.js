import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, deleteProfile }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Profiles</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', width: '200px' }}
          >
            <img src={profile.photo} alt={profile.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h4>{profile.name}</h4>
            <p>{profile.description}</p>
            <Link to={`/profile/${profile.id}`}>View Details</Link>
            <button
              onClick={() => deleteProfile(profile.id)}
              style={{
                display: 'block',
                marginTop: '10px',
                padding: '5px 10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
