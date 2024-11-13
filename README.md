# Dropbox Clone Frontend

Welcome to the frontend of the Dropbox Clone application! Built with React, Redux, and Tailwind CSS, this frontend provides a seamless interface for managing files, including uploading, downloading, viewing, and organizing them into categories.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Routing](#routing)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- **File Management:** Upload, download, view, and delete files.
- **Categorization:** Organize files into Photos, Shared, and Documents.
- **Responsive Design:** Optimized for all devices.
- **Interactive UI:** Tooltips, loaders, and smooth animations enhance user experience.
- **State Management:** Efficiently handled with Redux.

---

## Technologies Used

- **React**
- **Redux & Redux Thunk**
- **React Router**
- **Tailwind CSS**
- **Heroicons**
- **Axios**
- **Headless UI**
- **react-tooltip**

---

## Prerequisites

- **Node.js & npm:** [Download Node.js](https://nodejs.org/)
- **Git:** [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/dropbox_clone_frontend.git
   cd dropbox_clone_frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

---

## Configuration

1. **Environment Variables**

   Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

   Add the following:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:8000/api
   ```

---

## Running the Application

- **Development Mode**

  ```bash
  npm start
  ```

  Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Production Build**

  ```bash
  npm run build
  ```

  Deploy the contents of the `build` folder to your preferred hosting service.

---

## Project Structure

```
dropbox_clone_frontend/
├── public/
│   └── icons/
│       ├── png.svg
│       ├── jpeg.svg
│       ├── pdf.svg
│       └── ...other icons
├── src/
│   ├── actions/
│   │   └── fileActions.js
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── FileUpload.js
│   │   ├── FileList.js
│   │   ├── FileItem.js
│   │   ├── FileView.js
│   │   ├── Photos.js
│   │   ├── Shared.js
│   │   ├── Documents.js
│   │   └── Loader.js
│   ├── reducers/
│   │   ├── fileReducer.js
│   │   └── index.js
│   ├── store.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

---

## API Integration

The frontend communicates with the backend API defined by `REACT_APP_API_BASE_URL`.

### Key Endpoints

- **Upload File:** `POST /api/upload/`
- **List Files:** `GET /api/files/`
- **Download File:** `GET /api/download/<id>/`
- **Delete File:** `DELETE /api/files/<id>/delete/`
- **View File Details:** `GET /api/files/<id>/`

---

## State Management

- **Redux:** Manages global state.
- **Redux Thunk:** Handles asynchronous actions like API calls.

### Actions

Defined in `src/actions/fileActions.js`:

- **Fetch Files**
- **Upload File**
- **Delete File**

### Reducers

Located in `src/reducers/`:

- **fileReducer.js:** Handles file-related state changes.
- **index.js:** Combines all reducers.

### Store

Configured in `src/store.js` with middleware applied.

---

## Routing

Implemented using **React Router**.

### Routes

- **/** - Home (File Upload & List)
- **/view/:id** - File Details
- **/photos** - Photos Section
- **/shared** - Shared Files
- **/documents** - Documents Section

Defined in `src/App.js`.

---

## Contributing

1. **Fork the Repository**
2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/dropbox_clone_frontend.git
   cd dropbox_clone_frontend
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Commit Changes**

   ```bash
   git commit -m "Add feature XYZ"
   ```

5. **Push to Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```


## Contact

- **Name:** Anamay Srivastava
- **Email:** anamaysri1@gmail.com
- **GitHub:** [anamaysri11](https://github.com/anamaysri11)

---

