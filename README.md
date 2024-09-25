<h1> Sepet Uygulaması (Thunk ile) </h1>
<hr>

Bu proje, React, Redux, Redux Thunk ve React Router DOM kullanarak geliştirilmiş bir e-ticaret sepet uygulamasıdır. Uygulamada Tailwind CSS kullanılarak şık ve modern bir kullanıcı arayüzü oluşturulmuştur. Ayrıca, json-server kullanılarak basit bir API üzerinden veri çekilmekte ve sepet işlemleri yapılmaktadır. <br>

<h1> Özellikleri </h1>
<hr>

- Ürün Listesi Görüntüleme: API'den gelen ürünler liste halinde görüntülenir. <br>
- Sepete Ekleme/Çıkarma: Kullanıcılar istedikleri ürünleri sepete ekleyebilir veya çıkarabilir. <br>
- Toplam Fiyat Hesaplama: Sepetteki ürünlerin toplam fiyatı otomatik olarak hesaplanır. <br>
- Sayfa Geçişleri: React Router DOM ile sayfalar arasında kolayca geçiş yapılabilir. <br>
- Durum Yönetimi: Redux ile uygulamanın durumu yönetilir, Thunk ile asenkron işlemler gerçekleştirilir. <br>

<h1> Kütüphaneler </h1>
<hr>

- Tailwind CSS: Hızlı ve kullanışlı stil oluşturmak için kullanıldı. <br>
- JSON Server: Sahte bir REST API oluşturmak için kullanıldı. <br>
- React Redux: Redux ile React bileşenlerini bağlamak için kullanıldı. <br>
- Redux Thunk: Asenkron işlemler (API çağrıları) için Redux Thunk middleware kullanıldı. <br>
- React Router DOM: Sayfa yönlendirme işlemleri için kullanıldı. <br>

<h1> Redux Yapısı </h1>
<hr>

- Actions: Ürün ekleme, çıkarma gibi işlemleri tanımlar. <br>
- Reducers: Uygulamanın mevcut durumunu günceller. <br>
- Thunk: Asenkron işlemleri yönetir (örneğin, API'den ürün verilerini çeker). <br>

<h1> Uygulama Akışı </h1>
<hr>

- Ana Sayfa: Ürünlerin listelendiği sayfa. <br>
- Ürün Detay Sayfası: Bir ürün hakkında daha fazla bilgi görüntüleyebilirsiniz. <br>
- Sepet: Sepete eklenmiş ürünlerin listelendiği sayfa. Burada ürünleri çıkarabilir veya adedini değiştirebilirsiniz. <br>

<h1> Ekran Görüntüsü </h1>

![](images/Thunk.gif)
