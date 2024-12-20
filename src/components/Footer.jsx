import { FaXTwitter, FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function Footer (){
    const { t } = useTranslation(); 
    return(
        <footer className="footer">
            <div className="footer-text flex gap-x-2">
                <p className="w-fit">
                    Copyright <span className="copy text-white text-[1.9rem]">&copy; </span> 
                    2024 {t('by')} <span>SRG. </span> Developer | {t('rights')}.
                </p>
            </div>
            <div className="footer-iconTop">
                <div className="social-media">
                    <a href="#" target="_blank">
                        <FaFacebookF fill="#323946"/>
                    </a>
                    <a href="https://x.com/ramos_sergio24" target="_blank">
                        <FaXTwitter fill="#323946" />
                    </a>
                    <a href="https://www.instagram.com/ramos.sergio24/" target="_blank">
                        <RiInstagramFill fill="#323946" />
                    </a>
                    <a href="https://www.linkedin.com/in/sergio-ramos-210b162a4/" target="_blank">
                        <FaLinkedinIn fill="#323946" />
                    </a>
                    <a href="https://github.com/ORION-sergy/ORION-sergy" target="_blank">
                        <FaGithub fill="#323946" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;