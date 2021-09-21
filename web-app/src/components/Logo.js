function Logo() {
    return(
        <logo className="logo">
            <ul className="logo_img">
                <a href="https://www.borovaya.by/">
                    <img src="/logo-atlant.png" className="logo_atlant" />
                </a>
                    <img src="/logo-line.png" className="logo_line"/>
                <a href="https://www.borovaya.by/">
                    <img src="/logo-ford.png" className="logo_ford"/>
                </a>
            </ul>
            <LogoLink/>
        </logo>
    );

}

export default Logo;

function LogoLink() {
    return(
        <ul className="logo_list">
            <a className="logo_link" href="https://www.borovaya.by/#model">Автомобили</a>
            <a className="logo_link" href="https://www.borovaya.by/service/">Сервис</a>
            <a className="logo_link" href="https://www.borovaya.by/#spare">Запчасти и аксессуары</a>
            <a className="logo_link" href="https://www.borovaya.by/#repair">Кузовной ремонт</a>
            <a className="logo_link" href="https://www.borovaya.by/finance/lizing-dlya-yuridicheskikh-lits/">Финансовые услуги</a>
            <a className="logo_link" href="https://www.borovaya.by/#online">Клиентам</a>
        
        </ul>

    );
}
