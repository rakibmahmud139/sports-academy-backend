## Backend API Endpoints

### Authentication

1. **User Registration**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/auth/register`
   

2. **User Login**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/auth/login`
     

### Event Management

3. **Create Event**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/events/create`
     

4. **Get All Events**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/events`
     

5. **Get Single Event**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/events/:id`
   

6. **Update Event**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/events/:id`
   

7. **Delete Event**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/events/:id`
     

### Attendee Registration

8. **Register for Event**
   - **URL**: `https://event-ease-backend-five.vercel.app/api/v1/events/:id/register`

## Authentication Flow

- **Login**: After successful login, a JWT token is returned. This token should be used for authenticating API requests.
- **Token Usage**: Add the token in the `Authorization` header as `Bearer <your-jwt-token>` when calling the protected API endpoints such as event creation, updating, or registration.

---

## Real-Time Updates

The backend uses **Socket.IO** to provide real-time updates when:
- A new attendee registers for an event.
- An event's details are modified or when it reaches its maximum capacity.

The frontend listens for these events and updates the UI accordingly.

---

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Socket.IO, JWT
- **Real-time Updates**: Socket.IO
