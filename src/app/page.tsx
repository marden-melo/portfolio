"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaReact,
  FaCode,
  FaAndroid,
  FaNodeJs,
  FaDatabase,
  FaApple,
  FaExternalLinkAlt,
  FaMobile,
  FaBars,
  FaTimes,
  FaArrowDown,
} from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre Mim" },
    { id: "skills", label: "Tech Expertises" },
    { id: "projects", label: "Projetos Desenvolvidos" },
    { id: "contact", label: "Contato" },
  ];

  const projects = [
    {
      name: "Discode Software House",
      description: "Site da empresa Discode Software House.",
      stack: ["React", "Next.js"],
      link: "https://www.discode.com.br",
      image: "/logo.png",
    },
    {
      name: "Virou Cupom",
      description:
        "Desenvolvi a plataforma de cupons de desconto e a Landing Page.",
      stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
      link: "https://pegueseucupom.viroucupom.com.br/",
      github: "",
      image: "/virou-cupom.png",
    },
    {
      name: "Shop Vidros E-commerce",
      description: "E-commerce da Shop Vidros (em desenvolvimento).",
      stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
      link: "https://www.shopvidros.com/",
      github: "",
      image: "/shop-vidros.png",
    },
    {
      name: "Ideia Publicidade",
      description: "Landing Page da Ideia Publicidade.",
      stack: ["React", "Next.js"],
      link: "https://www.ideiapublicidades.com.br/",
      github: "",
      image: "/ideia.png",
    },
    {
      name: "TV Itajubá",
      description: "Site e Aplicativos da TV ITajubá.",
      stack: [
        "React",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Android",
        "iOS",
      ],
      link: "https://tv-itajuba-web.vercel.app/",
      github: "",
      image: "/tv-itajuba.png",
    },
    {
      name: "Dashr Recrutando",
      description: "Site e Aplicativos de recrutamento e seleção.",
      stack: [
        "React",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Android",
        "iOS",
      ],
      link: "https://dashr.app/home/pt",
      github: "",
      image: "/dashr.png",
    },
    {
      name: "QUOTH",
      description:
        "Plataforma Web para emissão e gestão de orçamentos (Projeto autoral).",
      stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
      link: "https://quoth-ejmij1gx5-marden-melos-projects.vercel.app/",
      github: "https://github.com/marden-melo/quoth",
      image: "/quoth.png",
    },
  ];

  const techIcons = [
    { name: "React", icon: <FaReact size={24} className="text-blue-400" /> },
    {
      name: "Node.js",
      icon: <FaNodeJs size={24} className="text-green-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <FaDatabase size={24} className="text-blue-500" />,
    },
    {
      name: "React Native",
      icon: <FaMobile size={24} className="text-blue-300" />,
    },
    {
      name: "MongoDB",
      icon: <FaDatabase size={24} className="text-green-500" />,
    },
    { name: "iOS", icon: <FaApple size={24} className="text-white" /> },
    {
      name: "Android",
      icon: <FaAndroid size={24} className="text-green-500" />,
    },
    { name: "Next.js", icon: <FaCode size={24} className="text-green-400" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition + 200) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D1117] text-white">
      {/* Sidebar para telas maiores */}
      <aside className="hidden md:flex w-[250px] fixed left-0 top-0 h-full bg-[#111418] bg-opacity-90 backdrop-blur-lg p-6 flex-col items-center gap-6 shadow-lg">
        <Image
          src="/foto-perfil.png"
          alt="Foto de perfil"
          width={160}
          height={160}
          className="rounded-full border-4 border-[#1F2937] mt-10"
        />
        <nav className="flex flex-col gap-4 text-center mt-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => changeSection(item.id)}
              className={`hover:text-gray-400 transition-colors duration-300 ${
                activeSection === item.id ? "text-green-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a
          href="https://wa.me/5535999039120"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={20} /> Fale Comigo
        </a>
        <div className="flex gap-4 mt-auto">
          <a
            href="https://github.com/marden-melo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/marden-melo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/mardenmelo.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </aside>

      {/* Header mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#111418] p-4 shadow-md">
        <div className="flex items-center gap-2">
          <Image
            src="/foto-perfil.png"
            alt="Foto de perfil"
            width={40}
            height={40}
            className="rounded-full border-2 border-[#1F2937]"
          />
          <span className="text-lg font-semibold">Marden Melo</span>
        </div>
        <button onClick={() => setMobileMenuOpen(true)}>
          <FaBars size={24} />
        </button>
      </header>

      {/* Menu mobile overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#111418] bg-opacity-95 z-50 flex flex-col p-8">
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <FaTimes size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => changeSection(item.id)}
                className={`text-xl text-left hover:text-gray-400 transition-colors duration-300 ${
                  activeSection === item.id ? "text-green-400" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex gap-6 mt-auto justify-center">
            <a
              href="https://github.com/marden-melo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/marden-melo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/mardenmelo.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      )}

      {/* Main content ajustado para mobile (ml-0) e desktop (ml-[250px]) */}
      <main className="ml-0 md:ml-[250px] relative overflow-hidden">
        <section
          id="home"
          className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-4 max-w-full"
          style={{
            backgroundImage: "url('/rocket-image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="z-20 max-w-4xl mx-auto"
          >
            <div className="px-4 text-center">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-2xl mb-20 sm:mb-0">
                Desbravando o Infinito
              </h1>
              <p className="mt-6 text-[1.3rem] sm:text-[1.2rem] text-gray-300 leading-relaxed mb-12 sm:mb-[20rem]">
                Assim como um foguete rompe a atmosfera para explorar o
                desconhecido, a tecnologia nos impulsiona a criar o impossível.
                Cada linha de código é um motor de propulsão para um novo
                universo de possibilidades.
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-28 sm:bottom-24 md:bottom-16 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
            <FaArrowDown size={30} className="text-white" />
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent rounded-lg shadow-lg"></div>
        </section>

        <section
          id="about"
          className="relative min-h-screen flex flex-col justify-center items-center p-10 transition-all duration-1000 px-4 max-w-full"
          style={{
            backgroundImage: "url('/background-jornada.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative max-w-7xl mx-auto text-center justify-center mb-8">
            <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white opacity-40 whitespace-nowrap z-0">
              Sobre mim
            </h3>
          </div>
          <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-8 md:space-y-0 justify-between mt-10">
            <div className="md:w-1/2 space-y-4 px-6 md:px-12">
              <p className="text-[1.1rem] text-gray-300 text-justify">
                Sou Marden Melo, desenvolvedor fullstack com mais de 5 anos de
                experiência, criando soluções inovadoras para empresas de
                diversos segmentos.
              </p>
              <p className="text-[1.1rem] text-gray-300 text-justify">
                Minha jornada começou com um desafio pessoal e se transformou em
                um compromisso com a aprendizagem contínua, buscando sempre
                impactar positivamente os negócios e a vida das pessoas.
              </p>
              <p className="text-[1.1rem] text-gray-300 text-justify">
                Hoje, sigo explorando novas possibilidades, adquirindo novas
                habilidades, criando soluções para clientes e projetos
                inovadores.
              </p>
            </div>
            <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 md:mt-0 text-center">
              {[
                {
                  icon: <FaEnvelope size={40} className="text-white" />,
                  title: "E-mail",
                  text: "mardenmelo@gmail.com",
                },
                {
                  icon: <FaMapMarkerAlt size={40} className="text-white" />,
                  title: "Localização",
                  text: "Sorocaba, SP",
                },
                {
                  icon: <FaProjectDiagram size={40} className="text-white" />,
                  title: "Projetos Realizados",
                  text: "Projetos Web | Aplicativos Android/iOS | APIs Node.",
                },
                {
                  icon: <FaWhatsapp size={40} className="text-white" />,
                  title: "Contato via WhatsApp/Chamada",
                  text: "(35) 99903-9120",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-md hover:shadow-xl hover:border-green-500 transition-all z-50"
                >
                  {card.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                      {card.title}
                    </h3>
                    <p className="text-md text-gray-300 mt-2 break-words">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="relative min-h-screen flex flex-col justify-center items-center p-10 transition-all duration-1000 mt-12"
          style={{
            backgroundImage: "url('/background-tech.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative max-w-7xl mx-auto text-center justify-center mb-8">
            <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl font-bold text-white opacity-40 whitespace-nowrap z-0">
              Tech Expertises
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {[
              {
                icon: <FaReact size={40} className="text-white" />,
                title: "React",
                text: "Construção de interfaces ricas para a web com React.",
              },
              {
                icon: <FaCode size={40} className="text-white" />,
                title: "Next.js",
                text: "Desenvolvimento de aplicações escaláveis e rápidas com Next.js.",
              },
              {
                icon: (
                  <div className="flex items-center space-x-4">
                    <FaAndroid size={40} className="text-white" />
                    <FaApple size={40} className="text-white" />
                  </div>
                ),
                title: "React Native",
                text: "Aplicativos móveis para Android e iOS com React Native.",
              },
              {
                icon: <FaNodeJs size={40} className="text-white" />,
                title: "Node.js",
                text: "Criação de APIs rápidas e escaláveis com Node.js.",
              },
              {
                icon: <FaDatabase size={40} className="text-white" />,
                title: "SQL & NoSQL",
                text: "Experiência com bancos de dados relacionais e não relacionais (PostgreSQL, MongoDB, etc).",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-6 bg-black bg-opacity-40 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-300 ease-in-out w-72"
              >
                {card.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                    {card.title}
                  </h3>
                  <p className="text-md text-gray-300 mt-2">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="relative min-h-screen flex flex-col justify-center items-center p-10 transition-all duration-1000 mt-11"
          style={{
            backgroundImage: "url('/background-tech.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative max-w-7xl mx-auto text-center justify-center mb-8">
            <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl md:text-6xl font-bold text-white opacity-40 whitespace-nowrap z-0">
              Projetos Desenvolvidos
            </h3>
          </div>
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-300 mb-12 mt-6">
              Alguns dos projetos que desenvolvi - Web, Mobile e APIs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-[#1A1E23] p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700 hover:border-green-500 transition-all flex flex-col justify-between min-h-[450px]"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mt-4 flex-wrap min-h-[50px]">
                    {techIcons.map(
                      (tech) =>
                        project.stack.includes(tech.name) && (
                          <div
                            key={tech.name}
                            className="flex flex-col items-center text-center"
                          >
                            {tech.icon}
                            <span className="text-xs text-gray-300 mt-1">
                              {tech.name}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                  <div className="flex gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 flex items-center gap-2 hover:underline"
                      >
                        <FaExternalLinkAlt /> Acessar
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 flex items-center gap-2 hover:underline"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="py-44 px-4 text-center bg-gray-900 text-white"
        >
          <motion.h2
            className="text-5xl font-bold mb-6 mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contato
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Estou disponível para novas oportunidades e projetos. Entre em
            contato comigo pelas redes sociais ou envie uma mensagem
            diretamente!
          </motion.p>

          <div className="flex justify-center gap-6 mb-8 text-3xl">
            <a
              href="https://github.com/marden-melo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mardenmelo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/mardenmelo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/5535999039120"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-opacity-20 bg-white border border-white/30 backdrop-blur-md px-6 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 transition hover:bg-opacity-30 shadow-lg"
            >
              <FaWhatsapp className="text-green-400" /> WhatsApp
            </a>
            <a className="bg-opacity-20 bg-white border border-white/30 backdrop-blur-md px-6 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 transition hover:bg-opacity-30 shadow-lg">
              <FaEnvelope className="text-blue-400" /> mardenmelo@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
