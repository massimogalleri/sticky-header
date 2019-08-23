{

    const _delta = 5;
    const _nav = document.getElementById('header');
    const _navbarH = _nav.clientHeight;

    let _lastScrollTop = 0;
    let _winH = document.documentElement.clientHeight;
    let _docH = document.documentElement.scrollHeight;

    function check_header() {

        var st = window.pageYOffset;

        if (Math.abs(_lastScrollTop - st) <= _delta) return;

        if (st > _lastScrollTop && st > _navbarH) {
            _nav.classList.remove('header-in-viewport');
            _nav.classList.add('header-out-viewport');
        } else if (st + _winH < _docH) {
            _nav.classList.remove('header-out-viewport');
            _nav.classList.add('header-in-viewport');
        }
        
        if (st + _winH == _docH) {
            _nav.classList.remove('header-out-viewport');
            _nav.classList.add('header-in-viewport');
        }

        _lastScrollTop = st;
    }
    check_header();

    window.addEventListener('scroll', check_header);

}
