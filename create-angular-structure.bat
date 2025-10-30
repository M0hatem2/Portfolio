@echo off
echo 🔧 Creating Angular folder structure...

REM ========== CORE ==========
mkdir src\app\core\guards
mkdir src\app\core\interceptors
mkdir src\app\core\models
mkdir src\app\core\services

echo // Auth Guard > src\app\core\guards\auth.guard.ts
echo // Auth Interceptor > src\app\core\interceptors\auth.interceptor.ts
echo export interface User { id: number; name: string; email: string; } > src\app\core\models\user.model.ts
echo export interface Product { id: number; title: string; price: number; } > src\app\core\models\product.model.ts
echo export interface ApiResponse<T> { data: T; success: boolean; } > src\app\core\models\api-response.model.ts
echo // Api Service > src\app\core\services\api.service.ts
echo // Auth Service > src\app\core\services\auth.service.ts
echo // Storage Service > src\app\core\services\storage.service.ts
echo // Core Module > src\app\core\core.module.ts
echo // Core Index > src\app\core\index.ts

REM ========== SHARED ==========
mkdir src\app\shared\components\button
mkdir src\app\shared\components\modal
mkdir src\app\shared\components\spinner
mkdir src\app\shared\components\card
mkdir src\app\shared\directives
mkdir src\app\shared\pipes
mkdir src\app\shared\utils

echo // Button Component > src\app\shared\components\button\button.component.ts
echo.> src\app\shared\components\button\button.component.html
echo.> src\app\shared\components\button\button.component.scss

echo // Modal Component > src\app\shared\components\modal\modal.component.ts
echo.> src\app\shared\components\modal\modal.component.html
echo.> src\app\shared\components\modal\modal.component.scss

echo // Spinner Component > src\app\shared\components\spinner\spinner.component.ts
echo.> src\app\shared\components\spinner\spinner.component.html
echo.> src\app\shared\components\spinner\spinner.component.scss

echo // Card Component > src\app\shared\components\card\card.component.ts
echo.> src\app\shared\components\card\card.component.html
echo.> src\app\shared\components\card\card.component.scss

echo // Highlight Directive > src\app\shared\directives\highlight.directive.ts
echo // Truncate Pipe > src\app\shared\pipes\truncate.pipe.ts
echo // Helpers > src\app\shared\utils\helpers.ts
echo // Shared Module > src\app\shared\shared.module.ts
echo // Shared Index > src\app\shared\index.ts

REM ========== FEATURES ==========
mkdir src\app\features\home\components\banner
mkdir src\app\features\home\pages
mkdir src\app\features\home\services
mkdir src\app\features\products\components\product-card
mkdir src\app\features\products\pages
mkdir src\app\features\products\services
mkdir src\app\features\contact\pages
mkdir src\app\features\contact\services

echo // Home Banner Component > src\app\features\home\components\banner\banner.component.ts
echo.> src\app\features\home\components\banner\banner.component.html
echo.> src\app\features\home\components\banner\banner.component.scss
echo // Home Page Component > src\app\features\home\pages\home-page.component.ts
echo // Home Service > src\app\features\home\services\home.service.ts
echo // Home Routing > src\app\features\home\home-routing.module.ts
echo // Home Module > src\app\features\home\home.module.ts

echo // Product Card Component > src\app\features\products\components\product-card\product-card.component.ts
echo.> src\app\features\products\components\product-card\product-card.component.html
echo.> src\app\features\products\components\product-card\product-card.component.scss
echo // Product List Page > src\app\features\products\pages\product-list.component.ts
echo // Product Details Page > src\app\features\products\pages\product-details.component.ts
echo // Products Service > src\app\features\products\services\products.service.ts
echo // Products Routing > src\app\features\products\products-routing.module.ts
echo // Products Module > src\app\features\products\products.module.ts

echo // Contact Page > src\app\features\contact\pages\contact-page.component.ts
echo // Contact Service > src\app\features\contact\services\contact.service.ts
echo // Contact Routing > src\app\features\contact\contact-routing.module.ts
echo // Contact Module > src\app\features\contact\contact.module.ts

REM ========== LAYOUT ==========
mkdir src\app\layout\header
mkdir src\app\layout\footer
mkdir src\app\layout\sidebar

echo // Header Component > src\app\layout\header\header.component.ts
echo.> src\app\layout\header\header.component.html
echo.> src\app\layout\header\header.component.scss

echo // Footer Component > src\app\layout\footer\footer.component.ts
echo.> src\app\layout\footer\footer.component.html
echo.> src\app\layout\footer\footer.component.scss

echo // Sidebar Component > src\app\layout\sidebar\sidebar.component.ts
echo.> src\app\layout\sidebar\sidebar.component.html
echo.> src\app\layout\sidebar\sidebar.component.scss

echo // Layout Component > src\app\layout\layout.component.ts
echo.> src\app\layout\layout.component.html
echo.> src\app\layout\layout.component.scss
echo // Layout Module > src\app\layout\layout.module.ts

REM ========== ROOT FILES ==========
echo // App Routing > src\app\app-routing.module.ts
echo // App Component > src\app\app.component.ts
echo.> src\app\app.component.html
echo.> src\app\app.component.scss
echo // App Module > src\app\app.module.ts

REM ========== ASSETS ==========
mkdir src\assets\images
mkdir src\assets\icons
mkdir src\assets\i18n

echo {} > src\assets\i18n\en.json
echo {} > src\assets\i18n\ar.json

REM ========== ENVIRONMENTS ==========
mkdir src\environments
echo export const environment = { production: false }; > src\environments\environment.ts
echo export const environment = { production: true }; > src\environments\environment.prod.ts

REM ========== MAIN ==========
echo // Main entry point > src\main.ts

echo ✅ Angular project structure created successfully!
pause
