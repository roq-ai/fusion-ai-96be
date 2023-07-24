interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Owner'],
  tenantName: 'Friend',
  applicationName: 'fusion ai',
  addOns: [],
};
