// components/ui/button.tsx
export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}