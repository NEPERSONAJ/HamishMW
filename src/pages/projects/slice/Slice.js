import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Игровая ферма аккаунтов';
const description =
  'Один клиент поделился со мной своей историей усталости от рутинной работы по созданию стартовых аккаунтов для увлекательной гачи игры. Ежедневное ручное трудоемкое создание аккаунтов стало преградой для него';
const roles = ['Анализ игры', 'Стратегия', 'Программирование'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://t.me/smmbro24"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>История</ProjectSectionHeading>
              <ProjectSectionText>
             Мой клиент был предпринимателем, зарабатывающим на продаже стартовых готовых аккаунтов в гача-играх. Его подход был интересен: он создавал множество аккаунтов, каждый день получая бесплатный призыв с шансом выпадения крутых легендарных персонажей. Успех и прибыль зависели от крутости персонажа и их количества.
              </ProjectSectionText>
              <ProjectSectionHeading>Вызовы и Решения</ProjectSectionHeading>
              <ProjectSectionText>
              Проблема: Рутина и Затраты Времени
Основная проблема заключалась в том, что на каждом аккаунте ему приходилось проходить обучение для активации стадии забора ежедневных наград. Это было трудоемким и отнимало слишком много времени. К тому же, ежедневное управление множеством аккаунтов становилось непосильной задачей.

Решение: Программа Обучения
Сначала я создал программу, которая проходила обучение на аккаунтах. Теперь клиент мог автоматизировать этот процесс и сэкономить массу времени.

Проблема: Ручной Забор Наград
Ежедневный забор наград также стал большой рутиной. Клиент тратил часы, заходя в каждый аккаунт и делая многочисленные манипуляции для получения ежедневных бонусов.

Решение: Программа для Сбора Наград
Создана вторая программа, которая автоматизировала процесс забора ежедневных бонусов на всех аккаунтах и скриншотинг каждого нового героя с сохранением в определенную папку с названием аккаунта. Теперь клиент мог наслаждаться бесперебойным потоком ресурсов без лишних усилий.

Проблема: Избыточные Скрины Героев
При продаже аккаунтов клиенту не нужны были скрины простых героев, что усложняло процесс. Это стало дополнительной рутиной, которая также требовала времени.

Решение: Программа для Скриншотов
Создана третья программа, которая удаляла лишние скрины героев, которые не влияли на ценность аккаунта для продажи.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="Начало"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Этап"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Создание Специфического Веб-Сайта</ProjectSectionHeading>
              <ProjectSectionText>
              Для удобства управления и монетизации создан специфический веб-сайт. Теперь клиент мог загружать списки аккаунтов с героями, ресурсами и ценами для удобного просмотра и управления.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="Специфический Веб-Сайт"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="Отношения"
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Результаты и Успех</ProjectSectionHeading>
              <ProjectSectionText>
              Благодаря этим трем программам и веб-сайту, клиент стал владельцем полностью автоматизированного бизнеса в мире гача-игр. Его ежемесячный заработок превысил 100 тысяч рублей, а он освободил массу времени для более интересных и прибыльных занятий.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Заключение</ProjectSectionHeading>
              <ProjectSectionText>
              Эта история является примером того, как я, понимая потребности клиента и глубоко анализируя механику игры, может трансформировать рутину в автоматизированный успех. Если у вас есть потребность в подобных программных решениях, не стесняйтесь связаться со мной. Мы вместе сможем создать что-то уникальное и эффективное для вашего бизнеса.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Заключение"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
