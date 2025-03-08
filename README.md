# **📌 System Design Documentation**

## **1️⃣ Overview**

This document outlines the system design for a **Laravel-based Content Management System (CMS)** with a **React frontend**. The system allows admins to manage website content dynamically from a backend panel (Filament), and the frontend fetches this data via REST APIs.

## **2️⃣ Architecture**

- **Frontend:** React (Vite)
- **Backend:** Laravel (PHP 8.2)
- **Database:** MySQL
- **Authentication:** Laravel Sanctum (Token-based authentication)
- **Admin Panel:** Filament (Laravel Admin UI)
- **Hosting:** Shared hosting (Hostinger)
- **State Management:** Zustand
- **Cookies for Authentication:** Yes

## **3️⃣ High-Level Flow**

1. Admin logs into the Filament dashboard.
2. Admin updates website sections (e.g., Navbar, Footer, Homepage, Services, etc.).
3. The updated data is stored in the MySQL database.
4. React frontend fetches content dynamically via Laravel API.
5. Users view the dynamically updated website in real-time.

## **4️⃣ Backend Folder Structure**

```
my-cms/
├── app/
│   ├── Http/
│   │   ├── Controllers/        # API Controllers
│   │   ├── Middleware/         # Security Middleware
│   ├── Models/                 # Laravel Eloquent Models
│   ├── Providers/
│
├── database/
│   ├── migrations/              # Database schema changes
│   ├── seeders/                 # Dummy data
│
├── routes/
│   ├── web.php                  # Web routes (Filament Admin Panel)
│   ├── api.php                  # API routes (React Frontend)
│
├── public/                       # Public assets
├── resources/                    # Blade templates (For Filament)
├── .env                          # Environment variables
└── storage/                      # File uploads
```

## **5️⃣ React Frontend Folder Structure**

```
cms-frontend/
├── public/                  # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/              # Static assets (icons, images, styles)
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer section
│   │   ├── Loader.jsx       # Loading spinner
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About us page
│   │   ├── Services.jsx     # Services page
│   │   ├── Projects.jsx     # Projects page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Blog.jsx         # Blog listing page
│   │   ├── BlogDetail.jsx   # Blog details page
│   ├── services/            # API service functions
│   │   ├── api.js           # API configuration and fetch logic
│   ├── store/               # Zustand store for state management
│   │   ├── useContentStore.js
│   ├── layouts/             # Layout components (Reusable templates)
│   │   ├── MainLayout.jsx   # Main Layout with Navbar/Footer
│   ├── router/              # React Router configuration
│   │   ├── routes.jsx
│   ├── styles/              # Global styles (CSS/SCSS)
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
├── .env                     # Environment variables
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

## **6️⃣ Database Schema**

### **📌 `contents` Table**

Stores dynamic content for website sections.

```sql
CREATE TABLE contents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    section_name VARCHAR(255) UNIQUE NOT NULL,
    content JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **📌 `users` Table (Admins Only)**

Stores admin login details.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## **7️⃣ API Endpoints**

| HTTP Method | Endpoint                 | Description                              |
| ----------- | ------------------------ | ---------------------------------------- |
| `POST`      | `/api/login`             | Admin login using Sanctum authentication |
| `POST`      | `/api/logout`            | Admin logout                             |
| `GET`       | `/api/content/{section}` | Get content for a specific section       |
| `PUT`       | `/api/content/{section}` | Update content (Auth required)           |

## **8️⃣ Deployment Steps**

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Local Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Upload Build Folder to Hostinger**
   - Upload `dist/` folder to your shared hosting server.
   - Configure `.htaccess` to serve `index.html`.

## **9️⃣ Estimated Expenses (INR)**

| Service                                      | Cost (Approx.)            |
| -------------------------------------------- | ------------------------- |
| **Hostinger Shared Hosting** (Business Plan) | ₹330/month (~₹3,960/year) |
| **Domain Name**                              | ₹800 - ₹1,200/year        |
| **SSL Certificate** (Free with Hosting Plan) | ₹0                        |
| **MySQL Database** (Included in Hosting)     | ₹0                        |
| **Total Annual Cost**                        | ~₹4,800 - ₹5,200          |

---

## **✅ Summary**

- **Admin Panel:** Manage website sections dynamically.
- **API:** Fetch and update content in JSON format.
- **React Frontend:** Displays content dynamically using API.
- **Authentication:** Laravel Sanctum (Token-based security) with Cookies.
- **State Management:** Zustand for global state handling.
- **Hosting:** Deployed on Hostinger (Shared Hosting).
- **Estimated Cost:** ~₹4,800 - ₹5,200 per year.

# Laravel Environment Setup (PHP & Composer Installation)

## ✅ Step 1: Install PHP

Laravel requires PHP (minimum version **8.1** for Laravel 10).

### 1.1 Download PHP

If you don't have PHP installed, download it from:  
[🔗 Windows PHP Downloads](https://windows.php.net/download/)

**Recommended Version:** PHP **8.2**

- Use **Non-thread safe version** if using Apache/XAMPP.
- Use **Thread Safe version** for CLI.
- Choose **Windows x64 ZIP (Thread Safe)**.

### 1.2 Install PHP

1. Extract the downloaded ZIP file to `C:\php` (or any preferred location).
2. Rename the extracted folder to just `php`.

### 1.3 Configure PHP in Environment Variables

1. Open **System Properties**:
   - Press `Win + R`, type `sysdm.cpl`, and press **Enter**.
2. Go to **"Advanced"** → **"Environment Variables"**.
3. Under **"System Variables"**, find `Path` → Click **"Edit"**.
4. Click **"New"** and **add the PHP installation path**:
   - Example: `C:\php`
5. Click **OK** to save and exit.

### 1.4 Verify PHP Installation

1. Open **Command Prompt (cmd)** or **PowerShell** and type:

   ```powershell
   php -v
   ```

2. If PHP is installed correctly, you should see an output similar to:

   ```
   PHP 8.2.x (cli) (built: ...)
   ```

3. If you get `"command not found"`, restart your PC and try again.

---

## ✅ Step 2: Install Composer

### 2.1 Download Composer

Go to the [🔗 Composer Download Page](https://getcomposer.org/download/).  
Download `Composer-Setup.exe` (Windows Installer).

### 2.2 Install Composer

1. Run the Installer (`Composer-Setup.exe`).
2. **Select PHP Executable**:
   - Browse to `C:\php\php.exe`.
3. **Enable Composer in System PATH** (should be selected automatically).
4. Complete the installation.

### 2.3 Verify Composer Installation

1. Open **Command Prompt** or **PowerShell** and run:

   ```powershell
   composer -V
   ```

2. Expected output:

   ```
   Composer version 2.x.x
   ```

## ✅ Step 3: Setup Database

## Option 2: Connect Directly to Hostinger MySQL (For Live Development)

If you prefer to develop directly on Hostinger's MySQL database, follow these steps:

1️⃣ Get Your Hostinger MySQL Database Details

    - Log in to Hostinger.
    - Go to Hosting → Databases → MySQL Databases.
    - Find your Database Name, Host, Username, and Password.

2️⃣ Connect to MySQL Database

> For Prod

        Example:
        makefile
        Copy
        Edit
        DB_NAME: envo_care_db
        DB_USER: tin
        DB_PASS: 3W+vbh2@$
        DB_HOST: mysql.hostinger.com
        DB_CONNECTION=mysql

         DB_CONNECTION=mysql
         DB_HOST=auth-db1001.hstgr.io
         DB_PORT=3306
         DB_DATABASE=u809801411_envo_care_db
         DB_USERNAME=u809801411_tin
         DB_PASSWORD=3W+vbh2@$

> For local

        DB_DATABASE=envo_care_db
        DB_USERNAME=root
        DB_PASSWORD=
        DB_HOST=localhost

         DB_CONNECTION=mysql
         DB_HOST=localhost
         DB_PORT=3306
         DB_DATABASE=envo_care_db
         DB_USERNAME=root
         DB_PASSWORD=

## Clear and Cache Configurations

      php artisan config:clear
      php artisan cache:clear
      php artisan config:cache

## Run Migrations to Set Up Database Tables

      php artisan migrate

## create laravel backend Server

      composer create-project --prefer-dist laravel/laravel envo-server

      cd E:\EnvoCare\envo-server

      composer install

- Updating the .env file with the database details:

      APP_NAME=EnvoCare
      APP_ENV=production
      APP_KEY= # Run `php artisan key:generate` and paste the key here
      APP_DEBUG=false
      APP_URL=https://envocare.demovoting.com/ # Replace with your actual domain or subdomain

      # Updated Database Connection

      DB_CONNECTION=mysql
      DB_HOST=auth-db1001.hstgr.io
      DB_PORT=3306
      DB_DATABASE=u809801411_envo_care_db
      DB_USERNAME=u809801411_tin
      DB_PASSWORD=3W+vbh2@$

> This will check if all required PHP extensions and dependencies are installed properly.

      composer check-platform-reqs


      php artisan --version
      php artisan config:clear
      php artisan cache:clear
      php artisan key:generate

> Run backend Server

      php artisan serve

2️⃣ Install Filament for Admin Panel
2️⃣ Check Laravel Version & Install Compatible Filament

Run this command to check your Laravel version:

      php artisan --version
      ✅ If Laravel 10+, install Filament v3:

      composer require filament/filament:^3.3
      ✅ If Laravel 9, install Filament v2:

- Run Filament Installation

  php artisan filament:install
  php artisan filament:install --panels

  php artisan make:filament-user

- Enter an admin email, name, and password for the first admin user.

📌 Step 1: Install Filament Panels
Run this command:

php artisan filament:install --panels
This will:

Publish Filament's config files.
Set up necessary assets.

📌 Step 2: Create an Admin User
Once installed, create an admin user:

php artisan make:filament-user
Enter name, email, password when prompted.
name : envo-admin
email : envocares@gmail.com
pass : envocareadmin@123
📌 Step 3: Login to Filament Panel

Now, visit:
http://127.0.0.1:8000/admin
Login with the credentials you just created.

- Run Laravel Server

           php artisan serve

  Visit http://127.0.0.1:8000/admin
  Log in with the admin credentials you just created.

- pass : envocare@123
- user : envocares@gmail.com
