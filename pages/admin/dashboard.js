import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import Stats from '../../components/admin/Stats'
import Layout from '../../components/admin/Layout'

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: true },
    { name: 'Team', href: '/admin/team', icon: UsersIcon, current: false },
    { name: 'Projects', href: '/admin/projects', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '/admin/calendar', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '/admin/documents', icon: InboxIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <Layout>
            <Stats />
        </Layout>
    )
}