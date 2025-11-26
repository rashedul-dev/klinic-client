## Planning On Route Protection & Authorization

### Types of Routing

- `public routes`
  - `open public routes` : /, /about /contact /services , /doctors/doctorId
  - `auth related public routes`: /login /register /forgot-password /reset-password
- `protected routes`
  - `common protected routes` : /my-profile , /settings, /change-password, /my-profile/\*
  - `role based protected routes` : /dashboard/_ (patient) , /admin/dashboard_ (admin) , /doctor/dashboard* (doctor), /doctor/routine*, /assistant (doctor)

### The patter will be like

- exact path match (/my-profile)
- Router Pattern Match (/doctor/\*)

### NOTE:

```
/* Route is protected
    1. If route is protected and no access token => redirect to login
    2. If route is protected and access token exist
        a. If route owner is common => allow
        b. If route owner is specific role => check user role
            i. If user role match => allow
            ii. If user role not match => redirect to their dashboard
*/
```
