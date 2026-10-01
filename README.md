# GG Lua Studio

GameGuardian向けLuaスクリプトの開発・出力用Webアプリです。

**▶ サイトを開く：[https://nyankohack.tokyo/index.html](https://nyankohack.tokyo/index.html)**

## ツール一覧（案内ページからそれぞれ開けます）

- **Luaエディター** — [Lua_editor.html](Lua_editor.html)
  - コード補完（括弧内の引数入力にも対応）
  - リアルタイム構文チェック、ENDの自動修復
  - Undo / Redo、タブ・タッチ入力対応（PC／タブレット向け）
  - 数値計算・ポインター支援などの生成機能
- **HTML保護ツール** — [HTML_protector.html](HTML_protector.html)
  - HTML単体・フォルダー・ZIPを選択して変換済みコピーを作成
  - ファイルはブラウザー内で処理され、送信されません
  - 処理後はZIPでダウンロード

## 利用時の注意

- メインのサイトは**ネットワーク接続が必要**です（初回とライブラリ読み込みのため）。
- スマートフォンでエディターを開くと、タブレット・PC向けである案内が最初の2回表示されます（アクセスは可能です）。
- Luaのソースは自動保存されません。閉じる前に**Luaファイルとして保存**してください。ホーム画面への追加＝アプリのインストールは保存ではありません。
- HTML保護ツールは、自分で公開してよいファイルだけを選択し、生成物は別の場所で表示・動作確認してから使ってください。

## ファイル構成

| ファイル / フォルダー | 役割 |
|---|---|
| `index.html` | 案内ページ（各ツールへの入口） |
| `Lua_editor.html` | Luaエディター本体 |
| `HTML_protector.html` | HTML保護ツール（単体で動作） |
| `manifest.webmanifest` `/sw.js` | ホーム画面追加用の設定 |
| `icons/` | アプリアイコン |
| `licenses/` | 同梱ライブラリーのライセンス文書 |
| `CNAME` / `LICENSE` | カスタムドメイン設定 / 利用条件 |

Copyright © 2026 Hibiki Kato. 利用条件は [LICENSE](LICENSE) を参照してください。
