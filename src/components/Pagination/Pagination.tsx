import { PAGE_CHANGE_STEPS } from '../../constants/main'
import { useAppContext } from '../../context/AppContext'
import styles from './Pagination.module.scss'

export const Pagination = () => {
  const {
    currentPage,
    setPage,
    totalPages,
    nextPage,
    prevPage,
    nextMultiplePages,
    prevMultiplePages,
    isLooped,
    toggleLoop,
  } = useAppContext()

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.pagination}>
      <button
        onClick={prevPage}
        disabled={!isLooped && currentPage === 1}
      >
        {'<'}
      </button>
      <button
        onClick={() => prevMultiplePages(PAGE_CHANGE_STEPS)}
        disabled={!isLooped && currentPage === 1}
      >
        {'<<'}
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={page === currentPage ? styles.active : ''}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => nextMultiplePages(PAGE_CHANGE_STEPS)}
        disabled={!isLooped && currentPage === totalPages}
      >
        {'>>'}
      </button>
      <button
        onClick={nextPage}
        disabled={!isLooped && currentPage === totalPages}
      >
        {'>'}
      </button>

      <div className={styles['pagination-mode']}>
        <label>
          <input
            type='checkbox'
            checked={isLooped}
            onChange={toggleLoop}
          />
          Зацикленная пагинация
        </label>
      </div>
    </div>
  )
}
