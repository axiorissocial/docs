import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Minimal, distraction-free UI',
    Svg: require('@site/static/img/minimal-ui.svg').default,
    description: (
      <>
        A deliberate interface that surfaces conversations and connections,
        not noise. Simple timelines, clear controls, and fast interactions.
      </>
    ),
  },
  {
    title: 'Community-first features',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
  Built to support communities: easy moderation tools, user profiles,
  and content organisation that help your community thrive.
      </>
    ),
  },
  {
    title: 'Privacy & performance',
    Svg: require('@site/static/img/hosted-privacy.svg').default,
    description: (
      <>
        The official Axioris instance is hosted and maintained by the Axioris
  team. It is optimised for speed and privacy for all users - this project
        is not intended for public self-hosting; consult the license and
        project guidance for details.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
