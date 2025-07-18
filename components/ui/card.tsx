// components/ui/card.tsx
export function Card({ children }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
      {children}
    </div>
  )
}