// Membership.tsx
import React from "react";

const Membership: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-blue-800 mb-4">Membership Form</h1>
        <iframe
          src="https://surveyheart.com/form/652bb98fb407c41259c6b75e"
          className="w-full h-[80vh] rounded-md border"
          title="Membership Form"
        />
      </div>
    </div>
  );
};

export default Membership;
