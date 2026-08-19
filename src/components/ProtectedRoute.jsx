import React from 'react';

export default function ProtectedRoute({ children }) {
  // Pass-through wrapper so routing works immediately
  return children;
}