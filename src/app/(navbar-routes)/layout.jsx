import Sidebar from "@/components/shared/sidebar"

export default function layout({ children }) {
  return (
    <div className="h-full flex w-full">
      <Sidebar />

      <main className="max-h-[100vh] overflow-y-auto w-full">{children}</main>
    </div>
  )
}
