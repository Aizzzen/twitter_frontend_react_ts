# Twitter_frontend_react_ts
![action status](https://github.com/Aizzzen/twitter_frontend_react_ts/actions/workflows/github-actions.yml/badge.svg)

## Данный репозиторий это фронтенд фуллстек проекта, бэк доступен по <a href="https://github.com/Aizzzen/twitter_backend_django">ссылке</a>

## Реализовано:
- страница регистрации и авторизации
- страница пользователя
- логика хранения JWT токенов на стороне клиента, для подтверждения пользователя
- получение, добавление, редактирование и удаление твитов
- добавление и удаление комментариев
- добавление множества изображений (с твитами)
- возможность выхода из аккаунта
- возможность просмотра и редактирования своего профиля
- создание чатов
- возможность онлайн чата с другими пользователями (websocket)

Программа CI - Github Actions. </br>
Все CI задачи (джобы) можно просмотреть в .github/workflows/github-actions.yml </br>

## Для запуска проекта на локальной машине:
    npm start

Проект будет запущен на 3000 порту: [http://localhost:3000](http://localhost:3000)

## Технологии:
- React
- Redux-Saga
- Typescript
- React Router Dom v6
- Axios
- Websocket
- React Hook Form
- yup
- Reselect
- Material
- Sass
- Classnames
- Medium Zoom
- Date Fns
- Dotenv
- Json Server
- React Dev Utils
- jest
- testing-library/react

## Тесты:
- src/utils/\_\_tests__
- src/components/\_\_tests__
- src/components/ui/\_\_tests__
- src/components/chat-view/\_\_tests__
- src/store/ducks/tweets/\_\_tests__
## Команда для запуска тестов:
    npm run test
