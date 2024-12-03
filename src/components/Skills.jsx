import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiTailwindCssFill, RiGithubFill, RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
    const { t } = useTranslation();
    const [isAnyExpanded, setIsAnyExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedJs, setIsExpandedJs] = useState(false);
    const [isExpandedReact, setIsExpandedReact] = useState(false);
    const [isExpandedGithub, setIsExpandedGithub] = useState(false);

    // Función auxiliar para verificar si alguna tarjeta está expandida
    const checkAnyExpanded = (expandedStates) => {
        setIsAnyExpanded(Object.values(expandedStates).some((state) => state));
    };

    const toggleExpand = (e) => {
        e.preventDefault();
        const newState = !isExpanded;
        setIsExpanded(newState);
        checkAnyExpanded({
            isExpanded: newState,
            isExpandedJs,
            isExpandedReact,
            isExpandedGithub,
        });
    };

    const toggleExpandJs = (e) => {
        e.preventDefault();
        const newState = !isExpandedJs;
        setIsExpandedJs(newState);
        checkAnyExpanded({
            isExpanded,
            isExpandedJs: newState,
            isExpandedReact,
            isExpandedGithub,
        });
    };

    const toggleExpandReact = (e) => {
        e.preventDefault();
        const newState = !isExpandedReact;
        setIsExpandedReact(newState);
        checkAnyExpanded({
            isExpanded,
            isExpandedJs,
            isExpandedReact: newState,
            isExpandedGithub,
        });
    };

    const toggleExpandGithub = (e) => {
        e.preventDefault();
        const newState = !isExpandedGithub;
        setIsExpandedGithub(newState);
        checkAnyExpanded({
            isExpanded,
            isExpandedJs,
            isExpandedReact,
            isExpandedGithub: newState,
        });
    };

    return (
        <section className="services" id="services">
            <h2 className="heading">{t("my")}<span> {t("skills")}</span></h2>
            <div className={`services-container ${isAnyExpanded ? "items-center" : "items-stretch"}`}>
                {/* Tarjeta de ejemplo */}
                <div className="services-box flex flex-col items-center">
                    <RiTailwindCssFill size={"70"} fill="#00abf0" />
                    <h3>Tailwind Css</h3>
                    <p className='parrafo'>{t("tailwind")}</p>
                    <div className="transition-all duration-700 ease-in-out overflow-hidden"
                         style={{ maxHeight: isExpanded ? "500px" : "0" }}>
                        {isExpanded && (
                            <p className="expanded-text pb-8">{t("tailwindext")}</p>
                        )}
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpand} href="#" id="botonTailwind" className="btn">
                        {isExpanded ? t("showless") : t("showmore")}
                    </a>
                </div>
                {/* <!-- JavaScript --> */}
                <div className="services-box flex flex-col items-center">
                    <IoLogoJavascript size={'70'} fill='#00abf0'/>
                    <h3>JavaScript</h3>
                    <p className='parrafo'>
                        {t('javascript')}
                    </p>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden`}
                        style={{ maxHeight: isExpandedJs ? '500px' : '0', }}>
                        {isExpandedJs &&(
                            <p className='expanded-text pb-8'>
                                {t('javascriptext')}
                            </p>
                            )
                        }
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandJs} href="#" id="botonTailwind" 
                        className="btn">
                        {isExpandedJs?t('showless'):t('showmore')}
                    </a>
                </div>
                {/* <!-- Github --> */}
                <div className="services-box flex flex-col items-center">
                    <RiGithubFill size={'70'} fill='#00abf0' />
                    <h3>Github</h3>
                    <p className='parrafo'>
                        {t('github')}
                    </p>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden`}
                        style={{ maxHeight: isExpandedGithub ? '500px' : '0', }}>
                        {isExpandedGithub && (
                            <p className='expanded-text pb-8'>
                                {t('githubext')}      
                            </p>
                            )
                        }
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandGithub} href="#" id="botonTailwind" 
                        className="btn">
                        {isExpandedGithub?t('showless'):t('showmore')}
                    </a>
                </div>
                {/* <!-- React --> */}
                <div className="services-box flex flex-col items-center">
                    <RiReactjsFill size={'70'} fill='#00abf0'/>
                    <h3>React</h3>
                    <p className='parrafo'>
                        {t('react')}
                    </p>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden`}
                        style={{ maxHeight: isExpandedReact ? '500px' : '0', }}>
                        {isExpandedReact && (
                            <p className='expanded-text pb-8'>
                                {t('reactext')}
                            </p>
                            )
                        }
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandReact} href="#" id="botonTailwind" 
                        className="btn">
                        {isExpandedReact?t('showless'):t('showmore')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Skills;