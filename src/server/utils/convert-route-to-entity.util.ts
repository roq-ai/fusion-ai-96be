const mapping: Record<string, string> = {
  friends: 'friend',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
