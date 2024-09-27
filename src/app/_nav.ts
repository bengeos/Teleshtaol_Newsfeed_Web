import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
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
    icon: 'icon-list',
    children: [
      {
        name: 'Approved News',
        url: '/admin/approvednews',
        icon: 'icon-bell'
      },
      {
        name: 'Disproved News',
        url: '/admin/disprovednews',
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
  /* {
    name: 'Request Role',
    url: '/admin/manageengagement',
    icon: 'icon-puzzle'
  }, */
  {
    name: 'Role Management',
    url: '/admin/roleandpermission',
    icon: 'icon-calculator'
  },
  
  
];
