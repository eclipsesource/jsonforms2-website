import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './assets/index.module.scss';
import corePackageJson from '@jsonforms/core/package';

import SchemaIcon from '../../static/img/schemaIcon.svg';
import FeaturesIcon from '@material-ui/icons/Report';
import CustomizeIcon from '@material-ui/icons/Brush';
import ArchitectureSmall from '../../static/img/architecture_small.svg';
import AngularLogo from '../../static/img/angular-logo.svg';
import ReactLogo from '../../static/img/react-logo.svg';
import VueLogo from '../../static/img/vue-logo.svg';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { Demo } from '../../src/components/common/Demo';
import schema from './assets/schema.json';
import uischema from './assets/uischema.json';

const nextVersion = process.env.NEXTVERSION;
const nextVersionText =
  nextVersion && nextVersion !== corePackageJson.version
    ? `@next: ${nextVersion}`
    : '';

const data = { firstName: 'Max', lastName: 'Power' };

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <div className={styles.home}>
        <header className={clsx('hero', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title"><b>JSON</b>Forms</h1>
            <img className={styles.logo} src='img/logo.svg' />
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
            <p className={styles.subsubtitle}>Complex forms in the blink of an eye</p>
            <p className={styles.version}>
            Version: {corePackageJson.version}
              {nextVersionText && (
                <>
                  <br />
                  {nextVersionText}
                </>
              )}
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/getting-started')}>
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main>
          <section className={styles.sectionFeatures}>
            <div className="container">
              <div className="row">
                <div className={clsx('col col--4', styles.feature)}>
                  <div className="text--center">
                    <SchemaIcon className={styles.featureIcon} />
                  </div>
                  <p>Declare your forms as JSON based on a JSON Schema</p>
                </div>
                <div className={clsx('col col--4', styles.feature)}>
                  <div className="text--center">
                    <FeaturesIcon className={styles.featureIcon} />
                  </div>
                  <p>Fully-featured forms including data-binding, input validation, and rule-based visibility out-of-the-box</p>
                </div>
                <div className={clsx('col col--4', styles.feature)}>
                  <div className="text--center">
                    <CustomizeIcon className={styles.featureIcon} />
                  </div>
                  <p>Designed for customizability - from custom styling to custom widgets</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sectionDemo}>
            <div className={styles.frameworkLogos}>
              <ReactLogo/>
              <AngularLogo/>
              <VueLogo/>
            </div>
            <h3>JSON Forms is a JSON Schema based approach for creating forms. <br/>It comes with off the shelf support for React, Angular and Vue.</h3>
            <div className={styles.demoContent}>
              <Demo schema={schema} uischema={uischema} data={data} />
            </div>
          </section>
          <hr/>
          <section className={styles.sectionNews}>
            <Card className={styles.newsCard}>
              <CardContent>
                Today we released JSON Forms v2.5 🎉 This release marks the final step in our quest to remove Redux as a hard dependency of JSON Forms. Check our updated migration guide if you'd like to migrate to the Redux-less variants.
                We also like to announce the new JSON Forms Vue 2 & Vue 3 support. Many thanks to headwire.com whose sponsoring made the JSON Forms Vue bindings possible. Among others they plan to power peregrine-cms.com with JSON Forms Vue and decided to contribute back ❤️.
                We now also work on a basic JSON Forms Vue renderer set which we plan to release with one of the next versions of JSON Forms! See you soon!
              </CardContent>
            </Card>
            <Link to='/news' className={styles.newsButton}>
              <Button variant='contained'>more news</Button>
            </Link>
          </section>
          <section className={styles.sectionArchitecture}>
            <h2>JSON Forms Architecture</h2>
            <div className={styles.sectionArchitectureContent}>
              <Link
                to='/docs/architecture'
                className={styles.architectureDiagram}
              >
                <ArchitectureSmall className={styles.architecture_small} />
              </Link>
              <Card>
                <CardContent>
                  JSON Forms has a modular architecture and can be customized on
                  every level. The core functionality is pure Javascript and
                  therefore independent from any UI framework. We offer bindings
                  for React, Angular and Vue. For more information see{' '}
                  <Link to='/docs/architecture'>here</Link>.
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
