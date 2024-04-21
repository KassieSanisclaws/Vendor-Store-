

export const UserData = 
{
  "mode": "dark",
  "loading": false,
  "titleBox1": "Title Box 1",
  "titleBox2": "Title Box 2",
  "titleBox3": "Title Box 3",
  "titleBox4": "Title Box 4",
  "titleBox5": "Title Box 5",
  "titleBox6": "Title Box 6",
  "titleBox7": "Title Box 7",
  "userTypes": "admin",
  "includeUserPicture": true,
  "includeNewsFeed": true,
  "includeMessages": true,
  "includeBasedOnUserInterest": true,
  "includeUserCalendar": true,
  "includeUserPurchaseHistory": true,
  "includeUserStoreReviews": true,
  "includeUserButtonsActions": true,
  "includeVendorButtonsActions": true,
  "includeVendorEmployeesTable": true,
  "includePieGraph": true,
  "includeBarGraph": true,
  "data": [
    { "value": 5, "label": "A", "width": 100, "height": 100 },
    { "value": 10, "label": "B", "width": 100, "height": 100 },
    { "value": 15, "label": "C", "width": 100, "height": 100 },
    { "value": 20, "label": "D", "width": 100, "height": 100 }
  ],
  "columns": [
    { "field": "id", "headerName": "ID", "width": 70 },
    { "field": "firstName", "headerName": "First name", "width": 130 },
    { "field": "lastName", "headerName": "Last name", "width": 130 },
    { "field": "age", "headerName": "Age", "type": "number", "width": 90 },
    {
      "field": "fullName",
      "headerName": "Full name",
      "description": "This column has a value getter and is not sortable.",
      "sortable": false,
      "width": 160,
      "valueGetter": "(value, row) => `${row.firstName || ''} ${row.lastName || ''}`"
    }
  ],
  "rows": [
    { "id": 1, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    { "id": 2, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    { "id": 3, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    { "id": 4, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    { "id": 5, "lastName": "Targaryen", "firstName": "Daenerys", "age": null },
    { "id": 6, "lastName": "Melisandre", "firstName": "", "age": 150 },
    { "id": 7, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
    { "id": 8, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
    { "id": 9, "lastName": "Roxie", "firstName": "Harvey", "age": 65 }
  ],
  "buttonsData": [
    { "name": "Edit Picture", "onClick": "handleEditPicture" },
    { "name": "Edit Profile", "to": "/editProfile", "onClick": "handleEditPicture" },
    { "name": "Edit Store Items", "onClick": "handleEditPicture" },
    { "name": "Edit Store Greetings", "onClick": "handleEditPicture" },
    { "name": "Change Password", "onClick": "handleEditPicture" }
  ],
  "reviews": [
    {
      "name": "Remy Sharp",
      "avatarSrc": "/static/images/avatar/1.jpg",
      "title": "Brunch this weekend?",
      "reviewer": "Ali Connors",
      "comment": "I'll be in your neighborhood doing errands this…",
      "rating": 4
    },
    {
      "name": "Travis Howard",
      "avatarSrc": "/static/images/avatar/2.jpg",
      "title": "Summer BBQ",
      "reviewer": "to Scott, Alex, Jennifer",
      "comment": "Wish I could come, but I'm out of town this…",
      "rating": 3
    },
    {
      "name": "Cindy Baker",
      "avatarSrc": "/static/images/avatar/3.jpg",
      "title": "Oui Oui",
      "reviewer": "Sandra Adams",
      "comment": "Do you have Paris recommendations? Have you ever…",
      "rating": 5
    }
  ]
}
