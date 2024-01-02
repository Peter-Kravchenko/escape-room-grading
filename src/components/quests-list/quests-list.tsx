import { useAppSelector } from '../../hooks';
import { getQuests } from '../../store/quests-data/quests-data.selectors';
import QuestCard from '../quest-card/quest-card';

function QuestsList(): JSX.Element {
  const quests = useAppSelector(getQuests);

  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export default QuestsList;
