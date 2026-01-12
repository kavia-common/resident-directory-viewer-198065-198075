import React, { useEffect, useMemo, useRef } from 'react';

/**
 * Returns a list of focusable nodes inside an element.
 */
function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(',')
    )
  ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}

/**
 * ResidentDetailModal shows resident details. Includes:
 * - overlay click to close
 * - Escape key to close
 * - focus trapping for accessibility
 */
// PUBLIC_INTERFACE
export default function ResidentDetailModal({ resident, isOpen, onClose }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  const titleId = useMemo(() => `resident-modal-title-${resident?.id ?? 'none'}`, [resident]);

  // Close on Escape + trap focus when open
  useEffect(() => {
    if (!isOpen) return undefined;

    const prevActive = document.activeElement;

    // Prefer focusing the close button (consistent escape hatch)
    window.requestAnimationFrame(() => {
      closeBtnRef.current?.focus?.();
    });

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = getFocusableElements(panelRef.current);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        // If focus is outside, pull it in.
        if (!panelRef.current?.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      // restore focus to the element that opened the modal
      if (prevActive && prevActive.focus) prevActive.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !resident) return null;

  return (
    <div
      className="ModalOverlay"
      role="presentation"
      onMouseDown={(e) => {
        // only close if clicking the overlay, not inside panel
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="ModalPanel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={panelRef}
      >
        <div className="ModalHeader">
          <div>
            <h2 id={titleId} className="ModalTitle">
              {resident.name}
            </h2>
            <p className="ModalSubtitle">{resident.unit}</p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="ModalClose"
            onClick={onClose}
            aria-label="Close resident details"
            title="Close"
          >
            ×
          </button>
        </div>

        <div className="ModalBody">
          <div className="ResidentDetailTop">
            <img
              className="ResidentDetail-avatar"
              src={resident.avatarUrl}
              alt={`${resident.name} avatar`}
            />

            <div className="ResidentDetailFacts">
              <div className="FactRow">
                <span className="FactLabel">Age</span>
                <span className="FactValue">{resident.age}</span>
              </div>

              <div className="FactRow">
                <span className="FactLabel">Phone</span>
                <a className="FactLink" href={`tel:${resident.phone}`} aria-label="Call phone number">
                  {resident.phone}
                </a>
              </div>

              <div className="FactRow">
                <span className="FactLabel">Email</span>
                <a className="FactLink" href={`mailto:${resident.email}`} aria-label="Send email">
                  {resident.email}
                </a>
              </div>
            </div>
          </div>

          <div className="Section">
            <h3 className="SectionTitle">Tags</h3>
            {resident.tags?.length ? (
              <div className="TagList" aria-label="Resident tags">
                {resident.tags.map((t) => (
                  <span key={t} className="Tag">
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <p className="Muted">No tags.</p>
            )}
          </div>

          <div className="Section">
            <h3 className="SectionTitle">Notes</h3>
            {resident.notes ? <p className="Notes">{resident.notes}</p> : <p className="Muted">No notes.</p>}
          </div>
        </div>

        <div className="ModalFooter">
          <a className="Btn BtnSecondary" href={`tel:${resident.phone}`} aria-label="Call resident">
            Call
          </a>
          <a className="Btn BtnPrimary" href={`mailto:${resident.email}`} aria-label="Email resident">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
