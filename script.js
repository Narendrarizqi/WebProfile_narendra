//tombol halaman
document.addEventListener('DOMContentLoaded', function() {
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
    const coverRight = document.querySelector('.cover.cover-right');
    
    if (coverRight) {
        coverRight.classList.add('turn');
    }
    
    const pageRightElements = document.querySelectorAll('.book-page.page-right');
    pageRightElements.forEach((page, index) => {
        page.classList.remove('turn');
        
        page.style.zIndex = 20 - index;
    });

    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            }
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        }
    });

    const backProfileBtn = document.querySelector('.back-profile');
    if (backProfileBtn) {
        backProfileBtn.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll('.book-page.turn').forEach(page => {
                page.classList.remove('turn');
            });
        }
    }
});
 
//persentase bar
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
    
    progressBars.forEach(bar => {
        let percent = bar.getAttribute("data-percent");
        let width = 0;
        let interval = setInterval(() => {
            if (width >= percent) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + "%";
                bar.textContent = width + "%";
            }
        }, 15);
    });
});