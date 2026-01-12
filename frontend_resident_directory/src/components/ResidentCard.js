import React from 'react';

/**
 * ResidentCard displays a resident summary in the grid.
 */
// PUBLIC_INTERFACE
export default function ResidentCard({ resident, onOpen }) {
  const handleQuickContact = (e) => {
    e.stopPropagation();
    window.location.href = `mailto:${resident.email}`;
  };

  return (
    <button
      type="button"
      className="ResidentCard"
      onClick={() => onOpen(resident)}
      aria-label={`Open details for ${resident.name}`}
    >
      <div className="ResidentCard-avatarWrap">
        <img
          className="ResidentCard-avatar"
          src={resident.avatarUrl}
          alt={`${resident.name} avatar`}
          loading="lazy"
        />
      </div>

      <div className="ResidentCard-body">
        <div className="ResidentCard-nameRow">
          <h3 className="ResidentCard-name">{resident.name}</h3>

          <button
            type="button"
            className="ResidentCard-contact"
            onClick={handleQuickContact}
            aria-label={`Email ${resident.name}`}
            title="Email"
          >
            ✉
          </button>
        </div>

        <div className="ResidentCard-meta">
          <span className="ResidentCard-unit" aria-label="Apartment or unit">
            {resident.unit}
          </span>
        </div>
      </div>
    </button>
  );
}
