// components/ui/tooltip.tsx
export function TooltipProvider({ children }) {
  return <>{children}</>
}
export function Tooltip({ children }) {
  return <>{children}</>
}
export function TooltipTrigger({ children }) {
  return <>{children}</>
}
export function TooltipContent({ children }) {
  return (
    <div className="absolute bg-gray-700 text-white text-xs p-2 rounded">
      {children}
    </div>
  )
}