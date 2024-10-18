import React, { useState } from 'react';
import styles from './index.module.css'; 

function AboutUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.aboutus}>
      <div className={styles.maincontainer}>
        <h1>Добро пожаловать в нашу команду!</h1>

        <div className={`${styles.teamMember} ${openIndex === 0 ? styles.open : ''}`}>
          <h2 onClick={() => toggleOpen(0)}>Ахьмад</h2>
          <p className={`${styles.description} ${openIndex === 0 ? styles.open : ''}`}>
            Ахьмад — генератор идей и человек, ставший живой легендой при жизни. Один из создателей соцсети Одноклассники.
            В 2005 году собрал все возможные награды за книгу «JavaScript простыми словами на чеченском».
          </p>
        </div>

        <div className={`${styles.teamMember} ${openIndex === 1 ? styles.open : ''}`}>
          <h2 onClick={() => toggleOpen(1)}>Мадина</h2>
          <p className={`${styles.description} ${openIndex === 1 ? styles.open : ''}`}>
            Самый ответственный человек на планете. Она — генератор идей, которые в дальнейшем становятся началом чего-то нового, как, например, этот образовательный проект. В 1991 году её идея создать образовательный буткемп "Хайв" взорвала мир. Буткемп получил невероятное внимание благодаря её идее поощрять учеников офферами на 300+ тысяч за успешное освоение вёрстки.
          </p>
        </div>

        <div className={`${styles.teamMember} ${openIndex === 2 ? styles.open : ''}`}>
          <h2 onClick={() => toggleOpen(2)}>Усман</h2>
          <p className={`${styles.description} ${openIndex === 2 ? styles.open : ''}`}>
            Без него наш проект бы не существовал. С программированием он на «ты» с 11 лет, а уже в 11 с половиной стал сеньором. Усман — самый популярный программист Подольска и человек, который убедил нас, что мир должен узнать об этом проекте. Он уверен: современная молодёжь должна развиваться быстрее, ведь у них для этого всё есть, а наша команда станет причиной появления новых IT-звёзд.
          </p>
        </div>

        <div className={`${styles.teamMember} ${openIndex === 3 ? styles.open : ''}`}>
          <h2 onClick={() => toggleOpen(3)}>Марьяшка</h2>
          <p className={`${styles.description} ${openIndex === 3 ? styles.open : ''}`}>
            Я отвечаю за вайб и атмосферу в команде. Мои достижения и награды в сфере программирования настолько велики, что для их перечисления можно было бы создать отдельную платформу, чтобы уделить внимание каждой из них. Моя самая знаменитая награда — это разработка блока с классом div class="эщкере" и шириной в 1677 пикселей.


          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
