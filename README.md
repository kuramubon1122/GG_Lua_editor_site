# GG Lua Studio v15

GameGuardian向けLuaエディターと、HTML / 静的サイトのJavaScript保護ツールです。

- [Luaエディター](Lua_editor.html)
- [HTML Protector](HTML_protector.html)
- [案内ページ](index.html)

## v15の変更

HTML Protectorの画面を、エディターと統一したダークUIへ作り直しました。ファイル一覧、追加・解除、ドラッグ＆ドロップ、フォルダー選択、進捗、エラーと再試行、生成物のダウンロードを同じ画面で扱います。チェックボックスを見つけないと生成できない旧UIは廃止しました。詳細設定と長い説明は折りたたみ式です。

**保護ツールは実行に必要な処理コードをHTML内に同梱しています。** `protector.js`や`vendor/`を別途配置しないと動かない構成ではなくなりました。保存した `HTML_protector.html` をブラウザーで直接開く方法にも対応します。埋め込みプレビュー側がWorkerやダウンロードを禁止する場合は、HTMLを直接開くか、公開URLを通常のタブで開いてください。

## 公開用と編集用

- **公開用ZIP**：アプリのHTML内JavaScript・保護処理Worker・Service Workerを難読化した版。
- **暗号化前ZIP**：編集用のHTMLと保守用ソースを別に保管。

公開用ZIPに暗号化前のアプリソースを混ぜません。編集は必ず暗号化前の原本で行ってください。依存ライブラリーは各配布元のビルド形式を同梱し、ライセンス表示を維持します。画像・CSS・manifest・CNAME・LICENSEまで秘密化するものではありません。

## HTML Protectorの使い方

1. HTML、関連ファイル、フォルダー、またはZIPを追加します。サイト一式ではフォルダーかZIPがおすすめです。
2. 秘密鍵・APIキー・私用ファイルを含まないことを確認し、「保護してZIPを作成」を押します。
3. レポートを確認し、ZIPをダウンロードします。HTML単体ではHTMLとしても保存できます。
4. ZIPを展開し、別のテスト環境で動作確認してから、フォルダー構成を保ってGitHubに配置します。

入力をサーバーに送信せず、選択したHTMLやJSを実行せずに処理します。入力ファイルは変更しません。GitHubへの自動アップロード機能はありません。

- UTF-8、入力25 MiB・展開後50 MiB・1000ファイルまで。
- HTMLは8 MiB、変換するJSは1単位3 MiBまで。
- 暗号化ZIP・ZIP64は非対応。危険なパス、破損、CRC不一致、サイズ超過を拒否します。
- 外部CDNのJSは取得・変換しません。SRI、CSPハッシュの対象は整合性優先で残して通知します。
- vendor/や*.min.jsは既定では保持します。設定で変更可能です。
- 変換できないJSは通常エラーとして停止します。原文を残す設定を明示的に有効にした場合だけ続行します。
- .env・鍵ファイル等を除外しますが、秘密情報の完全検出ではありません。
- サーバー側のCSP / HTTPヘッダー、CSS内URL、動的な参照は検証しません。

**解読不可能な暗号化・コピー防止ではありません。** JavaScriptの難読化で解析の手間を増やします。文章、HTML構造、CSS、画像、JSON、イベント属性などは原則そのままです。公開前の実行テストとライセンス確認が必要です。

## Luaエディター

Undo / Redo、括弧内の候補、通常表示とタッチ入力、リアルタイム構文診断、現在のコードに基づくEND修復、選択コードの説明、各種生成・計算機能に対応します。候補の変数収集は限定的な字句解析で、厳密なスコープ・型推論ではありません。

タッチ入力と通常表示は同じ編集モデルを使います。スマートフォンでエディターを開いた最初の2回だけ、タブレット・PC向けであることを案内します。再読み込みも1回です。ブラウザー保存を禁止した場合は自動案内を省略します。

**エディターの起動にはネット接続が必要です。** MonacoをCDNから読み込みます。ソースの自動保存・自動バックアップはありません。アプリのインストールはコードの保存ではないため、閉じる前にLuaファイルとして保存してください。

生成する保護付きLuaは、オフライン・入力なし・単一ファイルの方式を維持しています。AES-256-CTR、HMAC-SHA-256、鍵回復VM、対応範囲内での部分VM変換を使用します。鍵抽出・コピー・ローダー差し替え等を完全には防ぎません。

## 配置

ZIPそのものではなく、展開した中身を配置します。

```text
index.html / Lua_editor.html / HTML_protector.html
manifest.webmanifest / sw.js
icons/ / licenses/
README.md / THIRD_PARTY_NOTICES.md
GG_script_editor_site_screenshot_1.jpg
CNAME / LICENSE / .nojekyll / _headers
```

`CNAME`・`LICENSE`とPWAのID・scopeは維持しています。既存の `protector.js`・`protector.css`・`protector-worker.js`・`vendor/`・`app.js`・`app.css`・`touch-editor.js`・`editor-extras.js` はv15の公開版では不要です。旧版の読みやすいソースを公開先に残さないよう、v15へ切り替えた後は削除してください。Gitの過去の履歴からソースを回収できるわけではありません。

## 検証と制限

Chromium / WebKitでブラウザー操作を検証しますが、実機のiPadOSやAndroidを認証するものではありません。OSの日本語IME、ホーム画面からの起動、保存画面、低メモリー時の復帰は実機確認が必要です。WebKitでは過去に再読み込み時の一時的なLoad failedも観測しています。GameGuardian実機での新しい実行保証や起動速度保証ではありません。

Copyright © 2026 Hibiki Kato. 利用・再配布の条件は既存の [LICENSE](LICENSE) に従います。第三者ソフトウェアの条件は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) と `licenses/` を参照してください。本サイトはGameGuardian公式サイトではありません。
