import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Используемые инструменты"
        description="Список аппаратных и программных средств, которые я использую для своей работы"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Используемые инструменты"
          description="Относительно полный список инструментов, приложений, аппаратных средств и многого другого, которые я использую ежедневно для дизайна и программирования."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Дизайн</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> - мой основной инструмент для дизайна пользовательского интерфейса. В 2020 году я перешел с Sketch и не смотрю назад.
                  </ListItem>
                  <ListItem>
                    Любые мои анимации создаются в Adobe After Effects. Пока что я не нашел ни одного продукта вне Adobe, который был бы настолько хорош. Если у кого-то есть предложения, пожалуйста, <Link href="/contact">свяжитесь со мной</Link>.
                  </ListItem>
                  <ListItem>
                    Для создания 3D-моделей я использую <Link href="https://www.blender.org/">Blender</Link>. С версии 2.8 он стал гораздо проще в использовании и во многих отношениях превосходит дорогие инструменты, такие как 3DS Max или Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Разработка</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Я использую <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> в качестве текстового редактора, с темой Atom One Dark и шрифтом Operator Mono по умолчанию.
                  </ListItem>
                  <ListItem>
                    Firefox - мой основной браузер как для разработки, так и для общего использования.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> - моя библиотека для разработки фронтенда. Ментальная модель, ориентированная на компоненты, была первой вещью, которая действительно имела смысл для меня как дизайнера.
                  </ListItem>
                  <ListItem>
                    Для 3D-эффектов и шейдеров изображений я использую <Link href="https://threejs.org/">three.js</Link>. У него есть небольшой порог входа, но с его помощью можно создавать действительно мощные вещи.
                  </ListItem>
                  <ListItem>
                    Для CSS я использовал различные препроцессоры и решения css-и-js, такие как styled-components, но в настоящее время я использую обычный CSS с <Link href="https://postcss.org/">PostCSS</Link>, чтобы использовать будущие возможности CSS уже сегодня.
                  </ListItem>
                  <ListItem>
                    Для анимаций на JavaScript я использую <Link href="https://www.framer.com/motion/">Framer Motion</Link>. Это отличный способ добавить анимации пружинки в React и three.js.
                  </ListItem>
                  <ListItem>
                    Для построения и тестирования компонентов пользовательского интерфейса в изоляции я использую <Link href="https://storybook.js.org/">Storybook</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Аппаратные средства</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>ЦП</TableHeadCell>
                    <TableCell>AMD Ryzen 5800x</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>ГПУ</TableHeadCell>
                    <TableCell>MSI Gaming X Trio RTX 3080</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Память</TableHeadCell>
                    <TableCell>GSkill 32GB DDR4 3600mhz CAS 18</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Материнская плата</TableHeadCell>
                    <TableCell>MSI B550 Tomahawk</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Монитор</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Клавиатура</TableHeadCell>
                    <TableCell>Logitech MX Keys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Мышь</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Ноутбук</TableHeadCell>
                    <TableCell>Macbook Pro 14″ (2022 M1 Max)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Наушники</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Микрофон</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
