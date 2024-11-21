export const ROLES = {
    ADMIN: "Admin",
    CONTRIBUTOR: "Contributor",
    LEARNER: "Learner",
  };
  
  export const hasRole = (userRole, allowedRole) => userRole === allowedRole;
  