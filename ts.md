### Техническое задание

О проекте
Escape Room — это сайт компании, которая занимается проведением игровых квестов разной тематики и уровней сложности.

На сайте вы можете найти интересный квест, ознакомиться и с информацией по квесту, забронировать его на удобную дату и время для больших компаний и даже двух человек.

Проект реализуется на TypeScript.

1. Описание функциональности
   1.1. Страницы приложения
   Приложение состоит из шести страниц:

Главная (Каталог)
Страница квеста
Контакты
Авторизация
Бронирование квеста — страница приватная, доступна после авторизации
Мои бронирования — страница приватная, доступна после авторизации
Если пользователь не авторизован, то при попытке перехода к приватной странице выполняется перенаправление на страницу Авторизации. После успешной авторизации пользователя возвращает на страницу, которую он хотел посетить.

В шапке каждой страницы отображается ссылка на страницу Авторизации (если пользователь не авторизован) или активная кнопка Выйти (если пользователь авторизован).

Клик по кнопке Выйти приводит к завершению сеанса работы — выходу из закрытой части приложения.

Для неавторизованного пользователя доступны ссылки на страницы квесты и контакты в меню хэдера. Для авторизованных — к ним добавляется ссылка на страницу Мои бронирования.

Обращение к несуществующей странице (например, через адресную строку) не приводит к появлению ошибок в приложении, а корректно обрабатывается маршрутизацией. Пользователь перенаправляется на страницу «404». Дизайн страницы остаётся на усмотрение студента. В самом простом случае это может быть страница с текстом 404 Not Found и ссылкой для перехода на главную страницу приложения.

1.1.1. Главная страница (Каталог)

На главной странице каталога отображаются карточки квестов, которые можно отфильтровать по тематикам и уровню сложности.

После загрузки сайта всегда активены фильтры все квесты и любой.

При выборе уровня сложности или смене тематики на странице остаются только те квесты, которые принадлежат данным фильтрам.

Тематика одно из нескольких значений: Приключения, Ужасы, Мистика, Детектив, Sci-fi, Все квесты.

Уровень сложности, одно из нескольких значений: простой, средний, сложный, любой.

При смене вариантов фильтра список вариантов квеста перерисовывается.

При обновлении сайта сбрасываются все выбранные фильтры и отображаются все квесты и любой сложности.

Каждая карточка квеста содержит информацию:

изображение (обложки) квеста;

название квеста;

отображение уровня сложности квеста;

отображение максимального и минимального количества участников квеста;

Клик по карточке квеста выполняет переход на Страницу квеста с подробной информацией и возможностью бронирования.

Адрес страницы с подробной информации о квесте выглядит следующим образом: /quest/:id, где id идентификатор предложения (квеста). Например, /quest/1704.

1.1.2. Страница контакты

Ссылка в главном меню контакты ведёт на страницу контакты.

На странице доступна интерактивная карта с отметкой месторасположения организации. Все данные статичны.

1.1.3. Страница карточки квеста

На странице карточки квеста представлена расширенная информация о квесте:

изображение (обложка), является фоном страницы;

название квеста;

тематика квеста;

количество человек, минимальное и максимальное количество участников, целое число от 2 до 10;

уровень сложности;

подробное описание каждого квеста, текст должен содержать от 50 до 300 символов;

кнопка Забронировать;

Кнопка Забронировать ведёт на страницу /quest/:id/booking или на авторизацию с последующим переходом к /quest/:id/booking.

1.1.4. Страница авторизации

Для входа в сервис пользователь вводит логин (email) и пароль.

Поскольку у сервиса отсутствует возможность регистрации, логин и пароль могут быть любыми, но не пустыми.

В поле «логин» должен вводится корректный email.

В поле «пароль» должен вводиться валидный пароль. Под валидным паролем подразумевается пароль, который состоит минимум из одной буквы и цифры. Валидный пароль считается от 3 до 15 символов.

Страница доступна только неавторизованным пользователям. Если пользователь уже авторизован и попытается попасть на страницу входа, его перекинет на главную страницу каталога квестов.

Информация об ошибках выводится в блок ошибок.

1.1.5. Страница бронирования

Для старта бронирования даты пользователь должен быть авторизован.

Страница доступна при клике на кнопку Забронировать со страницы карточки квеста.

Если пользователь не авторизовался, то при клике на кнопку забронировать его перебрасывает на страницу авторизации.

Карта реализуется с помощью библиотеки Leaflet.

При получении информации о бронировании квеста сервер возвращает массив мест (place) проведения квеста, где можно выполнить бронирование квеста (массив может содержать только одно место).

Каждое место включает в себя информацию об адресе, координатах и времени бронирования квеста.

Координаты места боронирования необходимы, чтобы установить маркер места проведения квеста на карте. Если в информации о бронировании квеста массив из нескольких мест, то на карте должны отображаться несколько маркеров для каждого места проведения квеста. Позиция каждого маркера на карте должна соответствовать его координатам.

Ниже, под картой, отображаются адрес выбранного места квеста и возможные слоты времени для бронирования.

Данные о слоте бронирования содержат информацию о времени, например 14:00, и свойство isAvailable. Если свойство isAvailable имеет значение true, то данный слот свободен и его можно выбрать для бронирования. Такие слоты времени, при их выборе, меняют цвет. Если свойство isAvailable имеет значение false, то это означает, что данный слот уже занят. Занятые слоты не могут быть выбраны.

При первом открытии страницы бронирования квеста, на карте нужно выделить отдельным маркером первое место из массива и отрисовать адрес и список слотов времени для бронирования, которые соответствуют первому месту проведения квеста.

Маркеры на карте должны быть «кликабельными» (т.е. на них можно нажать левой кнопкой мыши) и получить другой результат на странице. При нажатии на не выбранный маркер, адрес под картой и слоты времени бронирования должны быть перерисованы — они должны соответствовать новому, выбранному месту бронирования. Также при нажатии на маркер на карте, выбранный маркер должен менять цвет, чтобы можно было понять какой маркер выбран в данный момент.

Со стилями состояний слотов и маркеров вы можете ознакомиться в ui-kit в макете проекта.

Форма бронирования

Поле имя — валидное имя подразумевает текст от 1 до 15 символов.

Поле номер телефона — валидный номер телефона, номер формата +7 (000) 000-00-00 (Ру-формат).

Поле количества участников проходит валидацию данных в соответствии с информацией о выбранном квесте: пользователь не может забронировать квест на меньшее или большее количество участников, чем указано в карточке квеста.

Для валидации данных используется библиотека React Hook Form.

При корректном вводе данных, заявка на бронирования квеста отправлена. Пользователя перенаправляет в раздел Мои бронирования.

Карточка квеста появляется на странице Мои бронирования с указанием количества участников введённых при бронировании.

В случае возникновения ошибки следует уведомить пользователя. Способ отображения ошибки остаётся на усмотрение разработчика.

1.1.6 Мои бронирования

Переход на страницу Мои бронирования (/my-quests) возможен из меню хэдера или после бронирования квеста.

На странице отображаются все карточки забронированных квестов.

При клике на кнопку Отменить карточка квеста удаляется из списка. На сервер уходит запрос отмены бронирования.

1.1.7 Разное

В зависимости от состояния, к некоторым элементам управления применяются соответствующие классы оформления. Например, активный фильтр и так далее. Примеры доступны в директории с вёрсткой (build).

Стили валидации полей и заглушки на случай, если в разделе мои бронирования пусто или фильтрам на главной не соответствует ни один квест остаются на усмотрения разработчика.

2. Взаимодействие с сервером
   Все необходимые данные загружаются с сервера.

Сервер доступен по адресу: https://grading.design.htmlacademy.pro/v1/escape-room/.

Спецификация по взаимодействию с сервером в формате OpenAPI — https://grading.design.htmlacademy.pro/spec/escape-room/v1.

В случае недоступности сервера отображается информационное сообщение. Дизайн сообщения остаётся на усмотрение разработчика.

Сервер принимает данные в виде JSON-объекта.

Авторизация на сервере происходит на основании токена. Токен передаётся с каждым запросом в заголовке X-Token.

3. Дополнительно
   Для валидации данных используется библиотека React Hook Form. Описание по работе с библиотекой и сравнение подходов работы с Pristine вы найдёте в файле VALIDATION в архиве с материалами.

Для работы с картами используйте библиотеку Leaflet аналогично курсу. Библиотека устанавливается с помощью команды npm install. Добавлять карту через ref-механизм не нужно.

Если при подключении карт возникнут проблемы отображения, вы можете использовать тайл 2Gis, вместо OpenStreetMap. Для этого достаточно поставить новый адрес тайла: http://tile2.maps.2gis.com/tiles?x={x}& y={y}& z={z}.

Для создания нового проекта используйте архив с вёрсткой и сборкой на основе Vite.