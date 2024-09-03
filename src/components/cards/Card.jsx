// src/components/cards/Card.jsx
export default function Card({ title, content, children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {/* Render custom content if provided */}
      {children ? (
        children
      ) : (
        <>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{content}</p>
        </>
      )}
    </div>
  );
}
