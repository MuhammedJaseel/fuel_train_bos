import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  // This is the flag for showing the popup when the profile is clicked.
  isProfilePopup = false;
  // This is varible is indicate the path of home based on the selected one
  drowerPath = 'dashboard';
  // This is varible is indicate which sidebar option is acive.(Note:- if you change to ops then default ops will shoe in home)
  drowerIndex = 0;
  subPath: any = '';

  ngOnInit(): void {
    // The following two lines will initate the path or tab selected in home based on the URL
    const path = window.location.pathname.split('/')[2];
    if (path !== undefined) this.drowerPath = path;
    const secontPath = window.location.pathname.split('/')[3] ?? '';
    if (secontPath !== undefined) this.subPath = secontPath;
  }

  // Following list will be the list of opthon availble in the side bar, based on the path the coponent is viewed
  drowerIcon = [
    {
      // this title is to show in thr side bar
      title: 'Dashboard',
      icon: 'dashboard',
      path: 'dashboard',
      // this title is to show the top title of the selected
      fullTitle: 'Dashboard',
    },
    {
      title: 'Monitoring',
      icon: 'monitoring',
      path: 'monitoring',
      fullTitle: 'Operations Monitor',
    },
    {
      title: 'Operations',
      icon: 'operations',
      path: 'operations',
      fullTitle: '',
      subTitles: [
        { title: 'EOD', path: 'eod' },
        { title: 'TT Recipients', path: 'ttRecipients' },
        { title: 'Payment Mode', path: 'paymentMode' },
        { title: 'Controls', path: 'controls' },
        { title: 'Price Change', path: 'priceChange' },
        { title: 'Tank Density', path: 'tankDensity' },
        { title: 'Monolith Configuration', path: 'monolithConfiguration' },
        { title: 'Customer Configuration', path: 'customerConfiguration' },
      ],
    },
    {
      title: 'Reports',
      icon: 'reports',
      path: 'reports',
      fullTitle: '',
    },
    {
      title: 'Configuration',
      icon: 'configuration',
      path: 'configuration',
      fullTitle: '',
      subTitles: [
        { title: 'HOS Exceptional Log', path: 'hosExceptionalLog' },
        { title: 'Site Configuration', path: 'siteConfiguration' },
        { title: 'Device Configuration', path: 'deviceConfiguration' },
        { title: 'Software Configuration', path: 'softwareConfiguration' },
        { title: 'User Management', path: 'userManagement' },
        { title: 'Alarm & Interlock', path: 'alarmInterlock' },
        { title: 'Maintenance', path: 'maintenance' },
        { title: 'Log Viewer', path: 'logViewer' },
      ],
    },
  ];

  // The following function will decide what shoul happen when any of the option in the side bar is clicked
  onDrowerIconClick = (k: number) => {
    this.drowerPath = this.drowerIcon[k].path;
    this.drowerIndex = k;
    window.history.replaceState('HOME', 'HOME', 'home/' + this.drowerPath);
  };

  // The following function will decide what shoul happen when any of the sub option in the side bar is clicked
  onDrowerSubPathClick = (i: number, k: number) => {
    this.onDrowerIconClick(i);
    const ss = this.drowerIcon[i]?.subTitles ?? [];
    this.subPath = ss[k].path;
    window.history.replaceState(
      'HOME',
      'HOME',
      `home/${this.drowerPath}/${this.subPath}`
    );
    window.location.reload();
  };

  // The following function will indicate what happene when the logout button is clicked
  onClickLogout = () => {};

  // The following function will indicate what happene when the logout button is clicked
  userData = {
    logo: 'https://download.blender.org/branding/blender_logo.png',
    name: 'Jafar Alhusayn',
    photo:
      'https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg',
  };
}
