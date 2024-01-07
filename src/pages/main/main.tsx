import Filters from '../../components/filters/filters';
import QuestsList from '../../components/quests-list/quests-list';
import { QuestLevel, QuestType } from '../../const';
import { useAppSelector } from '../../hooks';
import {
  getActiveQuestLevel,
  getActiveQuestType,
} from '../../store/app-process/app-process.selectors';
import { getQuests } from '../../store/quests-data/quests-data.selectors';

function Main(): JSX.Element {
  const quests = useAppSelector(getQuests);

  const activeQuestType = useAppSelector(getActiveQuestType);
  const activeQuestLevel = useAppSelector(getActiveQuestLevel);

  let filteredQuests = quests;

  if (activeQuestType !== QuestType.All) {
    filteredQuests = filteredQuests.filter(
      (quest) => quest.type === activeQuestType
    );
  }

  if (activeQuestLevel !== QuestLevel.All) {
    filteredQuests = filteredQuests.filter(
      (quest) => quest.level === activeQuestLevel
    );
  }

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
        <Filters
          activeQuestType={activeQuestType}
          activeQuestLevel={activeQuestLevel}
        />
        <h2 className="title visually-hidden">Выберите квест</h2>
        {filteredQuests.length === 0 ? (
          <h1 className="title">Квесты по указанным фильтрам не найдены</h1>
        ) : (
          <QuestsList quests={filteredQuests} />
        )}
      </div>
    </main>
  );
}

export default Main;
