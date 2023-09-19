interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Operations Staff',
    'Business Owner',
    'Car Manager',
    'Customer',
    'Administrator',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read car information',
    'Read booking information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage cars', 'Manage bookings', 'Manage locations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/6bbeb115-172a-42ec-bde4-2867c5fe9f01',
};
