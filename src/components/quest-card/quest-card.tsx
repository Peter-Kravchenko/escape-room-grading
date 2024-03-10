import { Link } from 'react-router-dom';
import { TQuest } from '../../types/quest';
import { AppRoute, QuestLevelRus } from '../../const';

type QuestCardProps = {
  quest: TQuest;
};

function QuestCard({ quest }: QuestCardProps): JSX.Element {
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${quest.previewImgWebp}, ${quest.previewImgWebp} 2x`}
          />
          <img
            src={quest.previewImg}
            srcSet={`${quest.previewImg} 2x`}
            width={344}
            height={232}
            alt={quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link
            to={`${AppRoute.Quest}/${quest.id}`}
            className="quest-card__link"
          >
            {quest.title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {quest.peopleMinMax[0]}–{quest.peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {QuestLevelRus[quest.level]}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
