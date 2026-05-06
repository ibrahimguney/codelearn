# CodeLearn AI — GitHub Pages Deployment Rehberi

## 🚀 Yayına Alma Adımları

### 1. GitHub Hesabı & Repository

1. [github.com](https://github.com) adresine git ve giriş yap
2. Sağ üstteki **+** → **New repository** tıkla
3. Repository adı: `codelearn` (ya da istediğin isim)
4. **Public** seç ✅
5. **Create repository** tıkla

---

### 2. Dosyaları Yükle

**Seçenek A — GitHub Web Arayüzü (Kolay)**
1. Repository sayfasında **Add file → Upload files** tıkla
2. `index.html` dosyasını sürükle-bırak
3. **Commit changes** tıkla

**Seçenek B — Git Komut Satırı**
```bash
git init
git add index.html
git commit -m "CodeLearn AI - ilk sürüm"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/codelearn.git
git push -u origin main
```

---

### 3. GitHub Pages Aktifleştir

1. Repository sayfasında **Settings** sekmesine git
2. Sol menüden **Pages** tıkla
3. **Source** altında **Deploy from a branch** seç
4. **Branch**: `main` → **/ (root)** seç
5. **Save** tıkla

⏳ 1-2 dakika bekle, ardından:

```
https://KULLANICI_ADIN.github.io/codelearn/
```

adresinde siteni görürsün! 🎉

---

### 4. Özel Domain (İsteğe Bağlı)

Kendi domain'in varsa:
1. **Settings → Pages → Custom domain** kısmına domain'ini yaz
2. Domain sağlayıcında CNAME kaydı ekle:
   - `CNAME codelearn KULLANICI_ADIN.github.io`

---

## 🔧 Özelleştirme

### Anthropic API Key
`index.html` içindeki API çağrıları Claude API'yi kullanır.
GitHub Pages üzerinden çalışması için API key yönetimi gerekebilir.

> **Not**: API key'i asla public repository'ye ekleme!
> Bunun yerine bir backend proxy kullan veya
> Anthropic'in CORS politikasını kontrol et.

### Site Başlığı & Meta
`index.html` içinde şu satırları düzenle:
```html
<title>CodeLearn AI — Kodlamayı Öğren</title>
<meta name="description" content="...">
```

---

## 📁 Dosya Yapısı

```
codelearn/
├── index.html        ← Ana uygulama (tek dosya!)
├── README.md         ← Proje açıklaması
└── DEPLOYMENT.md     ← Bu dosya
```

---

## ✅ Kontrol Listesi

- [ ] GitHub hesabı oluşturuldu
- [ ] Repository oluşturuldu (public)
- [ ] `index.html` yüklendi
- [ ] GitHub Pages aktifleştirildi
- [ ] Site adresi çalışıyor
- [ ] Mobilde test edildi

---

## 🆘 Sorun Giderme

**Site açılmıyor?**
- 2-5 dakika bekle, GitHub Pages build süresi gerektirir
- Settings → Pages sayfasında yeşil ✅ işaretini kontrol et

**404 hatası?**
- Dosya adının tam olarak `index.html` olduğunu kontrol et
- Branch adının `main` olduğunu kontrol et

**AI yanıt vermiyor?**
- Tarayıcı konsolunu kontrol et (F12)
- API endpoint'inin erişilebilir olduğunu kontrol et

---

Başarılar! 🚀 CodeLearn AI platformun yayında!
