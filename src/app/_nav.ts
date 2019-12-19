import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'News'
  },
  {
    name: 'News Post',
    url: '/admin/newspost',
    icon: 'icon-pencil'
  },
  {
    name: 'News List',
    url: '/admin/newslist',
    icon: 'icon-list'
  },
  {
    name: 'News List Types',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Approved News',
        url: '/admin/newslist',
        icon: 'icon-bell'
      },
      {
        name: 'Disproved News',
        url: '/admin/newslist',
        icon: 'icon-bell'
      },
    ]
  },
  {
    title: true,
    name: 'Notify'
  },
  {
    name: 'Send Notification',
    url: '/admin/sendnotification',
    icon: 'icon-bell'
  },
  {
    title: true,
    name: 'Manage'
  },
  {
    name: 'Manage Engagement',
    url: '/admin/manageengagement',
    icon: 'icon-bell'
  },
  {
    name: 'Role and Permission',
    url: '/admin/roleandpermission',
    icon: 'icon-bell'
  },
  
  
];
