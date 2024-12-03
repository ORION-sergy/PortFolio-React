<div className="">
    {/* HeADER */}
    <header class="header fixed flex justify-between items-center top-0 left-0 w-full bg-[#1f242d] z-50">
            <a href="" id="" class="logo text-[2.5rem] text-[#fff] font-semibold">
                <span className="text-[#00abf0]">
                    SRG.
                </span>Developer
            </a>
            <i id="menu-icon" class="bx bx-menu hidden text-[3.6rem] text-[#fff]"></i>
            <nav class="navbar">
                <a href="#home" class="active text-[1.8rem] font-semibold text-[#fff] ml-16 transition duration-300 hover:text-[#00abf0]">
                    Home
                </a>
                <a href="#services"
                    className="text-[1.8rem] font-semibold text-[#fff] ml-16 transition duration-300 hover:text-[#00abf0]">
                        My Skills
                </a>
                <a href="#portfolio"
                    className="text-[1.8rem] font-semibold text-[#fff] ml-16 transition duration-300 hover:text-[#00abf0]">
                        Portfolio
                </a>
                <a href="#contact"
                    className="text-[1.8rem] font-semibold text-[#fff] ml-16 transition duration-300 hover:text-[#00abf0]">
                        Contact
                </a>
            </nav>
            {/*  CHECK IDIOMA  */}
            <div class="lang fixed z-10 right-0 top-[26px] mr-[10px]">
                <span id="en" class="en text-[17px] font-semibold text-white">
                    En
                </span>

                <input type="checkbox" class="check relative w-[30px] bg-black cursor-pointer"/>

                <span id="es" class="sp text-[17px] font-semibold text-white">
                    Sp
                </span>
            </div>
        </header>
    {/* HOME */}
    <section class="home min-h-screen pt-[10rem] pb-8 px-[9%] flex justify-center items-center" id="home">
            <div class="home-content pr-11">
                <h3 className="text-[3.2rem] font-bold">Hello, It's Me</h3>
                <h1 className="text-[2.6rem] font-semibold leading-[1.3]">Sergio Ramos</h1>
                <h3>And I'm a <span class="multiple-text">Frontend Developer</span></h3>
                <p className="text-[1.6rem]">Passionate about creating intuitive and visually appealing user experiences. With 2 years of experience in web development, I excel in HTML, CSS, TailwindCss, and JavaScript. I love working in teams and collaborating with designers and backend developers to build efficient and responsive web applications. I am always looking for new challenges that allow me to grow professionally and continue learning in this constantly evolving field.</p>
                {/*  <p>Apasionado por crear experiencias de usuario intuitivas y visualmente atractivas. Con 2 años de experiencia en el desarrollo web, domino HTML, CSS, JavaScript. Me encanta trabajar en equipo y colaborar con diseñadores y desarrolladores backend para construir aplicaciones web eficientes y responsivas. Siempre estoy en busca de nuevos desafíos que me permitan crecer profesionalmente y seguir aprendiendo en este campo en constante evolución.</p> */}
                <div class="social-media">
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="#">
                        <i class='bx bxl-facebook'></i>
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="https://x.com/SergioR49373482">
                        <i class='fa-brands fa-x-twitter'></i>
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="#">
                        <i class='bx bxl-instagram-alt'></i>
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="https://www.linkedin.com/in/sergio-ramos-210b162a4/">
                        <i class='bx bxl-linkedin'></i>
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="https://github.com/ORION-sergy/ORION-sergy">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <a class="btn" href="#">DownLoad CV</a>
            </div>
            {/*  img  */}
            <div class="home-img">
                <img src="/public/images/profilePic.png" alt=""
                    className="w-[30vw]" />
            </div>
        </section>
        /* footer */
        <footer class="footer flex flex-wrap justify-between items-center py-8 px-[9%] bg-[#323946]">
            <div class="footer-text">
                <p className="text-[1.6rem]">Copyright &copy; 2024 by SRG.Developer | All Rights Reserved.</p>
            </div>
            <div class="footer-iconTop flex">
                <div class="social-media">
                    <a href="#" target="_blank"
                        className="inline-flex justify-center items-center p-[.8rem] bg-[#00abf0]">
                        <i class='bx bxl-facebook text-[2.4rem]'></i>
                    </a>
                    <a href="https://x.com/SergioR49373482" target="_blank"
                        className="inline-flex justify-center items-center p-[.8rem] bg-[#00abf0]">
                        <i class='fa-brands fa-x-twitter text-[2.4rem]'></i>
                    </a>
                    <a href="#" target="_blank"
                        className="inline-flex justify-center items-center p-[.8rem] bg-[#00abf0]">
                        <i class='bx bxl-instagram-alt text-[2.4rem]'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sergio-ramos-210b162a4/" target="_blank"
                        className="inline-flex justify-center items-center p-[.8rem] bg-[#00abf0]">
                        <i class='bx bxl-linkedin text-[2.4rem]'></i>
                    </a>
                    <a href="https://github.com/ORION-sergy/ORION-sergy" target="_blank"
                        className="inline-flex justify-center items-center p-[.8rem] bg-[#00abf0]">
                        <i class="fa-brands fa-github text-[2.4rem]"></i>
                    </a>
                </div>
            </div>
        </footer>
</div>