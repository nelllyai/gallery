import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import ReactDOM from 'react-dom';
import {useNavigate} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {collectionRequestAsync} from '../../store/collection/collectionAction';
import LikedPhoto from './LikedPhoto';
import {ClipLoader} from 'react-spinners';

export const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const overlayRef = useRef(null);

  const username = useSelector(state => state.auth.data.username);
  const likedPhotos = useSelector(state => state.collection.data);
  const loading = useSelector(state => state.collection.loading);

  useEffect(() => {
    dispatch(collectionRequestAsync(username));
  }, []);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current) {
      navigate(`/`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>Последние понравившиеся</h2>

        {
          loading ?
          <ClipLoader
            color={'darkslategrey'}
            size={150}
          /> :
          <ul className={style.list}>
            {
              likedPhotos.map(photo => (
                <LikedPhoto key={photo.id} photoData={photo} />
              ))
            }
          </ul>
        }

        <button
          className={style.close}
          onClick={() => navigate(`/`)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
