// components/ui/card.tsx
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-2">{children}</div>;
}