setInterval(
    () => {
        //dohvaćanje elemenata - dohvaćamo 00
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        //dohvaćamo linije
        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');

        //dot
        let dotH = document.querySelector('.h_dot');
        let dotM = document.querySelector('.m_dot');
        let dotS = document.querySelector('.s_dot');

        //trenutno vrijeme
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        //prikaz vremena - dodavanje 0 ispred jednoznamenkastih
        h = h < 10 ? '0'+ h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        //ispis vremena; izmjena HTML-a
        hours.innerHTML = h + 'h';
        minutes.innerHTML = m + 'min';
        seconds.innerHTML = s + 'sec';

        //postavljanje linija
        hh.style.strokeDashoffset = 440 - (440 * h) / 24;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;

        //postavljanje točkica
        dotH.style.transform = `rotate(${h*15}deg)`;
        dotM.style.transform = `rotate(${m*6}deg)`;
        dotS.style.transform = `rotate(${s*6}deg)`;


    }, 1000
)