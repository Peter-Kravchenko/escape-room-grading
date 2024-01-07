import {
  QuestLevel,
  QuestLevelRus,
  QuestType,
  QuestTypeRus,
} from '../../const';
import { useAppDispatch } from '../../hooks';
import {
  setActiveQuestLevel,
  setActiveQuestType,
} from '../../store/app-process/app-process.slice';
import { TQuests } from '../../types/quest';

type FiltersProps = {
  activeQuestType: TQuests['type'];
  activeQuestLevel: TQuests['level'];
};

function Filters({
  activeQuestType,
  activeQuestLevel,
}: FiltersProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <fieldset className="filter__section">
          <legend className="visually-hidden">Тематика</legend>
          <ul className="filter__list">
            {Array.from(Object.values(QuestType)).map((type) => (
              <li className="filter__item" key={type}>
                <input
                  type="radio"
                  name="type"
                  id={type}
                  checked={activeQuestType === type}
                  onChange={() => {
                    dispatch(
                      setActiveQuestType(type === activeQuestType ? null : type)
                    );
                  }}
                />
                <label className="filter__label" htmlFor={type}>
                  <svg
                    className="filter__icon"
                    width={22}
                    height={18}
                    aria-hidden="true"
                  >
                    <use
                      xlinkHref={`#icon-${
                        type === QuestType.Adventures ? 'adventure' : type
                      }`}
                    />
                  </svg>
                  <span className="filter__label-text">
                    {QuestTypeRus[type]}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset className="filter__section">
          <legend className="visually-hidden">Сложность</legend>
          <ul className="filter__list">
            {Array.from(Object.values(QuestLevel)).map((level) => (
              <li className="filter__item" key={level}>
                <input
                  type="radio"
                  name="level"
                  id={level}
                  checked={activeQuestLevel === level}
                  onChange={() => {
                    dispatch(
                      setActiveQuestLevel(
                        level === activeQuestLevel ? null : level
                      )
                    );
                  }}
                />
                <label className="filter__label" htmlFor={level}>
                  <span className="filter__label-text">
                    {QuestLevelRus[level]}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>
    </div>
  );
}

export default Filters;
