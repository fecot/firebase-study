## Firebaseによるシングルアプリケーション
[参考書籍](https://www.amazon.co.jp/Firebase%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%AC%E3%82%B9%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3-%E6%8A%80%E8%A1%93%E3%81%AE%E6%B3%89%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%EF%BC%88NextPublishing%EF%BC%89-%E5%B0%8F%E5%B3%B6-%E4%BD%91%E4%B8%80-ebook/dp/B07RWXSNRH/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=15EX1N17ZADND&keywords=firebase%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB&qid=1643639326&s=digital-text&sprefix=firebase%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%2Cdigital-text%2C176&sr=1-1) 

### firebase初期化

```terminal
yarn global add firebase-tool
firebase login (chromeで許可
firebase init 
```
* Firestore, Functions, Hosting, Storageを選択
* プロジェクトは1つ新規で作成したもの
* Firestoreがないとエラーになるので管理画面から作成(production)
* Hostingディレクトリがpublicなのでbuildに変更

デプロイ
```terminal
yarn build
firebase deploy --only hosting
```

URLが表示されreact-create-appのデフォルトがブラウザで確認できた

注) .firebasercが作成されるがproject idがばれるので無視リストに
