# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Deployed application: https://rest-rant-review-page.herokuapp.com/
## Routes

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | From page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing a existing place |
| Delete | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

## Data

**Places** (Full CRUD)

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**Rant**
| Field | Type |
| ----- | ---- |
| author | string |
| rant | Boolean |
| stars | number |
| content | string |
