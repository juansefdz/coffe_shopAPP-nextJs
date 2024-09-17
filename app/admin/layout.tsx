import AdminSidebar from "@/components/admin/AdminSidebar";
import ToastNotification from "@/components/ui/ToastNotification";

import Logo from "@/components/ui/logo";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Logo />
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-white">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}