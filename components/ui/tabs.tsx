// components/ui/tabs.tsx
export function Tabs({ children }) {
  return <div>{children}</div>
}
export function TabsList({ children, className = '' }) {
  return <div className={`flex ${className}`}>{children}</div>
}
export function TabsTrigger({ value, children }) {
  return <button className="text-pink-400 hover:underline">{children}</button>
}
export function TabsContent({ value, children }) {
  return <div>{children}</div>
}