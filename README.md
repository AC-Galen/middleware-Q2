# Express Middleware

## Features/功能
利用 Express 框架內的 Middleware，使伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡。

## Environment Setup/環境建置
[Node.js](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[nodemon](https://www.npmjs.com/package/nodemon)

## 安裝與執行步驟 / Installation and execution
1.打開終端機(Terminal)，使用 git clone 將專案下載至本機電腦，或是直接在 github 下載專案壓縮檔(Download ZIP)。

```
git clone https://github.com/AC-Galen/middleware-Q2.git
```

2. 在終端機輸入以下指令，進入專案資料夾
```
cd middleware
```

3. 再安裝執行專案需要的相關套件
```
npm install
npm install nodemon
```

4. 接著就可以啟動伺服器來執行專案。
```
npm run dev
``` 

5. 當終端機顯示以下訊息即成功啟動，使用瀏覽器於網址列中輸入 http://localhost:3000 即可開始操作專案～
```
App running on port 3000
```

6. 在伺服器啟動狀態下於鍵盤按下 Ctrl + C ，即可關閉伺服器停止執行專案
