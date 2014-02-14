# Mailer
### Kullanicidan Mail Listesi Alma Ekrani
=============
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Ekran goruntusu")

Projede sayfada bulunan bir butona bastigimizda kullanicinin onune bir form cikiyor. Kullanici cikan textinput fielde emailler giriyor. Emailler virgulle ayirladigi zaman kendi baslarina stillendiriliyor ve kullanici daha sonra isterse bunlari teker teker silebiliyor.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Console log uzerinden degerler")

Ayrica form gonderilmesi icin submit butonuna basildiginda __regex__ kullanilarak girilen degerler arasindan sadece dogru emailler input fieldin valuesuna dinamik olarak ekleniyor.

### Regex Email Validation
Email validation icin kullanilabilecek bazi stiller

1. `/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/` Ancak bu cok yetersiz kalmakta.
2. `/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/i` Cok daha yeterli.
3. /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ [Regular-Expressions.info websitesi](http://www.regular-expressions.info/email.html)nden alarak kullandigim email validation expression.


### Referanslar
[jQuery TagsInput Plugin](http://xoxco.com/projects/code/tagsinput/)
[Regex Email Validation](http://www.regular-expressions.info/email.html)
