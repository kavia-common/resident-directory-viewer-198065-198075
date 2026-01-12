/**
 * Mock residents dataset for the frontend-only resident directory.
 * No backend calls are used.
 */

const makeAvatarUrl = (seed) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundColor=3b82f6,06b6d4&fontFamily=inter&fontSize=42`;

// PUBLIC_INTERFACE
export const mockResidents = [
  {
    id: 'r-1001',
    name: 'Avery Johnson',
    avatarUrl: makeAvatarUrl('Avery Johnson'),
    age: 34,
    unit: 'B-204',
    phone: '(555) 010-2040',
    email: 'avery.johnson@example.com',
    tags: ['Board Member', 'Pet Friendly'],
    notes:
      'Prefers email for non-urgent building updates. Has a small dog (friendly).',
  },
  {
    id: 'r-1002',
    name: 'Noah Chen',
    avatarUrl: makeAvatarUrl('Noah Chen'),
    age: 28,
    unit: 'A-112',
    phone: '(555) 010-1120',
    email: 'noah.chen@example.com',
    tags: ['New Resident'],
    notes: 'Moved in recently. Please share parking and package room info.',
  },
  {
    id: 'r-1003',
    name: 'Sophia Patel',
    avatarUrl: makeAvatarUrl('Sophia Patel'),
    age: 41,
    unit: 'C-310',
    phone: '(555) 010-3100',
    email: 'sophia.patel@example.com',
    tags: ['Emergency Contact'],
    notes:
      'Listed as emergency point-of-contact for neighbor in C-311 during travel.',
  },
  {
    id: 'r-1004',
    name: 'Liam Rivera',
    avatarUrl: makeAvatarUrl('Liam Rivera'),
    age: 37,
    unit: 'D-018',
    phone: '(555) 010-0180',
    email: 'liam.rivera@example.com',
    tags: ['Maintenance Requests'],
    notes: 'Typically available after 6pm weekdays. Reports occasional AC noise.',
  },
  {
    id: 'r-1005',
    name: 'Mia Thompson',
    avatarUrl: makeAvatarUrl('Mia Thompson'),
    age: 25,
    unit: 'B-120',
    phone: '(555) 010-1200',
    email: 'mia.thompson@example.com',
    tags: ['Package Pickup'],
    notes: 'Often picks up packages in evenings. Prefers text messages.',
  },
  {
    id: 'r-1006',
    name: 'Ethan Williams',
    avatarUrl: makeAvatarUrl('Ethan Williams'),
    age: 52,
    unit: 'A-405',
    phone: '(555) 010-4050',
    email: 'ethan.williams@example.com',
    tags: ['Long-term Resident'],
    notes:
      'Has lived in the building for 10+ years. Great resource for building history.',
  },
  {
    id: 'r-1007',
    name: 'Olivia Garcia',
    avatarUrl: makeAvatarUrl('Olivia Garcia'),
    age: 31,
    unit: 'C-102',
    phone: '(555) 010-1020',
    email: 'olivia.garcia@example.com',
    tags: ['Quiet Hours'],
    notes: 'Sensitive to noise; appreciates reminders about quiet hours.',
  },
  {
    id: 'r-1008',
    name: 'James Kim',
    avatarUrl: makeAvatarUrl('James Kim'),
    age: 46,
    unit: 'D-220',
    phone: '(555) 010-2200',
    email: 'james.kim@example.com',
    tags: ['Community Volunteer'],
    notes:
      'Helps organize lobby events. Contact for volunteering opportunities.',
  },
];
