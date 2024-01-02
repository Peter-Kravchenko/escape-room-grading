import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchQuest } from '../../store/api-actions';
import {
  getQuest,
  getQuestFetchingStatus,
} from '../../store/quests-data/quests-data.selectors';
import { RequestStatus } from '../../const';
import BookButton from '../../components/book-button/book-button';

function QuestDetails(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchQuest(id));
    }
  }, [dispatch, id]);

  const quest = useAppSelector(getQuest);
  const questFetchingStatus = useAppSelector(getQuestFetchingStatus);

  if (questFetchingStatus === RequestStatus.Pending) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={`${quest?.coverImgWebp}, ${quest?.coverImgWebp} 2x`}
          />
          <img
            src={`${quest?.coverImg}`}
            srcSet={`{${quest?.coverImg} 2x`}
            width={1366}
            height={768}
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            {quest?.title}
          </h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>
            {quest?.type}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width={11} height={14} aria-hidden="true">
                <use xlinkHref="#icon-person" />
              </svg>
              {quest?.peopleMinMax[0]}&nbsp;-&nbsp;{quest?.peopleMinMax[1]}
              &nbsp;чел
            </li>
            <li className="tags__item">
              <svg width={14} height={14} aria-hidden="true">
                <use xlinkHref="#icon-level" />
              </svg>
              {quest?.level}
            </li>
          </ul>
          <p className="quest-page__description">{quest?.description}</p>
          <BookButton />
        </div>
      </div>
    </main>
  );
}

export default QuestDetails;
