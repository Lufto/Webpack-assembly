import styles from './Count.module.scss'

const Count = () => {
  console.log('Styles:', styles);

  return (
    <div>
      <div className={styles.clock}>Clock content</div>
    </div>
  );
};

export default Count;