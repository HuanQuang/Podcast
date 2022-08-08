const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const homePage = $('#container');
const header = $('.header__nav');
const menu = $('.header__nav__menu--icon');
const searchBtn = $('.header__nav__search--icon');
const LoginBtn = $('.header__nav__sub--logo');
const trendList = $('.play--trend');
const allListpart = $('.allList');
const progressPlay = $('.progress');
const playBtn = $('.play__board__control--Btn--play');
const audio = $('.audio');
const pauseBtn = $('.pause-Btn');
const returnTimeBtn = $('.fa-rotate-left');
const fwTimeBtn = $('.fa-rotate-right');
const nextBtn = $('.fa-forward-step');
const preBtn = $('.fa-backward-step');
function activePlay(){
    if(pauseBtn.classList.contains('hide')){
        pauseBtn.classList.remove('hide');
        $('.play-Btn').classList.add('hide');
    }
}      
const web = {
    isPlaying: false,
    currentIndex: 0,
    allSong: [
        {
            name:'Chúng mình chấm dứt tình yêu đó ở đây, Hãy xem mọi lầm lỗi đều ở anh cả.',
            path: './asset/banhcam/Chúng mình chấm dứt tình yêu đó ở đây, Hãy xem mọi lầm lỗi đều ở anh cả..mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Bạn sẽ hạnh phúc nếu bạn hiểu bạn muốn gì',
            path: './asset/banhcam/Bạn sẽ hạnh phúc nếu bạn hiểu bạn muốn gì!.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
            
        },
        {
            name:'Chắc ai cũng đã từng',
            path: './asset/banhcam/Chắc ai cũng đã từng.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Anh có ước gì đâu',
            path: './asset/banhcam/Anh có ước gì đâu !.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Bao dung trong tình yêu chưa bao giờ là 2 từ dễ hiểu',
            path: './asset/banhcam/Bao dung trong tình yêu chưa bao giờ là 2 từ dễ hiểu..mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Cảm xúc chi phối mọi quyết định của bạn',
            path: 'asset/banhcam/Cảm xúc chi phối mọi quyết định của bạn.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Càng chấp nhận càng đỡ đau lòng',
            path: './asset/banhcam/Càng chấp nhận càng đỡ đau lòng.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Chân thành và thật lòng không phải lúc nào cũng được đáp lại',
            path: './asset/banhcam/Chân thành và thật lòng không phải lúc nào cũng được đáp lại.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Chúng ta luôn hỏi tại sao đối phương thích mình',
            path: './asset/banhcam/Chúng ta luôn hỏi tại sao đối phương thích mình.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Chúng ta mong muốn có một người yêu như thế nào.',
            path: './asset/banhcam/Chúng ta mong muốn có một người yêu như thế nào.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Cơ hội giống như không khí vậy, chúng ta không nắm bắt đc nhưng nó luôn nuôi dưỡng chúng ta',
            path: './asset/banhcam/Cơ hội giống như không khí vậy, chúng ta không nắm bắt đc nhưng nó luôn nuôi dưỡng chúng ta.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Giận - Thiền sư Thích Nhất Hạnh',
            path: './asset/banhcam/Giận - Thiền sư Thích Nhất Hạnh.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Có 2 loại hối tiếc trong tình yêu',
            path: './asset/banhcam/Có 2 loại hối tiếc trong tình yêu.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Có những điều chỉ đến một lần trong đời',
            path: './asset/banhcam/Có những điều chỉ đến một lần trong đời.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Cốt cách phụ nữ',
            path: './asset/banhcam/Cốt cách phụ nữ.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Dịu dàng là một sự lựa chọn',
            path: './asset/banhcam/Dịu dàng là một sự lựa chọn.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Để vơi đi nỗi buồn của ai đó, cách tốt nhất là im lặng lắng nghe họ',
            path: './asset/banhcam/Để vơi đi nỗi buồn của ai đó, cách tốt nhất là im lặng lắng nghe họ..mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Điều đáng sợ nhất là khi bạn không còn khao khát bất kì điều gì trên đời này nữa',
            path: './asset/banhcam/Điều đáng sợ nhất là khi bạn không còn khao khát bất kì điều gì trên đời này nữa!!.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Điều làm chúng ta tổn thương không đến từ những điều lớn lao, mà đến từ những điều không ai để ý.',
            path: './asset/banhcam/Điều làm chúng ta tổn thương không đến từ những điều lớn lao, mà đến từ những điều không ai để ý..mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Đó là tình yêu.',
            path: './asset/banhcam/Đó là tình yêu.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Đôi khi sự im lặng của bạn cũng là một điều vô cùng tử tế',
            path: './asset/banhcam/Đôi khi sự im lặng của bạn cũng là một điều vô cùng tử tế..mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Hãy cho người yêu bạn biết vấn đề của bạn',
            path: './asset/banhcam/Hãy cho người yêu bạn biết vấn đề của bạn.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Hối tiếc hay không không còn quan trọng, quan trọng hơn hết là người muốn đi thì không giữ lại được',
            path: './asset/banhcam/Hối tiếc hay không không còn quan trọng, quan trọng hơn hết là người muốn đi thì không giữ lại được.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Khi chúng ta thật sự yêu một người nào đó, chúng luôn muốn biết về cuộc sống của họ ngay cả việc họ đã từng yêu ai',
            path: './asset/banhcam/Khi chúng ta thật sự yêu một người nào đó, chúng luôn muốn biết về cuộc sống của họ ngay cả việc họ đã từng yêu ai.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Khi đã già, chúng ta sẽ hối hận về những điều mình chưa từng làm chứ không phải những gì đã làm, dù là sai lầm',
            path: './asset/banhcam/Khi đã già, chúng ta sẽ hối hận về những điều mình chưa từng làm chứ không phải những gì đã làm, dù là sai lầm.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Khi mà chúng ta không muốn dễ dàng bỏ qua sự giận dỗi',
            path: './asset/banhcam/Khi mà chúng ta không muốn dễ dàng bỏ qua sự giận dỗi.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Mỗi thời điểm chúng ta sẽ có cách yêu khác nhau!',
            path: './asset/banhcam/Mỗi thời điểm chúng ta sẽ có cách yêu khác nhau!.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Nếu không đến được với nhau, ít ra hãy nói lời từ biệt',
            path: './asset/banhcam/Nếu không đến được với nhau, ít ra hãy nói lời từ biệt.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Nếu thật lòng yêu nhau, người ta đã chẳng thể dễ dàng buông bỏ',
            path: './asset/banhcam/Nếu thật lòng yêu nhau, người ta đã chẳng thể dễ dàng buông bỏ.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Người ở trong tim, cho dù làm bạn cả đời cũng thấy không đủ. Người không ở trong lòng, cho dù là 1s cũng chê dài',
            path: './asset/banhcam/Người ở trong tim, cho dù làm bạn cả đời cũng thấy không đủ. Người không ở trong lòng, cho dù là 1s cũng chê dài.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Người yêu bạn chỉ sợ trao cho bạn không đủ, người không yêu bạn chỉ sợ bạn đòi hỏi quá nhiều',
            path: './asset/banhcam/Người yêu bạn chỉ sợ trao cho bạn không đủ, người không yêu bạn chỉ sợ bạn đòi hỏi quá nhiều.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Nhà nên có hai người',
            path: './asset/banhcam/Nhà nên có hai người.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Như thế nào mới là một người xứng với mình',
            path: './asset/banhcam/Như thế nào mới là một người xứng với mình.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Ra đi không phải bao giờ cũng đồng nghĩa với sự từ bỏ',
            path: './asset/banhcam/Ra đi không phải bao giờ cũng đồng nghĩa với sự từ bỏ.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Sẽ có người bên cạnh bạn',
            path: './asset/banhcam/Sẽ có người bên cạnh bạn.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Sự tầm thường đôi khi khiến một mối quan hệ trở nên phi thường',
            path: './asset/banhcam/Sự tầm thường đôi khi khiến một mối quan hệ trở nên phi thường.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Thực ra trong tim của chúng ta đều có một người không thể quên được',
            path: './asset/banhcam/Thực ra trong tim của chúng ta đều có một người không thể quên được.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Tình yêu không phải là sở hữu. Tình yêu là sự trân trọng',
            path: './asset/banhcam/Tình yêu không phải là sở hữu. Tình yêu là sự trân trọng.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Chỉ khi nào bạn chấp nhận được chuyện cũ',
            path: './asset/banhcam/Chỉ khi nào bạn chấp nhận được chuyện cũ.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Yêu đúng người là như thế nào',
            path: './asset/banhcam/Yêu đúng người là như thế nào.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Yêu và có được là 2 chuyện hoàn toàn khác nhau',
            path: './asset/banhcam/Yêu và có được là 2 chuyện hoàn toàn khác nhau.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Chúng ta không thể có cả tình yêu lẫn sự nghiệp, nhưng đời người có mấy lần được yêu, hãy yêu cho trọn vẹn',
            path: './asset/banhcam/Chúng ta không thể có cả tình yêu lẫn sự nghiệp, nhưng đời người có mấy lần được yêu, hãy yêu cho trọn vẹn.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Cuối cùng thì lòng yêu thương cuộc sống cũng không giữ được đời người. Cuối cùng thì tình yêu cũng không giữ được người mình yêu',
            path: './asset/banhcam/Cuối cùng thì lòng yêu thương cuộc sống cũng không giữ được đời người. Cuối cùng thì tình yêu cũng không giữ được người mình yêu.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Khi bạn yêu một người nào đó',
            path: './asset/banhcam/Khi bạn yêu một người nào đó.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Nếu mình còn tự hỏi rằng anh ta có thích mình không- “ thì có nghĩa là a ta không thích bạn đâu',
            path: './asset/banhcam/Nếu mình còn tự hỏi rằng anh ta có thích mình không- “ thì có nghĩa là a ta không thích bạn đâu.mp3',
            image: './asset/img/list 5 -2.jpg',
            author: 'Bánh cam & stories',
        },
        {
            name:'Ai Xa Từ Phía Phố',
            path:'./asset/HamletTruong/Ai Xa Từ Phía Phố.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Cái Giá Của Trưởng Thành Là Cô Đơn',
            path:'./asset/HamletTruong/Cái Giá Của Trưởng Thành Là Cô Đơn.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Cảm Ơn Vì Đã Yêu',
            path:'./asset/HamletTruong/Cảm Ơn Vì Đã Yêu.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Cuộc Tình Là Đoạn Cuối Hoàng Hôn',
            path:'./asset/HamletTruong/Cuộc Tình Là Đoạn Cuối Hoàng Hôn.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Em thấy trong chúng ta một mùa hè',
            path:'./asset/HamletTruong/Em thấy trong chúng ta một mùa hè.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Đừng Làm Hoa Hướng Dương',
            path:'./asset/HamletTruong/Đừng Làm Hoa Hướng Dương.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Khi Tình Yêu Là Liều Thuốc Độ',
            path:'./asset/HamletTruong/Khi Tình Yêu Là Liều Thuốc Độc.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Ta Khát Chung Một Nụ Cười',
            path:'./asset/HamletTruong/Ta Khát Chung Một Nụ Cười.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
        {
            name:'Yêu Một Người Vô Tâm',
            path:'./asset/HamletTruong/Yêu Một Người Vô Tâm.mp3',
            image:'./asset/img/list 5 -2.jpg',
            author:'Hamlet Trương'
        },
    
    ],
    trends: [
        {
            name: '#1: Nhân duyên là do ta định hay trời định',
            path: 'src="https://open.spotify.com/embed/episode/4l8LfTl9MhJJQiBDrV0yl9?utm_source=generator&t=0"',
            image:'./asset/img/list - 1.jpg',
        },
        {
            name: '#2: Chọn người mình thích hay chọn người thích mình',
            path: 'src="https://open.spotify.com/embed/episode/4utA3svR7F4hQKPGFXqv4A?utm_source=generator&t=0"',
            image:'./asset/img/list - 2.jpg',
        },
        {
            name: '#3: Vượt qua sau chia tay',
            path: 'src="https://open.spotify.com/embed/episode/6eNLWeaky59SEx9fZkWV0I?utm_source=generator&t=0"',
            image:'./asset/img/list - 3.jpg',
        },
        {
            name: '#4: Cảm giác bị seen tin nhắn là như thế nào',
            path: 'src="https://open.spotify.com/embed/episode/6dG5PrRcHja9GREb9RxAqr?utm_source=generator&t=0"',
            image:'./asset/img/list - 4.jpg',
        },
        {
            name: '#5: Chúng ta xứng đáng với điều gì',
            path: 'src="https://open.spotify.com/embed/episode/0bKBcD9oehL3gRyJsuUhGC?utm_source=generator&t=0"',
            image:'./asset/img/list 5 -2.jpg',
        }
    ],
    allList: [
        {   
            id: 'banhcam',
            name: 'Banhcam&Stories',
            image: './asset/img/plist 8.jpg'
        },
        {   
            id: 'hamlettruong',
            name: 'Hamlet Trương Radio',
            image: './asset/img/plist 5.jpg'
        },
        {   id: 'Lofi Music',
            name: 'Lofi Music',
            image: './asset/img/plist 10.jpg'
        },
        {   id: 'Short podcast',
            name: 'Short podcast',
            image: './asset/img/plist 9.jpg'
        },
        {   id: 'Book',
            name: 'Books, hope and love!',
            image: './asset/img/plist 3.jpg"'
        },
    ],
    render: function(){
        // Render list trending play audio
        const htmls = this.trends.map(function( song ){
            return `
                <div class="grid__column-2-4">
                    <a href="./asset/trending/trend.html" class="list__play">
                        <img class="list__play--img" src= "${song.image}" alt="">
                        <h4 class="list__play--name">${song.name}</h4>
                    </a>
                </div>
            `
        });
        trendList.innerHTML = htmls.join('');
        // ***************************************
        // render ra tất cả play list
        const uiList = this.allList.map(function(song, index){
            return `
            <div class="grid__column-2-4 list__play--active"  >
                <div class="list__play " data-index="${index}">
                    <img class="list__play--img" src="${song.image}" alt="">
                    <h4 class="list__play--name reset__playlist--name">${song.name}</h4>
                </div>
            </div>
            `
        });
        allListpart.innerHTML = uiList.join('');
        // **********************************************
        
        const currentPlaylist = web.allSong.map(function(song, index){
        console.log(song.name.length)

            return `
            <div class="playList--item ${index === web.currentIndex ? 'activeCurrentSong' : ''}" data-index="${index}">
                <img src="${song.image}" alt="">
                <img class="action-play" src="./asset/images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div> 
            </div>
            `
        });
        $('.playList__board--body').innerHTML = currentPlaylist.join('');
        // Lắng nghe hành vi click chọn 1 Play list
    },

    handleEvent: function(){
        // mở menu******
        menu.onclick = function(){
            $('.header__home--category').classList.add('open');
            $('.header__nav__menu--icon i').classList.add('invisible')
            const isOpen = $('.header__home--category').classList.contains('open');
            if (isOpen) {
                $('.header__home--category--closeBtn').onclick = function(){
                $('.header__home--category').classList.remove('open');
                $('.header__nav__menu--icon i').classList.remove('invisible')
                }          
            };
            
        };
        // Khi scroll down thì thanh header sẽ được ẩn đi
        document.onscroll = function(){
            const scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 400) {
                header.classList.add('hide');
                $('.header__home--category').classList.remove('open');
                $('.header__nav__menu--icon i').classList.remove('invisible');
            }
            else {
                header.classList.remove('hide');
            };

        }; 
        // // Nhấn search thì bảng tìm kiếm hiện ra
        searchBtn.onclick = function(){
            $('.header__nav__search').classList.add('flex');
            const isOpenSearch = $('.header__nav__search').classList.contains('flex');
            if(isOpenSearch) {
                $('.header__nav__search--closeBtn').onclick = function(){
                    $('.header__nav__search').classList.remove('flex');
                }
            }
        };
        // Mở UI Login
        LoginBtn.onclick = function(){
            const modal = document.getElementById('modal')
            modal.classList.add('open');
            const modalbox = $('.modal__box');
            modalbox.addEventListener('click', function(event){
                event.stopPropagation()
                
            });
            $('.Btn--ghibli').onclick = function(){
                $('.form').classList.add('open');
                const isOpenLogin = $('.form').classList.contains('open');
                if (isOpenLogin) {
                    modal.onclick = function(){
                        $('.form').classList.remove('open');
                        modal.classList.remove('open');
                    };
                }
            };
            modal.onclick = function(){
                $('.form').classList.remove('open');
                modal.classList.remove('open');
            };
            $('.form').addEventListener('click', function(event){
                event.stopPropagation();
            });
        }; 
        //  Xử lí trình phát nhạc
        // Click Play-Btn
        playBtn.onclick = function(){
            if (web.isPlaying){
                web.isPlaying = false;
                audio.pause();
                pauseBtn.classList.add('hide');
                $('.play-Btn').classList.remove('hide');
            }
            else {
                web.isPlaying = true;
                audio.play();
                pauseBtn.classList.remove('hide');
                $('.play-Btn').classList.add('hide');
            }
        };
        audio.ontimeupdate = function(){
            if(audio.duration) {
                const percentProgress = (audio.currentTime/audio.duration)*100;
                progressPlay.value = percentProgress;
            }
        };
        // khi tua nhạc thì position phát nhạc sẽ thay đổi
        progressPlay.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
            audio.play();
            activePlay();
           
        };
        // Chuyển bài hát kế tiếp hoặc bài trước
        nextBtn.onclick = function() {
            web.nextSong();
            web.render();
            audio.play();
            pauseBtn.classList.remove('hide');
            $('.play-Btn').classList.add('hide');
            web.scrollActiveSong()
        };
        preBtn.onclick = function(){
            web.preSong();
            web.render();
            audio.play();
            pauseBtn.classList.remove('hide');
            $('.play-Btn').classList.add('hide');
            web.scrollActiveSong()
        };
        // Khi hết 1 bài thì tự động chuyển sang bài kế tiếp
        audio.onended = function(){
            web.nextSong();
            audio.play();
            web.render();
            web.scrollActiveSong()
        };
        // return or forward 15s
        returnTimeBtn.onclick = function(){
            audio.currentTime -= 15;
            audio.play();
            activePlay()
            
           
        };
        fwTimeBtn.onclick = function(){
            audio.currentTime += 15;
            audio.play();
            activePlay()
            
        };
        // Hành vi tăng giảm âm lượng audio
        const volume = $('.volume');
        audio.volume = volume.value / 100; 
        volume.onchange = function(e){
             
            if (e.target.value > 0){
                audio.volume = e.target.value / 100;
                $('.fa-volume-low').classList.remove('hide');
                $('.fa-volume-xmark').classList.add('hide')
            }
            else {
                audio.volume = 0;
                $('.fa-volume-low').classList.add('hide');
                $('.fa-volume-xmark').classList.remove('hide')
            } 
        };
        // hành vi click vào icon âm lượng
        const speaker = $('.custom--volume')
        speaker.onchange = function(){
            if(audio.volume = 0){
                audio.volume = 1;
                volume.value = 100;
                $('.fa-volume-low').classList.remove('hide');
                $('.fa-volume-xmark').classList.add('hide');
            }else {
                
                audio.volume = 0;
                volume.value = 0;
                $('.fa-volume-low').classList.add('hide');
                $('.fa-volume-xmark').classList.remove('hide')
            }
        }
        const listOpenBtn = $('.fa-list-check');
        listOpenBtn.onclick = function(){
            $('.playList__board').classList.toggle('hide'); 
        };
        // Lắng nghe hành vi click vào playList
        $('.playList__board--body').onclick = function(e){
            const songNode = e.target.closest('.playList--item:not(.activeCurrentSong)');
            if ( songNode || e.target.closest('.playList--item--option')){
                if (songNode){
                    web.currentIndex = Number(songNode.dataset.index)
                    web.loadCurrentSong();
                    web.render();
                    pauseBtn.classList.remove('hide');
                    $('.play-Btn').classList.add('hide');
                    audio.play();
                    web.scrollActiveSong()
                }
            }
        };
    },
    // định nghĩa bài hát từ list Banh cam
    defineProperties: function(){
        Object.defineProperty(this,'currentSong', {
            get: function(){
                    return web.allSong[web.currentIndex]
                }               
            })
    },
    // thực hiện việc lấy tên bài hát, tác giả và src của bài hát và render ra UI
    loadCurrentSong: function(){
        $('.play__board--about__song--name').textContent = web.currentSong.name;
        audio.src = this.currentSong.path;
        $('.play__board--about__song--author').textContent = web.currentSong.author;
    },
    nextSong: function(){
            web.currentIndex++;
            if(web.currentIndex > web.allSong.length) {
                web.currentIndex = 0;   
            }  
            web.loadCurrentSong();      
                         
    },
    preSong: function(){
            --web.currentIndex;
            if(web.currentIndex < 0) {
                web.currentIndex = web.allSong.length - 1;
        }
        web.loadCurrentSong();
    },
    scrollActiveSong: function(){
        const theSongPlay = $('.activeCurrentSong')
        setTimeout(() => {
            theSongPlay.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        },100)
        
    },
// xử lí các hành động UI
    start: function(){
        this.handleEvent();
        this.render();
        this.defineProperties();
        this.loadCurrentSong();  
    }
}

// Chạy chương trình
web.start();
// Optimize UI
