import Filters from '../../components/filters/filters';
import QuestsList from '../../components/quests-list/quests-list';

function Main(): JSX.Element {
  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">
            Выберите тематику
          </h2>
        </div>
        <Filters />
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestsList />
      </div>
    </main>
  );
}

export default Main;
