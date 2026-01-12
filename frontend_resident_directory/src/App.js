import React, { useMemo, useState } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import ResidentCard from './components/ResidentCard';
import ResidentDetailModal from './components/ResidentDetailModal';
import { mockResidents } from './data/mockResidents';

// PUBLIC_INTERFACE
export default function App() {
  const [query, setQuery] = useState('');
  const [selectedResident, setSelectedResident] = useState(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResidents = useMemo(() => {
    if (!normalizedQuery) return mockResidents;

    return mockResidents.filter((r) => r.name.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  const isModalOpen = Boolean(selectedResident);

  return (
    <div className="App">
      <header className="TopBar">
        <div className="TopBar-inner">
          <div className="TopBar-titleGroup">
            <h1 className="TopBar-title">Resident Directory</h1>
            <p className="TopBar-subtitle">Search and view resident details (mock data)</p>
          </div>
        </div>
      </header>

      <main className="Page">
        <div className="Page-inner">
          <SearchBar value={query} onChange={setQuery} />

          <section className="ResultsHeader" aria-label="Search results summary">
            <span className="ResultsCount">
              {filteredResidents.length} resident{filteredResidents.length === 1 ? '' : 's'}
              {normalizedQuery ? ' found' : ''}
            </span>
          </section>

          {filteredResidents.length === 0 ? (
            <div className="EmptyState" role="status" aria-live="polite">
              <h2 className="EmptyState-title">No matches</h2>
              <p className="EmptyState-body">
                Try a different name, or clear the search to see all residents.
              </p>
              <button type="button" className="Btn BtnPrimary" onClick={() => setQuery('')}>
                Clear search
              </button>
            </div>
          ) : (
            <section className="Grid" aria-label="Resident list">
              {filteredResidents.map((resident) => (
                <ResidentCard
                  key={resident.id}
                  resident={resident}
                  onOpen={(r) => setSelectedResident(r)}
                />
              ))}
            </section>
          )}
        </div>
      </main>

      <ResidentDetailModal
        resident={selectedResident}
        isOpen={isModalOpen}
        onClose={() => setSelectedResident(null)}
      />
    </div>
  );
}
