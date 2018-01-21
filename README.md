Foxtar market
================================

### Используемые в проекте технологии 

1. Сборщик проектов Gulp.js
2. Библиотека JavaScript - jQuery

### Плагины

1. slick-slider - стилизация карусели
2. slick-nav - стилизация мобильного меню
3. form-stayler - стилизация элементов форм
4. price-range - стилизация фильтра цены
5. datepicker - стилизация календаря



### Шрифты и иконки

1. Font-Awesome - иконочный шрифт 
2. Шрифты: 
- Roboto: 400,500,700
- Open Sans: 600,800
- Raleway: 700
- Lato: 700
- Myriad Pro

### Стандартные компоненты и классы

***Компоненты***
1. Стилизируем заголовки:
```
    .title 
    .title.small-size-title
    .title.medium-size-title
    .title-block
    .text-regular
    .text-medium
    .text-bold

```
2. Стандартные кнопки:
```
    .btn
    .btn-big
    .btn-mid
    .btn-less-than-average
    .btn-small
    .btn-xs
    .btn-registry
    .btn-items

```    
3. Отступы между стандартными блоками:
```
    .default-section

```
4. Стилизируем стандартную текстовую информацию:
```
    .text-default
```

***Классы***
1. Создаем флекс контейнеры
```
    .d-flex
```
2. Выравнивание элементов по горизонтали и вертикали:
```
    .justify-content-start
    .justify-content-end
    .justify-content-center
    .justify-content-between
    .justify-content-around
    .align-items-start
    .align-items-end
    .align-items-center
    .align-items-baseline
    .align-items-stretch
    .text-center
```
3. Цвет для текста:
```
    .text-white
    .text-off-white
    .text-dark
    .text-black
    .text-red
    .text-green
    .text-blue
    .text-gray

```
4. Цвет для фона:
```
    .bg-white
    .bg-dark
    .bg-light-grey
    .bg-green
    .bg-red
    .bg-orange
    .bg-light-orange

```
5. Стилизируем карточки товаров:
```
    .card.large-card
    .card.medium-card
    .card.row-card
    .card.small-card
```
---

***Основные контрольные точки media-запросов***
```
@media (max-width: 1199px) - устройства c разрешением до 1199px
@media (max-width: 991px) - устройства c разрешением до 991px
@media (max-width: 767px) - устройства c разрешением до 767px
@media (max-width: 599px) - мобильные устройства c разрешением до 599px
@media (max-width: 479px) - мобильные устройства c разрешением до 479px
```
---

**Структура папок**

Название папок  | Содержание файла
----------------|----------------------
app             | Директория с готовым проектом
app/css         | Готовые стили к продакшену
app/js          | Готовый js к продакшену
app/img         | Готовые картинки к продакшену
app/fonts       | Шрифты
src             | Директория с исходными файлыми
src/css         | Исходные стили, которые будут конвертироваться в app/css

---
