### Installation
1. **Clone this repo**
2. **Access the project directory**
3. **Install the Project Dependencies from the Composer**
```
composer install
```
4. **Install NPM Dependencies**
```
npm install
```
5. **Create a Copy of Your .env File**
```
cp .env.example .env
```
6. **Generate Your Encryption Key**
```
php artisan key:generate
```
7. **Add the Tables of Your Database with Migrations**
```
php artisan migrate
```
8. **Run those commands in two terminals**
```
php artisan serve
```
```
npm run dev
```
