import { TQuests } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type TQuestsListProps = {
  quests: TQuests;
};

function QuestsList({ quests }: TQuestsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export default QuestsList;
