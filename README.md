# Corona Tracker using React framework
## 概要
[「はじめてさわるReact & JavaScript: JavaScriptとReactの使い方が同時にわかる本(React入門)」](https://www.amazon.co.jp/gp/product/B09693ZJCV) を参考に作成しました。

React を使用し書籍の作者が作成した Corona Tracker API サーバーからデータを取得し  
表示するWebアプリです。
URL隠蔽の目的で中間にプロキシを経由させています。

## 構成図
```mermaid
   flowchart TB
   style fw1 fill:#f9f,color:#000,stroke-dasharray: 5 5
   style fw2 fill:#f9f,color:#000,stroke-dasharray: 5 5
   style c0 stroke-dasharray: 5 5
   style c1 stroke-dasharray: 5 5
   style c2 stroke-dasharray: 5 5
   style c4 stroke-dasharray: 5 5
   style b1 stroke-dasharray: 5 5
   style b2 stroke-dasharray: 5 5
   style p1 stroke-dasharray: 5 5
   style p2 stroke-dasharray: 5 5
   style s1 stroke-dasharray: 5 5
   style s2 stroke-dasharray: 5 5
   style react fill:#00f

   c0-->b1-->fw1-->p1-->s1
   c1-->b1
   c2-->b1
   s2-->p2-->fw2-->b2-->c4
   subgraph Client
       c0[Access Web App]
       c1[Select Country]
       c2[Click All Country]
       c4[View Weather Result Data]
   end
   subgraph Browser
       b1[Send HTTP Request]
       b2[Receive Weather Data]
   end
   subgraph react [React Framework]
       fw1[Send HTTP Request]
       fw2[Receive Weather Data]
   end
   subgraph vercel [Vercel Web Hosting Service]
       react
   end
   subgraph Proxy
       p1[Forward HTTP Request]
       p2[Foward Weather Data]
   end
   subgraph API-Server
       s1[Receive HTTP Request]-->s2[Send Weather Data]
   end
```
## 動作
### パターン1
1. Webアプリへアクセスする
1. デフォルトでは日本のコロナ感染者情報を表示する
* 表示項目
	* 日付
	* 新規感染者
	* 感染者数
	* 新規回復者
	* 回復者総数

### パターン2
1. Webアプリへアクセスする
1. 国を選択する
1. 選択した国のコロナ感染者情報を表示する

### パターン3
1. Webアプリへアクセスする
1. 「世界の感染状況」をクリックする
1. 世界のコロナ感染者情報を表示する
* 表示項目
	* 国名
	* 新規感染者
	* 感染者総数
