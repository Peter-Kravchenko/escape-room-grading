import { useEffect } from 'react';
import Filters from '../../components/filters/filters';
import Loader from '../../components/loader/loader';
import QuestsList from '../../components/quests-list/quests-list';
import { QuestLevel, QuestType, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getActiveQuestLevel,
  getActiveQuestType,
} from '../../store/app-process/app-process.selectors';
import {
  getQuests,
  getQuestsFetchingStatus,
} from '../../store/quests-data/quests-data.selectors';
import { resetFilters } from '../../store/app-process/app-process.slice';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const quests = useAppSelector(getQuests);
  const questsFetchingStatus = useAppSelector(getQuestsFetchingStatus);

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

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  if (questsFetchingStatus === RequestStatus.Pending) {
    return <Loader />;
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
