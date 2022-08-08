const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const theme = $('.header__theme');
const container = $('.container');
const LoginBtn = $('.header__logo');
const line = $('.line');
const controls = $$('.control__btn');
const getSongLists =$$('.song');
const audio = $('.audio');
// Thay đổi background
theme.onclick = function(){
    container.classList.toggle('change')
}
// Đóng mở modal loginn ???????******************
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
// Hành vi click chọn ListPlay tại media place


// xử lí trình phát media
const trendPage = {
    currentIndex : 0,
    podcasts: [
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
    musics: [
        {
            name: '3107LofiVersion',
            path: './asset/trending/Music/3107LofiVersion-WnNauDuongg-6943942.mp3',
            image: '',
            author: 'W, n, Nâu, Duong'
        },
        {
            name: 'Anh mệt rồi',
            path: './asset/trending/Music/AnhMetRoiLofiVersion-AnhQuanIdolFreakD-6811840.mp3',
            image: '',
            author: 'Anh Quân Idol, FreakD'
        },
        {
            name: 'Bỏ lỡ nhau rồi',
            path: './asset/trending/Music/BoLoNhauRoiLofiVersion-HaiNamFreakD-6930872.mp3',
            image: '',
            author: 'Hải Nam, FreakD'
        },
        {
            name: 'Chẳng ai yêu mãi một người',
            path: './asset/trending/Music/ChangAiYeuMaiMotNguoiLofiVersion-NB3HoaiBaoDongDangFreakD-6861156.mp3',
            image: '',
            author: 'NB3 Hoài Bảo, Đồng Đăng, FreakD'
        },
        {
            name: 'Chỉ muốn bên em lúc này',
            path: './asset/trending/Music/ChiMuonBecircnEmLuacutecNagraveyFreakDLofiVersion-HuyVac-6940119.mp3',
            image: '',
            author: 'Huy Vạc, FreakD'
        },
        {
            name: 'Chỉ vì quá thương em',
            path: './asset/trending/Music/ChiViQuaThuongEmLofiVersion-HaiNamFreakD-6861154.mp3',
            image: '',
            author: 'Hải Nam, FreakD'
        },
        {
            name: 'Chúng ta sau này',
            path: './asset/trending/Music/ChungTaSauNayLofiVer-TRIFreakD-6953708.mp3',
            image: '',
            author: 'TRI, FreakD'
        },
        {
            name: 'Đừng xem ai đó là cả thế giới',
            path: './asset/trending/Music/DungXemAiDoLaCaTheGioiLofiVersion-ReddyHuuDuy-6281321.mp3',
            image: '',
            author: 'Reddy, Hữu Duy'
        },
        {
            name: 'Đường tôi chở em về',
            path: './asset/trending/Music/DuongToiChoEmVeLofiVersion-buitruonglinhFreakD-7025960_hq.mp3',
            image: '',
            author: 'Bùi Trường Linh, FreakD'
        },
        {
            name: 'Hẹn Yêu',
            path: './asset/trending/Music/HenYeuLofiVersion-DuyZunoCaoTri-6879088.mp3',
            image: '',
            author: 'Duy Zuno'
        },
        {
            name: 'Kẻ điên tin vào tình yêu',
            path: './asset/trending/Music/KeDienTinVaoTinhYeuLofiVersion-LilZpoetFreakD-6861163.mp3',
            image: '',
            author: 'LilZpoet, FreakD'
        },
        {
            name: 'Kẻ mộng mơ',
            path: './asset/trending/Music/KeMongMoLofiVer-ReddyFreakD-6929548.mp3',
            image: '',
            author: 'Reddy, FreakD'
        },
        {
            name: 'Lạ lùng',
            path: './asset/trending/Music/LaLungLofiVersion-Vu-6181036.mp3',
            image: '',
            author: 'VŨ'
        },
        {
            name: 'Liệu giờ',
            path: './asset/trending/Music/LieuGioEkidLofiVersion-2TVennVanEkid-6952139.mp3',
            image: '',
            author: '2TVennVanEkid'
        },
        {
            name: 'Mình anh nơi này',
            path: './asset/trending/Music/MinhAnhNoiNayLofiVersion-NITSingFreakD-7022891.mp3',
            image: '',
            author: 'NITSing, FreakD'
        },
        {
            name: 'Những gì anh nói',
            path: './asset/trending/Music/NhungGiAnhNoiLofiVersionByHawys-Bozitt-6946199.mp3',
            image: '',
            author: 'Bozitt'
        },
        {
            name: 'Nợ ai đó lời xin lỗi',
            path: './asset/trending/Music/NoAiDoLoiXinLoiLofiVersion-BozittCaoTri-6879092.mp3',
            image: '',
            author: 'Bozitt, CaoTri'
        },
        {
            name: 'Nước mắt em lau bằng tình yêu mới',
            path: './asset/trending/Music/NuocMatEmLauBangTinhYeuMoiCM1XLofiRemix-DaLABTocTien-6098438.mp3',
            image: '',
            author: 'DaLAB, TocTien'
        },
        {
            name: 'Phận duyên lỡ làng',
            path: './asset/trending/Music/Phận duyên lỡ làng - Phát Huy T4, Trungzg, Kprox.mp3',
            image: '',
            author: 'Phát Huy T4, Trungzg, Kprox'
        },
        {
            name: 'Răng khôn',
            path: './asset/trending/Music/RangKhonLofiVersion-PhiPhuongAnhTheFace-7026147.mp3',
            image: '',
            author: 'Phí Phương Anh'
        },
        {
            name: 'Sài gòn đau lòng quá',
            path: './asset/trending/Music/SaiGonDauLongQuaLofiVersion-HuaKimTuyenSIVAN-7006455.mp3',
            image: '',
            author: 'HuaKimTuyen, SIVAN'
        },
        {
            name: 'Sài gòn hôm nay mưa',
            path: './asset/trending/Music/SaiGonHomNayMuaLofiRainVersion-JSOLHoangDuyen-7034696.mp3',
            image: '',
            author: 'JSOL, HoangDuyen'
        },
        {
            name: 'Sợ rằng em biết anh còn yêu em',
            path: './asset/trending/Music/SoRangEmBietAnhConYeuEmLofiVersion-JuunDangDungFreakD-6248597_hq.mp3',
            image: '',
            author: 'Juun Đăng Dũng, FreakD'
        },
        {
            name: 'Thì thôi',
            path: './asset/trending/Music/ThiThoiLofiVer-ReddyFreakD-6929545.mp3',
            image: '',
            author: 'Reddy, FreakD'
        },
        {
            name: 'Vài giây nữa thôi',
            path: './asset/trending/Music/VaiGiayNuaThoiLofiVer-ReddyFreakD-6929544.mp3',
            image: '',
            author: 'Reddy, FreakD'
        },
    ],
    render: function(){
        controls.forEach((btn, index) => {
            var getSongList = getSongLists[index];
            btn.onclick = function(){
                $('.control__btn.active').classList.remove('active');
                this.classList.add('active');
                this.classList.add(index);
                line.style.left = this.offsetLeft + 132 + 'px';
                $('.song.active--song').classList.remove('active--song');
                getSongList.classList.add('active--song')
            };
        });
        const allSong = this.musics.concat(this.podcasts);
        const musicList = allSong.map((song) => {
            return `
            <div class="playList--item">
                <img src="../img/list - 3.jpg" alt="">
                <img class="action-play" src="../images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="time">5:06</div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>           
            </div>
            `
        });
        getSongLists[0].innerHTML = musicList.join('');
        const musicList1 = this.podcasts.map((song) => {
            return `
            <div class="playList--item">
                <img src="../img/list - 3.jpg" alt="">
                <img class="action-play" src="../images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="time">5:06</div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>      
            </div>
            `
        });
        getSongLists[1].innerHTML = musicList1.join('');
        const musicList2 = this.musics.map((song) => {
            return `
            <div class="playList--item">
                <img src="../img/list - 3.jpg" alt="">
                <img class="action-play" src="../images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="time">5:06</div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>           
            </div>
            `
        });
        getSongLists[2].innerHTML = musicList2.join('');
        // hành vi click option media
        
        
        
    },
    handle: function(){
        
    },
    defineProperties: function(){
        const set = Number($('.control__btn.active').dataset.index);
        switch(set){
            case 0: Object.defineProperty(this,'currentSong', {
                get: function(){
                        const allSong = this.musics.concat(this.podcasts);
                        return allSong[trendPage.currentIndex]
                    }               
                })
                break;
            case 1: Object.defineProperty(this,'currentSong', {
                get: function(){
                        return trendPage.podcasts[trendPage.currentIndex]
                    }               
                })
                break;   
            case 2: Object.defineProperty(this,'currentSong', {
                get: function(){
                        return trendPage.musics[trendPage.currentIndex]
                    }               
                }) 
        }
        console.log(this.currentSong.path);

       
        
    },
    start: function(){
        this.render();
        this.defineProperties();
        this.handle();
    }
}
trendPage.start();