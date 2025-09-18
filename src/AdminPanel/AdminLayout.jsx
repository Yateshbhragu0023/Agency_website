import React from 'react'
import AdminHeader from './Common/AdminHeader'
import AdminSidebar from './Common/AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <>
            <div className='grid grid-cols-5'>
                <div className='col-span-1 fixed top-0 left-1'>
                    <AdminSidebar />
                </div>
                <div className='col-span-4 sticky top-0 left-[20%] '>
                    <AdminHeader />
                    <Outlet />
                </div>
            </div>
        </>
    )
}
