import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {motion} from 'framer-motion';



function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className="py-16 text-white bg-[var(--ifm-color-primary)]">
      <div className="container mx-auto px-4 text-center">
        <motion.img
          src="/img/logo.svg"
          alt="logo"
          className="w-24 h-24 mx-auto mb-4"
          initial={{opacity:0, y:-20}}
          animate={{opacity:1, y:0}}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0, transition:{delay:0.1}}}
        >
          {siteConfig.title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0, transition:{delay:0.2}}}
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.3}}}>
          <Link className="bg-white text-[var(--ifm-color-primary)] font-semibold py-2 px-6 rounded" to="/docs/intro">
            시작하기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  const cards = [
    {
      title: '빠른 시작',
      desc: '간단한 튜토리얼로 사용법을 익혀보세요.',
      link: '/docs/intro',
    },
    {
      title: '설치 가이드',
      desc: '플랫폼 설치 방법을 단계별로 안내합니다.',
      link: '/docs/intro',
    },
    {
      title: '자주 묻는 질문',
      desc: '궁금한 점을 한곳에서 확인하세요.',
      link: '/docs/intro',
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">소개</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({title, desc, link}) => (
            <motion.div
              key={title}
              className="bg-white rounded-lg shadow p-6 text-center flex flex-col"
              whileHover={{scale:1.05}}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="mb-4 flex-grow">{desc}</p>
              <Link className="text-[var(--ifm-color-primary)] font-medium" to={link}>
                자세히 보기 →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <IntroSection />
    </Layout>
  );
}
