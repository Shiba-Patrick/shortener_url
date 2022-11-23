# Shortener URL 
將網址縮短為短網址

## function
* 點擊Shorten按鈕後會得到縮短後的網址
* 點擊Copy按鈕可複製短網址
* 可經由短網址連結至原本網址

## Start!!
1. 開啟終端機並clone本地專案
  ```
  git clone https://github.com/daniel155158/shorten_url.git
  ```
3. 進入存放資料夾
  ```
  cd shorten_url
  ```
4. 安裝套件
  ```
  npm install
  ```

5. 新增.env並設置你的mongoose連結碼:帳號+密碼+資料庫名稱
  ```
  MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<xxxxx>.mongodb.net/<table>?retryWrites=true&w=majority
  ```
6. 快速啟動專案
  ```
  npm run dev
  ```
7. 出現下列訊息表示順利運行:
  ```
  App is listening on localhost:3000
  ```
8. 在您的瀏覽器中輸入該網址  http://localhost:3000  即可體驗本專案
   如果要停止體驗，請在終端機內按下ctrl + c，即可結束

## 開發工具
* Node.js 18.12.0
* Express 4.18.2
* Express-Handlebars 6.0.6
* MongoDB
* Bootstrap
* Mongoose 6.7.2
* dotenv 16.0.3
* Bootstrap 5.1.3