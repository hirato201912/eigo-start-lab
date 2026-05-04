export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div
        className="w-12 h-12 border-4 border-gray-200 border-t-[#D94F8A] rounded-full animate-spin"
        role="status"
        aria-label="読み込み中"
      />
    </div>
  )
}
