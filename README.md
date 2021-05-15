# Постановка задачи

Имеется некая система, которая обрабатывает авиа перелёты. Перелёт — это перевозка пассажира из одной точки в другую с
возможными промежуточными посадками. Перелёт можно представить как набор из одного или нескольких элементарных
перемещений, называемых сегментами.

Вам нужно сверстать и отрисовать страницу результатов поиска перелётов. На странице помимо карточек перелётов должен
присутствовать блок с фильтрами и сортировками. Фильтрация и сортировка должна происходить без перезагрузки страницы.

К заданию прилагается mock файлом со список перелётов, а так же общий вид макета страницы с перечнем фильтров и блоком
сортировки.

Обращаем внимание, что фильтры по пересадкам и авиакомпаниям должны строиться на основании данных mock файла.
Дополнительно, по возможности, предусмотрите фасетную фильтрацию с динамическим состоянием фильтров (к примеру при
выбранном фильтре «без пересадок» фильтры авиакомпаний, для которых таких перелетов нет, становятся неактивными).

Вы можете использовать любой фреймворк на ваше усмотрение или чистый JS.

Мы не накладываем ограничений на поддержку браузеров.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
