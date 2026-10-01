// Online-only transport. No Cache Storage and no source/data persistence.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(fetch(event.request).catch(()=>{
  if(event.request.mode==='navigate')return new Response('<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GG Lua Studio — 接続が必要です</title><body style="font-family:system-ui;background:#0c1017;color:#f1f5f9;padding:32px;line-height:1.8"><h1>ネット接続が必要です</h1><p>このアプリはオンライン利用です。接続を戻して、このページを再読み込みしてください。</p><p>Connection required. Reconnect and reload this page.</p></body></html>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
  return Response.error();
 }));
});
