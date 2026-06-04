/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  AtSign,
  Award,
  Badge,
  BookOpen,
  Brain,
  ExternalLink,
  Facebook,
  FileText,
  Flag,
  Instagram,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Maximize2,
  MessageSquareText,
  Phone,
  Route,
  Rocket,
  School,
  Search,
  SendHorizontal
} from 'lucide-react';
import { CONCLUSION, PROFILE, PROFILE_IMAGE, PROJECTS } from '../data';
import { Project, UserMessage } from '../types';

type Tab = 'home' | 'projects' | 'conclusion' | 'contact';

const NAV_ITEMS: { key: Tab; label: string }[] = [
  { key: 'home', label: 'Trang chủ' },
  { key: 'projects', label: 'Dự án' },
  { key: 'conclusion', label: 'Tổng kết' },
  { key: 'contact', label: 'Liên hệ' }
];

const INTRO_CHIPS = [
  'Sinh viên năm 3',
  'Răng-Hàm-Mặt',
  'QH.2023.R',
  'Công nghệ số & AI'
];

const GOAL_CARDS = [
  {
    title: 'Mục tiêu học tập',
    icon: School,
    tone: 'bg-[#f5f5dc]',
    titleColor: 'text-[#49654c]',
    points: [
      'Nâng cao kiến thức chuyên môn Răng-Hàm-Mặt.',
      'Rèn kỹ năng số để học tập và nghiên cứu hiệu quả hơn.',
      'Tìm hiểu cách AI có thể hỗ trợ sinh viên y khoa.'
    ]
  },
  {
    title: 'Mục tiêu portfolio',
    icon: LayoutDashboard,
    tone: 'bg-[#bee1ff]',
    titleColor: 'text-[#42647e]',
    points: [
      'Tổng hợp bài tập và sản phẩm của học phần.',
      'Sắp xếp thông tin rõ ràng, có hệ thống và dễ theo dõi.',
      'Thể hiện dấu ấn cá nhân qua cách trình bày nội dung.'
    ]
  }
];

const CONCLUSION_STYLES = [
  { icon: BookOpen, tone: 'bg-[#f5f5dc]', accent: 'bg-[#dbfcdb]' },
  { icon: Brain, tone: 'bg-white', accent: 'bg-[#bee1ff]' },
  { icon: Award, tone: 'bg-[#dbfcdb]', accent: 'bg-[#f5f5dc]' },
  { icon: Rocket, tone: 'bg-[#ffdad6]', accent: 'bg-white' }
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/yen.thao.353250',
    tone: 'bg-[#bee1ff]'
  },
  {
    label: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/thaoyen12',
    tone: 'bg-[#ffdad6]'
  }
];

const CONTACT_DETAILS = [
  { label: 'Email', value: PROFILE.email, icon: Mail, tone: 'bg-[#f5f5dc]' },
  { label: 'Số điện thoại', value: PROFILE.phone, icon: Phone, tone: 'bg-[#dbfcdb]' },
  { label: 'MSSV', value: PROFILE.studentId, icon: Badge, tone: 'bg-[#bee1ff]' }
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => (
    typeof window === 'undefined' ? false : window.matchMedia(query).matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

function ProjectDetailPage({
  project,
}: {
  project: Project;
}) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const projectIndex = PROJECTS.findIndex((item) => item.id === project.id);
  const projectNumber = projectIndex >= 0 ? projectIndex + 1 : 1;
  const detailBlocks = [
    {
      title: 'Mục tiêu bài học',
      icon: Flag,
      body: project.objective,
      tone: 'bg-[#dbfcdb]'
    },
    {
      title: 'Tóm tắt quá trình',
      icon: Route,
      body: project.processSummary,
      tone: 'bg-white'
    },
    {
      title: 'Lý do thực hiện bài tập',
      icon: Lightbulb,
      body:
        'Bài tập giúp em chuyển kiến thức công nghệ số thành thao tác thực tế, đồng thời rèn cách tự học, tự kiểm chứng và trình bày sản phẩm học tập rõ ràng hơn.',
      tone: 'bg-[#f5f5dc]'
    },
    {
      title: 'Phân tích và nhận xét',
      icon: FileText,
      body: project.reflection,
      tone: 'bg-white'
    }
  ];

  return (
    <motion.section
      key={`project-detail-${project.id}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.22 }}
      className="w-full lg:max-w-none"
    >
      <div className="project-detail-shell mx-auto w-full lg:min-h-[calc(100vh-7rem)]">
        <div className="space-y-5 sm:space-y-6 lg:max-w-[36rem]">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#1c1c1a] bg-white p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:p-6 sm:shadow-[5px_5px_0px_0px_rgba(28,28,26,1)]">
            <div className="absolute -right-8 -top-8 hidden h-28 w-28 rounded-full border-2 border-[#1c1c1a] bg-[#bee1ff] sm:block" />
            <div className="relative flex items-center gap-3">
              <span className="rounded-2xl border-2 border-[#1c1c1a] bg-[#dbfcdb] p-2 text-[#49654c] shadow-[2px_2px_0px_0px_rgba(28,28,26,1)] sm:p-3 sm:shadow-[3px_3px_0px_0px_rgba(28,28,26,1)]">
                <Search className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
              </span>
              <div>
                <span className="rounded-full border-2 border-[#1c1c1a] bg-white px-3 py-1 font-mono text-xs font-black">
                  Bài {String(projectNumber).padStart(2, '0')}
                </span>
                <p className="mt-2 font-mono text-xs font-black uppercase tracking-wide text-[#5e604d]">
                  Project details
                </p>
              </div>
            </div>
            <h1 className="relative mt-6 font-mono text-3xl font-black uppercase leading-tight text-[#1c1c1a] drop-shadow-[3px_3px_0px_#bee1ff] sm:mt-8 sm:drop-shadow-[4px_4px_0px_#bee1ff] md:text-4xl">
              {project.shortTitle}
            </h1>
            <p className="relative mt-5 max-w-xl text-base leading-8 text-[#47473f]">
              {project.title}
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-[#1c1c1a] bg-[#f5f5dc] px-3 py-1 font-mono text-[11px] font-black text-[#5e604d]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {detailBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <motion.article
                key={block.title}
                className={`${block.tone} rounded-2xl border-2 border-[#1c1c1a] p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:p-5 sm:shadow-[5px_5px_0px_0px_rgba(28,28,26,1)]`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04, duration: 0.2 }}
                whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px rgba(28,28,26,1)' }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border-2 border-[#1c1c1a] bg-white p-2 text-[#40627b]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-mono text-xl font-black uppercase tracking-wide text-[#1c1c1a]">
                    {block.title}
                  </h2>
                </div>
                <p className="rounded-xl border-2 border-[#1c1c1a] bg-white/70 p-4 text-sm leading-7 text-[#344657] sm:text-base sm:leading-8">
                  {block.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        {!isDesktop && (
          <aside className="mt-6 rounded-2xl border-2 border-[#1c1c1a] bg-[#08283a] p-4 text-white shadow-[3px_3px_0px_0px_rgba(28,28,26,1)]">
            <p className="font-mono text-xs font-black uppercase tracking-wide text-[#bee1ff]">
              Tài liệu đính kèm
            </p>
            <h2 className="mt-2 font-mono text-sm font-black leading-6">{project.pdfName}</h2>
            <a
              href={project.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#f5f5dc] px-4 py-2 font-mono text-xs font-black text-[#1c1c1a] transition-all active:translate-x-0.5 active:translate-y-0.5"
            >
              Mở PDF
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </aside>
        )}

        {isDesktop && (
          <aside className="project-pdf-fixed mt-8">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#1c1c1a] bg-[#08283a] p-3 shadow-[7px_7px_0px_0px_rgba(28,28,26,1)]">
              <div className="flex flex-col gap-3 border-b-2 border-[#1c1c1a] px-3 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-wide text-[#bee1ff]">
                    Tài liệu đính kèm
                  </p>
                  <h2 className="mt-1 font-mono text-sm font-black">{project.pdfName}</h2>
                </div>
                <a
                  href={project.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#f5f5dc] px-4 py-2 font-mono text-xs font-black text-[#1c1c1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  Mở toàn màn hình
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <iframe
                title={`PDF ${project.shortTitle}`}
                src={`${project.pdfPath}#toolbar=1&navpanes=0`}
                className="h-[70vh] min-h-[520px] w-full flex-1 rounded-b-2xl border-0 bg-white lg:h-auto lg:min-h-0"
              />
            </div>
          </aside>
        )}
      </div>
    </motion.section>
  );
}

export default function NeobrutalistLayout() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messages, setMessages] = useState<UserMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('lo_mo_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const handleTabChange = (tab: Tab) => {
    setSelectedProject(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectOpen = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectBack = () => {
    setSelectedProject(null);
    setActiveTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Vui lòng điền đầy đủ thông tin trước khi gửi nhé!');
      return;
    }

    const newMessage: UserMessage = {
      id: Date.now().toString(),
      name,
      email,
      message,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };
    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem('lo_mo_messages', JSON.stringify(updatedMessages));
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3500);
  };

  return (
    <div className="graph-paper-bg-large min-h-screen overflow-x-hidden text-[#1c1c1a]">
      <div
        aria-hidden="true"
        className="graph-paper-bg-large pointer-events-none fixed inset-x-0 top-0 z-40 h-28 md:h-[68px]"
      />
      <header className="fixed left-4 right-4 top-2 z-50 rounded-xl border-2 border-[#1c1c1a] bg-white shadow-[4px_4px_0px_0px_rgba(28,28,26,1)] md:left-10 md:right-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2 sm:px-5 sm:py-3">
          <button
            onClick={() => handleTabChange('home')}
            className="min-h-10 font-mono text-base font-black tracking-tight text-[#5e604d] transition-transform hover:-rotate-1 sm:text-xl md:text-2xl"
          >
            Digital Portfolio
          </button>
          {selectedProject ? (
            <button
              onClick={handleProjectBack}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl border-2 border-[#1c1c1a] bg-[#f5f5dc] px-3 py-2 font-mono text-[11px] font-black shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(28,28,26,1)] sm:px-4 md:text-sm"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              <span className="hidden min-[370px]:inline">Quay lại dự án</span>
              <span className="min-[370px]:hidden">Dự án</span>
            </button>
          ) : (
            <nav className="hidden items-center gap-3 md:flex">
              {NAV_ITEMS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`rounded-md border-2 px-3 py-1 font-mono text-sm font-bold transition-all ${
                    activeTab === tab.key
                      ? 'border-[#1c1c1a] bg-[#f5f5dc] text-[#5e604d]'
                      : 'border-transparent text-[#47473f] hover:bg-[#f1edea]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}
        </div>
        {!selectedProject && (
          <nav className="grid grid-cols-4 border-t-2 border-[#1c1c1a] md:hidden">
            {NAV_ITEMS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`min-h-11 px-1.5 py-2 font-mono text-[10px] font-bold sm:px-2 sm:text-[11px] ${
                  activeTab === tab.key ? 'bg-[#dbfcdb] text-[#49654c]' : 'bg-white text-[#47473f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main
        className={`mx-auto flex min-h-screen w-full flex-col pb-10 ${
          selectedProject
            ? 'max-w-none justify-start px-4 pt-32 md:px-10 md:pt-24'
            : activeTab === 'contact'
              ? 'max-w-6xl justify-start px-4 pt-32 md:justify-center md:pt-16'
            : 'max-w-6xl justify-center px-4 pt-32 md:pt-24'
        }`}
      >
        <AnimatePresence mode="wait">
          {selectedProject && (
            <ProjectDetailPage
              project={selectedProject}
            />
          )}

          {!selectedProject && activeTab === 'home' && (
            <motion.section
              key="neo-home"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="grid items-center gap-8 md:grid-cols-12"
            >
              <div className="md:col-span-7">
                <span className="inline-flex rotate-[-1deg] items-center rounded-full border-2 border-[#1c1c1a] bg-[#dbfcdb] px-4 py-2 font-mono text-xs font-black shadow-[2px_2px_0px_0px_rgba(28,28,26,1)] sm:rotate-[-2deg] sm:shadow-[3px_3px_0px_0px_rgba(28,28,26,1)]">
                  Xin chào thế giới!
                </span>
                <h1 className="mt-6 font-mono text-4xl font-black leading-none text-[#1c1c1a] drop-shadow-[3px_3px_0px_#bee1ff] sm:text-5xl sm:drop-shadow-[5px_5px_0px_#bee1ff] md:text-7xl">
                  <span className="inline-block -rotate-1">Thảo Yến</span>
                </h1>
                <motion.div
                  className="mt-6 max-w-2xl rounded-xl border-2 border-[#1c1c1a] bg-white p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:rotate-1 sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]"
                  whileHover={{ rotate: 0, x: -3, y: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border-2 border-[#1c1c1a] bg-[#dbfcdb] p-1 text-[#49654c]">
                      <Badge className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-black uppercase text-[#5e604d]">
                      Portfolio học tập
                    </span>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-[#47473f] sm:text-base sm:leading-8">
                    Em là <b>{PROFILE.name}</b>, sinh viên khoa <b>Răng-Hàm-Mặt</b>. Portfolio này ghi lại quá trình học môn Công nghệ số và Trí tuệ nhân tạo theo cách rõ ràng, có hệ thống và mang dấu ấn cá nhân.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {INTRO_CHIPS.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border-2 border-[#1c1c1a] bg-[#f5f5dc] px-3 py-1 font-mono text-[11px] font-black text-[#5e604d]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleTabChange('projects')}
                    className="min-h-11 flex-1 rounded-xl border-2 border-[#1c1c1a] bg-[#dbfcdb] px-5 py-3 font-mono text-sm font-black shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(28,28,26,1)] sm:flex-none sm:px-6 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]"
                  >
                    Xem dự án
                  </button>
                  <button
                    onClick={() => handleTabChange('conclusion')}
                    className="min-h-11 flex-1 rounded-xl border-2 border-[#1c1c1a] bg-white px-5 py-3 font-mono text-sm font-black shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(28,28,26,1)] sm:flex-none sm:px-6 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]"
                  >
                    Đọc tổng kết
                  </button>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative mx-auto aspect-[3/4] max-w-[260px] sm:max-w-[320px]">
                  <div className="absolute inset-0 rotate-3 rounded-[36px] border-2 border-[#1c1c1a] bg-[#bee1ff] shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]" />
                  <div className="absolute inset-0 -rotate-3 rounded-[36px] border-2 border-[#1c1c1a] bg-[#f5f5dc] shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]" />
                  <div className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-[#1c1c1a] bg-white p-3 shadow-[5px_5px_0px_0px_rgba(28,28,26,1)]">
                    <div className="mb-3 flex h-8 items-center justify-between border-b-2 border-[#1c1c1a] px-2 opacity-60">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full border border-[#1c1c1a]" />
                        <span className="h-3 w-3 rounded-full border border-[#1c1c1a]" />
                        <span className="h-3 w-3 rounded-full border border-[#1c1c1a]" />
                      </div>
                      <span className="font-mono text-xs">profile</span>
                    </div>
                    <img
                      src={PROFILE_IMAGE}
                      alt={`Ảnh cá nhân của ${PROFILE.name}`}
                      referrerPolicy="no-referrer"
                      className="h-[calc(100%-44px)] w-full rounded-2xl border-2 border-[#1c1c1a] object-cover grayscale-[15%]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:col-span-12 md:grid-cols-2">
                {GOAL_CARDS.map((goal, index) => {
                  const Icon = goal.icon;

                  return (
                    <motion.article
                    key={goal.title}
                      className={`${goal.tone} relative overflow-hidden rounded-xl border-2 border-[#1c1c1a] p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]`}
                      whileHover={{ y: -6, rotate: index === 0 ? -1 : 1, boxShadow: '8px 8px 0px 0px rgba(28,28,26,1)' }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    >
                      <div className="absolute right-4 top-4 h-12 w-12 rotate-12 rounded-full border-2 border-[#1c1c1a] bg-white/70" />
                      <div className="relative flex items-start gap-4">
                        <span className="rounded-xl border-2 border-[#1c1c1a] bg-white p-2 text-[#5e604d] shadow-[2px_2px_0px_0px_rgba(28,28,26,1)]">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-mono text-xs font-black uppercase text-[#77745f]">
                            Ghi chú #{index + 1}
                          </p>
                          <h2 className={`mt-1 font-mono text-lg font-black sm:text-xl ${goal.titleColor}`}>{goal.title}</h2>
                        </div>
                      </div>
                      <ul className="relative mt-5 grid gap-3">
                        {goal.points.map((point) => (
                          <li key={point} className="flex gap-3 rounded-lg border-2 border-[#1c1c1a] bg-white/75 p-3 text-sm leading-relaxed text-[#47473f]">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#1c1c1a] bg-[#dbfcdb] font-mono text-[10px] font-black">
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })}
              </div>
            </motion.section>
          )}

          {!selectedProject && activeTab === 'projects' && (
            <motion.section
              key="neo-projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6 border-b-2 border-[#1c1c1a] pb-5 sm:mb-8">
                <h1 className="font-mono text-2xl font-black sm:text-3xl md:text-4xl">
                  Dự án <span className="inline-block -rotate-1 border-2 border-[#1c1c1a] bg-[#dbfcdb] px-3 py-1 text-[#49654c] shadow-[3px_3px_0px_0px_rgba(28,28,26,1)]">6 bài tập</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                  <article
                    key={project.id}
                    className="flex min-h-[260px] cursor-pointer flex-col justify-between rounded-xl border-2 border-[#1c1c1a] bg-white p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(28,28,26,1)] sm:min-h-[300px] sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]"
                    onClick={() => handleProjectOpen(project)}
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-full border-2 border-[#1c1c1a] bg-[#f5f5dc] px-3 py-1 font-mono text-xs font-black">
                          Bài {index + 1}
                        </span>
                        <Maximize2 className="h-5 w-5 text-[#5e604d]" aria-hidden="true" />
                      </div>
                      <h2 className="font-mono text-lg font-black leading-tight text-[#1c1c1a] sm:text-xl">{project.shortTitle}</h2>
                      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[#47473f]">{project.objective}</p>
                    </div>
                    <div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full border border-[#1c1c1a] bg-[#bee1ff] px-2.5 py-1 font-mono text-[10px] font-bold text-[#42647e]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="mt-5 min-h-11 w-full rounded-lg border-2 border-[#1c1c1a] bg-[#dbfcdb] px-4 py-2 font-mono text-xs font-black shadow-[2px_2px_0px_0px_rgba(28,28,26,1)]">
                        Xem chi tiết
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          )}

          {!selectedProject && activeTab === 'conclusion' && (
            <motion.section
              key="neo-conclusion"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative mb-7 overflow-hidden rounded-2xl border-2 border-[#1c1c1a] bg-white p-5 text-center shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:mb-9 sm:p-6 sm:shadow-[5px_5px_0px_0px_rgba(28,28,26,1)]">
                <div className="absolute left-4 top-4 hidden h-10 w-48 -rotate-12 items-center justify-center border-2 border-[#1c1c1a] bg-[#dbfcdb] shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:flex">
                  <span className="font-mono text-[11px] font-black uppercase text-[#49654c]">
                    Nhìn lại hành trình
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 hidden h-10 w-10 rotate-12 rounded-full border-2 border-[#1c1c1a] bg-[#bee1ff] sm:block" />
                <h1 className="relative font-mono text-3xl font-black drop-shadow-[3px_3px_0px_#ffdad6] sm:mt-8 sm:drop-shadow-[4px_4px_0px_#ffdad6] md:mt-5 md:text-5xl">
                  Trang Tổng kết
                </h1>
                <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#47473f]">
                  Những điều học được được gom thành các mảnh ghi chú ngắn, dễ đọc hơn và vẫn giữ đủ ý chính của quá trình làm portfolio.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {CONCLUSION.map((section, index) => {
                  const Icon = CONCLUSION_STYLES[index].icon;

                  return (
                    <motion.article
                      key={section.id}
                      className={`${CONCLUSION_STYLES[index].tone} group relative overflow-hidden rounded-xl border-2 border-[#1c1c1a] p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]`}
                      initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -1 : 1 }}
                      animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                      transition={{ delay: index * 0.06, duration: 0.22 }}
                      whileHover={{ y: -7, rotate: 0, boxShadow: '9px 9px 0px 0px rgba(28,28,26,1)' }}
                    >
                      <div className={`absolute -right-8 -top-8 hidden h-24 w-24 rounded-full border-2 border-[#1c1c1a] ${CONCLUSION_STYLES[index].accent} transition-transform group-hover:scale-125 sm:block`} />
                      <div className="relative flex items-center justify-between gap-3 border-b-2 border-[#1c1c1a] pb-4">
                        <div className="flex items-center gap-3">
                          <span className="rounded-xl border-2 border-[#1c1c1a] bg-white p-2 text-[#5e604d] shadow-[2px_2px_0px_0px_rgba(28,28,26,1)]">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <h2 className="font-mono text-base font-black text-[#49654c] sm:text-lg">{section.title}</h2>
                        </div>
                        <span className="rounded-full border-2 border-[#1c1c1a] bg-white px-3 py-1 font-mono text-xs font-black">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="relative mt-4 text-sm leading-7 text-[#47473f]">{section.body}</p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.section>
          )}

          {!selectedProject && activeTab === 'contact' && (
            <motion.section
              key="neo-contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="grid w-full gap-7 md:grid-cols-[0.92fr_1.08fr] md:items-start"
            >
              <div className="space-y-5">
                <div className="flex flex-wrap items-end gap-3">
                  <h1 className="font-mono text-3xl font-black text-[#5e604d] md:text-4xl">Liên hệ</h1>
                  <span className="mb-1 inline-flex rotate-2 items-center gap-2 rounded-full border-2 border-[#1c1c1a] bg-[#dbfcdb] px-3 py-1 font-mono text-xs font-black shadow-[2px_2px_0px_0px_rgba(28,28,26,1)]">
                    <AtSign className="h-4 w-4" aria-hidden="true" />
                    Thảo Yến
                  </span>
                </div>

                <div className="relative rounded-xl border-2 border-[#1c1c1a] bg-white p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:-rotate-1 sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]">
                  <div className="absolute -top-4 left-8 h-7 w-28 -rotate-3 border-2 border-[#1c1c1a] bg-[#f5f5dc]" />
                  <p className="relative text-sm leading-relaxed text-[#47473f]">
                    Nếu cần trao đổi về portfolio hoặc nội dung học phần, bạn có thể liên hệ trực tiếp với {PROFILE.name}.
                  </p>
                  <div className="relative mt-5 grid gap-3">
                    {CONTACT_DETAILS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className={`${item.tone} flex items-center gap-3 rounded-lg border-2 border-[#1c1c1a] px-3 py-2.5 shadow-[2px_2px_0px_0px_rgba(28,28,26,1)]`}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1c1c1a] bg-white text-[#40627b]">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-[10px] font-black uppercase text-[#77745f]">
                              {item.label}
                            </span>
                            <span className="block break-words font-mono text-xs font-black text-[#1c1c1a] md:text-sm">
                              {item.value}
                            </span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {SOCIAL_LINKS.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`${social.tone} inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border-2 border-[#1c1c1a] px-4 py-3 font-mono text-xs font-black text-[#1c1c1a] shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(28,28,26,1)] ${
                          index === 0 ? 'sm:rotate-1' : 'sm:-rotate-1'
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1c1c1a] bg-white text-[#40627b]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {social.label}
                      </a>
                    );
                  })}
                </div>

                <div className="rounded-xl border-2 border-[#1c1c1a] bg-[#dbfcdb] p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:rotate-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs font-black uppercase text-[#49654c]">Portfolio học tập</p>
                      <p className="mt-1 text-sm leading-6 text-[#47473f]">Răng-Hàm-Mặt · QH.2023.R · Công nghệ số & AI</p>
                    </div>
                    <span className="hidden h-12 w-12 rotate-6 border-2 border-[#1c1c1a] bg-white shadow-[2px_2px_0px_0px_rgba(28,28,26,1)] sm:block" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border-2 border-[#1c1c1a] bg-white p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:rotate-1 sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]">
                  <div className="mb-5 flex items-center justify-between gap-3 border-b-2 border-[#1c1c1a] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl border-2 border-[#1c1c1a] bg-[#bee1ff] p-2 text-[#40627b] shadow-[2px_2px_0px_0px_rgba(28,28,26,1)]">
                        <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h2 className="font-mono text-lg font-black text-[#1c1c1a]">Gửi lời nhắn</h2>
                    </div>
                    <span className="rounded-full border-2 border-[#1c1c1a] bg-[#f5f5dc] px-3 py-1 font-mono text-[10px] font-black uppercase text-[#5e604d]">
                      Contact
                    </span>
                  </div>
                {formSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
                    <h2 className="font-mono text-xl font-black text-[#49654c]">Đã lưu lời nhắn</h2>
                    <p className="mt-2 text-sm text-[#47473f]">Lời nhắn được lưu tạm trong trình duyệt.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="neo-name" className="font-mono text-xs font-black">Tên của bạn</label>
                      <input id="neo-name" value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-lg border-2 border-[#1c1c1a] bg-[#f1edea] px-4 py-3 text-sm outline-hidden focus:bg-white" placeholder="Nhập họ tên" />
                    </div>
                    <div>
                      <label htmlFor="neo-email" className="font-mono text-xs font-black">Email</label>
                      <input id="neo-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 w-full rounded-lg border-2 border-[#1c1c1a] bg-[#f1edea] px-4 py-3 text-sm outline-hidden focus:bg-white" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="neo-message" className="font-mono text-xs font-black">Lời nhắn</label>
                      <textarea id="neo-message" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} className="mt-1 w-full resize-none rounded-lg border-2 border-[#1c1c1a] bg-[#f1edea] px-4 py-3 text-sm outline-hidden focus:bg-white" placeholder="Nhập lời nhắn..." />
                    </div>
                    <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#1c1c1a] bg-[#f5f5dc] py-3 font-mono text-sm font-black shadow-[2px_2px_0px_0px_rgba(28,28,26,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(28,28,26,1)]">
                      Gửi lời nhắn
                      <SendHorizontal className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </form>
                )}
                </div>

                <div className="rounded-xl border-2 border-[#1c1c1a] bg-[#f5f5dc] p-4 shadow-[3px_3px_0px_0px_rgba(28,28,26,1)] sm:-rotate-1">
                  <p className="font-mono text-xs font-black uppercase text-[#5e604d]">Ghi chú liên hệ</p>
                  <p className="mt-1 text-sm leading-6 text-[#47473f]">Có thể gửi lời nhắn ngắn về portfolio, bài tập hoặc nội dung học phần cần trao đổi.</p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {!selectedProject && (
        <footer className="border-t-2 border-[#1c1c1a] bg-[#f1edea]">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-[#47473f] md:flex-row md:items-center md:justify-between">
            <span className="font-mono font-black text-[#1c1c1a]">Digital Portfolio</span>
            <span>{PROFILE.name} - {PROFILE.cohort}</span>
            <span>{PROFILE.university}</span>
          </div>
        </footer>
      )}

    </div>
  );
}
