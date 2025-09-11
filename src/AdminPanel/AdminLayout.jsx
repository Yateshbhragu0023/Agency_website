import React from 'react'
import AdminHeader from './Common/AdminHeader'
import AdminSidebar from './Common/AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <Outlet/>
            <AdminSidebar />
        </>
    )
}
