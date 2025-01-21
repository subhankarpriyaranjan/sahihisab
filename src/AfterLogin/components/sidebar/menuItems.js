import {
  HomeIcon,
  UsersIcon,
  BanknotesIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export const menuItems = [
  {
    path: '/Dashboard',
    label: 'Dashboard',
    icon: HomeIcon,
    description: 'Overview of your finances'
  },
  {
    path: '/members',
    label: 'Members',
    icon: UsersIcon,
    description: 'Manage your team members'
  },
  {
    path: '/expenses',
    label: 'Expenses',
    icon: BanknotesIcon,
    description: 'Track your expenses'
  },
  {
    path: '/group-expenses',
    label: 'Group Expenses',
    icon: UserGroupIcon,
    description: 'Manage shared expenses'
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: ChartBarIcon,
    description: 'View financial reports'
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: Cog6ToothIcon,
    description: 'Configure your preferences'
  }
];