# klinic - Routing Architecture & Authentication Planning

## Project Overview

klinic is a multi-role klinic platform with three distinct user categories:

- **Admin** - Platform management and oversight
- **Doctor** - Medical service providers
- **Patient** - klinic recipients

## Routing Architecture

### Public Routes (Unauthenticated Access)

**Path**: `/`

- `Home` - Landing page
- `About` - Company information
- `Contact` - Contact information and support

### Authentication Routes (Public)

**Path**: `/auth`

- `Login` - User authentication
- `Register` - New user registration
- `Forgot Password` - Password recovery initiation
- `Reset Password` - Password reset confirmation

### Protected Routes (Role-Based Access)

#### Patient Dashboard

**Base Path**: `/dashboard`

- `My Appointments` - Appointment management
- `My Profile` - Personal information and settings

#### Doctor Dashboard

**Base Path**: `/doctor/dashboard`

- `Appointments` - Patient appointment schedule
- `My Profile` - Professional profile management
- `My Schedule` - Availability and calendar management

#### Admin Dashboard

**Base Path**: `/admin/dashboard`

- `Manage Doctors` - Doctor account administration
- `Manage Patients` - Patient account administration
- `Statistics` - Platform analytics and insights
- `My Profile` - Administrator profile settings

## Purpose

- Handles form submissions with server actions
- Manages form state (pending, errors, success)
- Provides progressive enhancement

## Key Features

- **State Management**: Tracks form submission state
- **Pending State**: Shows loading during submission
- **Error Handling**: Displays validation and server errors
- **Form Reset**: Automatically manages form reset after submission

## Implementation

```typescript
const [state, formAction, isPending] = useActionState(serverAction, initialState);
```
