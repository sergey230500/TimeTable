const data = [{"number":"1","type":"А","start":"ДС Веснянка","end":"Вокзал"},{"number":"2с","type":"А","start":"ДС ''Лошица-2''","end":"ст.м. Тракторный завод"},{"number":"3с","type":"А","start":"ДС Чижовка","end":"Вокзал"},{"number":"4","type":"А","start":"ДС Дружная","end":"Железнодорожная станция ''Минск-Южный''"},{"number":"4д","type":"А","start":"Железнодорожная станция ''Минск-Южный''","end":"ДС Дружная"},{"number":"5д","type":"А","start":"ДС Чижовка","end":"Михановичи (кладбище)"},{"number":"5э","type":"А","start":"ДС Чижовка","end":"Михановичи (кладбище)"},{"number":"6","type":"А","start":"ДС Дружная","end":"Брилевичи"},{"number":"7","type":"А","start":"ДС ''Курасовщина''","end":"Колядичи"},{"number":"7а","type":"А","start":"ДС ''Курасовщина''","end":"Колядичи"},{"number":"8","type":"А","start":"ДС ''Сухарево-5''","end":"Люцинская"},{"number":"9","type":"А","start":"Серебрянка-9","end":"Завод железобетонных изделий"},{"number":"9д","type":"А","start":"ДС Шабаны","end":"Серебрянка-9"},{"number":"10","type":"А","start":"ДС Дружная","end":"Воронянского"},{"number":"11","type":"А","start":"ДС ''Веснянка''","end":"ДС ''Веснянка''"},{"number":"12","type":"А","start":"ДС ''Кунцевщина''","end":"ДС ''Сухарево-5''"},{"number":"13","type":"А","start":"ДС ''Зелёный Луг-6''","end":"Макаёнка"},{"number":"14","type":"А","start":"ДС ''Восточная''","end":"Степянка"},{"number":"15","type":"А","start":"ДС Славинского","end":"Фогеля"},{"number":"15д","type":"А","start":"ДС ''Уручье-2''","end":"Фогеля"},{"number":"16","type":"А","start":"ДС Ангарская-4","end":"ДС Чижовка"},{"number":"17","type":"А","start":"ДС ''Сухарево-5''","end":"ДС ''Кунцевщина''"},{"number":"18","type":"А","start":"ДС ''Восточная''","end":"Новинки"},{"number":"19","type":"А","start":"ДС ''Карастояновой''","end":"Слепянка"},{"number":"20с","type":"А","start":"ДС Ангарская-4","end":"Станция метро ''Академия наук''"},{"number":"21","type":"А","start":"ДС Шабаны","end":"ДС Чижовка"},{"number":"22","type":"А","start":"ДС Ангарская-4","end":"ДС Чижовка"},{"number":"23","type":"А","start":"ДС ''Малиновка-4''","end":"Городской Вал"},{"number":"24","type":"А","start":"ДС ''Зелёный Луг-6''","end":"Воронянского"},{"number":"25","type":"А","start":"ДС Уручье -2","end":"Кульман"},{"number":"26","type":"А","start":"ДС ''Восточная''","end":"Павлины Медёлки"},{"number":"27","type":"А","start":"ДС Ангарская-4","end":"Сосновый Бор"},{"number":"27д","type":"А","start":"ДС Ангарская-4","end":"Запорожская пл."},{"number":"28","type":"А","start":"ДС Серова","end":"Масюковщина"},{"number":"29","type":"А","start":"ДС ''Карастояновой''","end":"ДС ''Кунцевщина''"},{"number":"30с","type":"А","start":"Корженевского","end":"Красный Бор"},{"number":"31","type":"А","start":"ДС ''Уручье-2''","end":"Колодищанское кладбище"},{"number":"32с","type":"А","start":"ДС ''Малиновка-4''","end":"ДС Дружная"},{"number":"33","type":"А","start":"Копище","end":"Станция метро ''Уручье''"},{"number":"34","type":"А","start":"ДС ''Славинского''","end":"Переулок ''Липковский''"},{"number":"35","type":"А","start":"ДС ''Зелёный Луг-6''","end":"Макаёнка"},{"number":"36","type":"А","start":"ДС ''Кунцевщина''","end":"Тарасово"},{"number":"37","type":"А","start":"ДС ''Карбышева''","end":"ДС ''Восточная''"},{"number":"38","type":"А","start":"ДС ''Карастояновой''","end":"ДС Дружная"},{"number":"38т","type":"А","start":"ДС ''Сухарево-5''","end":"ДС ''Славинского''"},{"number":"39","type":"А","start":"ДС ''Восточная''","end":"Щедрина"},{"number":"40","type":"А","start":"ДС ''Кунцевщина''","end":"Ландера"},{"number":"41","type":"А","start":"ДС ''Одоевского''","end":"Каменная Горка-5"},{"number":"42","type":"А","start":"ДС ''Сухарево-5''","end":"Люцинская"},{"number":"43","type":"А","start":"ДС Дружная","end":"Степянка"},{"number":"43д","type":"А","start":"ст.м. Тракторный завод","end":"Степянка"},{"number":"44","type":"А","start":"ДС ''Карастояновой''","end":"Станция ''Ждановичи''"},{"number":"45","type":"А","start":"ДС Дружная","end":"Минскрыбпром"},{"number":"46","type":"А","start":"ДС ''Масюковщина''","end":"Бобруйская"},{"number":"47с","type":"А","start":"Вокзал","end":"Филиал БГУ"},{"number":"48","type":"А","start":"ДС Чижовка","end":"Ландера"},{"number":"49","type":"А","start":"ДС ''Масюковщина''","end":"С. Ковалевской"},{"number":"50с","type":"А","start":"ДС ''Сухарево-5''","end":"Вокзал"},{"number":"51","type":"А","start":"ДС ''Чижовка-1''","end":"Железнодорожная остановка ''Лошица''"},{"number":"52","type":"А","start":"Товарная","end":"Червенский рынок"},{"number":"53","type":"А","start":"ДС Дружная","end":"Ландера"},{"number":"54","type":"А","start":"ДС Запад-3","end":"ст.м. Спортивная"},{"number":"55","type":"А","start":"Автовокзал \"Восточный\"","end":"Железнодорожная станция ''Минск-Южный''"},{"number":"56","type":"А","start":"ДС ''Серебрянка''","end":"Дражня"},{"number":"57","type":"А","start":"ДС ''Восточная''","end":"Семашко"},{"number":"58","type":"А","start":"Автостанция \"Автозаводская\"","end":"Торговый центр \"ОМА\""},{"number":"59","type":"А","start":"ДС Чижовка","end":"Кульман"},{"number":"60","type":"А","start":"ДС ''Запад-3''","end":"ТЦ ''Ждановичи''"},{"number":"61","type":"А","start":"ДС Ангарская-4","end":"Селицкого"},{"number":"62э","type":"А","start":"ДС ''Запад-3''","end":"Новинки"},{"number":"63","type":"А","start":"ДС ''Уручье-2''","end":"Великий Лес"},{"number":"63д","type":"А","start":"ДС ''Уручье-2''","end":"Фогеля (Малыш)"},{"number":"64","type":"А","start":"ДС ''Уручье-2''","end":"Макаёнка"},{"number":"65","type":"А","start":"ДС Лошица-2","end":"Городской Вал"},{"number":"66","type":"А","start":"Автостанция \"Автозаводская\"","end":"Промышленная"},{"number":"67","type":"А","start":"ДС Чижовка","end":"Колядичи"},{"number":"68","type":"А","start":"ДС ''Карастояновой''","end":"Северное кладбище"},{"number":"68в","type":"А","start":"ДС ''Карастояновой''","end":"Городок"},{"number":"69","type":"А","start":"Вокзал","end":"Масюковщина"},{"number":"70","type":"А","start":"Автостанция \"Автозаводская\"","end":"Дражня"},{"number":"71","type":"А","start":"ст.м. Тракторный завод","end":"Степянка"},{"number":"72","type":"А","start":"ДС Шабаны","end":"Станция метро ''Могилевская''"},{"number":"72д","type":"А","start":"Станция метро ''Могилевская''","end":"Электродепо ''Могилёвское''"},{"number":"73","type":"А","start":"ДС ''Серова''","end":"Лебяжий"},{"number":"74с","type":"А","start":"ДС ''Малиновка-4''","end":"Городской Вал"},{"number":"75","type":"А","start":"ДС ''Малиновка-4''","end":"Станция метро ''Петровщина''"},{"number":"76э","type":"А","start":"ДС Ангарская-4","end":"ТЦ ''Ждановичи''"},{"number":"77","type":"А","start":"ДС ''Уручье-2''","end":"Магистр"},{"number":"78","type":"А","start":"ДС Каменная горка-5","end":"Бобруйская"},{"number":"79","type":"А","start":"Автостанция \"Автозаводская\"","end":"Вокзал"},{"number":"79д","type":"А","start":"Автостанция \"Автозаводская\"","end":"Вокзал"},{"number":"80","type":"А","start":"ДС ''Карбышева''","end":"Великий Лес"},{"number":"81э","type":"А","start":"ДС ''Лошица-2''","end":"Вокзал"},{"number":"82с","type":"А","start":"ДС ''Серебрянка''","end":"Корженевского"},{"number":"83э","type":"А","start":"ДС ''Малиновка-4''","end":"ТЦ ''Ждановичи''"},{"number":"84","type":"А","start":"ДС ''Малиновка-4''","end":"Слепянка"},{"number":"85с","type":"А","start":"ДС Дружная","end":"Гатово"},{"number":"86","type":"А","start":"Копище","end":"Озерище"},{"number":"87с","type":"А","start":"ДС ''Зелёный Луг-6''","end":"Автостанция \"Автозаводская\""},{"number":"88с","type":"А","start":"ДС Ангарская-4","end":"Ландера"},{"number":"89э","type":"А","start":"ДС ''Уручье-2''","end":"ТЦ ''Ждановичи''"},{"number":"90","type":"А","start":"АС Юго-Западная","end":"АС Юго-Западная"},{"number":"91","type":"А","start":"ДС ''Калиновского''","end":"Веснинка"},{"number":"93","type":"А","start":"ДС Шабаны","end":"Старый аэропорт"},{"number":"94с","type":"А","start":"Автостанция \"Автозаводская\"","end":"Чижовское кладбище"},{"number":"95","type":"А","start":"ДС ''Калиновского''","end":"Степянка"},{"number":"96","type":"А","start":"ДС ''Малиновка-4''","end":"Филиал БГУ"},{"number":"97","type":"А","start":"ДС ''Серова''","end":"Малиновка-8"},{"number":"98с","type":"А","start":"ДС ''Лошица-2''","end":"Станция метро ''Могилевская''"},{"number":"99","type":"А","start":"ДС ''Уручье-4''","end":"Военная академия"},{"number":"100","type":"А","start":"ДС ''Славинского''","end":"Старый аэропорт"},{"number":"101","type":"А","start":"ДС \"Дружная\"","end":"ТЦ ''Ждановичи''"},{"number":"102","type":"А","start":"ДС Чижовка","end":"Вокзал"},{"number":"103","type":"А","start":"ДС ''Юго-Запад''","end":"ДС ''Малиновка-4''"},{"number":"104","type":"А","start":"ДС ''Малиновка-4''","end":"Сеница"},{"number":"105","type":"А","start":"ДС ''Карастояновой''","end":"Зацень"},{"number":"106","type":"А","start":"ДС Ангарская-4","end":"ст.м. Тракторный завод"},{"number":"107","type":"А","start":"ДС ''Кунцевщина''","end":"Корженевского"},{"number":"108","type":"А","start":"Автостанция \"Автозаводская\"","end":"Гатово"},{"number":"108б","type":"А","start":"ДС Чижовка","end":"Гатово"},{"number":"108д","type":"А","start":"ДС Чижовка","end":"Гатово"},{"number":"108п","type":"А","start":"Автостанция \"Автозаводская\"","end":"Гатово"},{"number":"109","type":"А","start":"ДС ''Карбышева''","end":"Северное кладбище"},{"number":"109в","type":"А","start":"ДС ''Карбышева''","end":"Северное кладбище"},{"number":"110","type":"А","start":"Автостанция \"Автозаводская\"","end":"Сосны"},{"number":"110а","type":"А","start":"Автостанция \"Автозаводская\"","end":"Сосны"},{"number":"111","type":"А","start":"Старый аэропорт","end":"Площадь Победы"},{"number":"112с","type":"А","start":"Автостанция \"Автозаводская\"","end":"Сокол"},{"number":"113а","type":"А","start":"ДС ''Уручье-4''","end":"Областная больница"},{"number":"113с","type":"А","start":"ДС ''Уручье-4''","end":"РНПЦ Онкологии"},{"number":"114с","type":"А","start":"ДС Чижовка","end":"Авторынок"},{"number":"115э","type":"А","start":"Вокзал","end":"Тубдиспансер"},{"number":"116","type":"А","start":"ДС Каменная Горка-5","end":"Малиновка-8"},{"number":"117д","type":"А","start":"ДС Чижовка","end":"ДС Дражня"},{"number":"117с","type":"А","start":"ДС Чижовка","end":"ДС Дражня"},{"number":"119с","type":"А","start":"Аквапарк","end":"Вокзал"},{"number":"120","type":"А","start":"Малиновка-6","end":"ст.м.\" Малиновка\""},{"number":"120д","type":"А","start":"ст.м.Малиновка","end":"Малиновка-6"},{"number":"121","type":"А","start":"ДС ''Сухарево-5''","end":"ТЦ ''Ждановичи''"},{"number":"122э","type":"А","start":"ДС ''Кунцевщина''","end":"С. Ковалевской"},{"number":"123","type":"А","start":"ДС ''Лошица-2''","end":"Площадь Независимости"},{"number":"124","type":"А","start":"ДС ''Лошица-2''","end":"Станция метро ''Пушкинская''"},{"number":"125","type":"А","start":"ДС ''Запад-3''","end":"ТЦ ''Ждановичи''"},{"number":"126","type":"А","start":"Масюковщина","end":"ДС ''Одоевского''"},{"number":"127","type":"А","start":"ДС ''Серебрянка''","end":"Пл. Независимости"},{"number":"128","type":"А","start":"Каменная горка-4-ст.м.Каменная горка","end":"Каменная горка-4-ст.м.Каменная горка"},{"number":"129","type":"А","start":"Автостанция \"Автозаводская\"","end":"Станция аэрации"},{"number":"130","type":"А","start":"ДС ''Одоевского''- ТЦ ''Ждановичи''","end":"ДС ''Одоевского''- ТЦ ''Ждановичи''"},{"number":"131","type":"А","start":"ДС ''Карастояновой''","end":"Цнянка"},{"number":"132","type":"А","start":"ДС ''Малиновка-4''","end":"Щомыслица"},{"number":"133","type":"А","start":"ДС ''Карбышева''","end":"ДС Веснянка"},{"number":"134с","type":"А","start":"ДС Чижовка","end":"ДС ''Малиновка-4''"},{"number":"135","type":"А","start":"Новая Боровая","end":"Станция метро ''Уручье''"},{"number":"136","type":"А","start":"ДС ''Карастояновой''","end":"Оздоровительный центр Ждановичи"},{"number":"137","type":"А","start":"ДС ''Кунцевщина''","end":"Водоочистительная станция"},{"number":"138","type":"А","start":"ДС ''Кунцевщина''","end":"Промузел Западный"},{"number":"139","type":"А","start":"ДС ''Калиновского''","end":"Великий Лес"},{"number":"140","type":"А","start":"ДС ''Сухарево-5''","end":"ТЦ ''Ждановичи''"},{"number":"141","type":"А","start":"ДС ''Карбышева''","end":"Областная больница"},{"number":"141а","type":"А","start":"ДС Карбышева","end":"Боровлянская школа №3"},{"number":"141б","type":"А","start":"Боровлянская школа №3","end":"Боровлянская школа №3"},{"number":"142","type":"А","start":"ДС ''Малиновка-4''","end":"Промузел Западный"},{"number":"143","type":"А","start":"ДС ''Карбышева''","end":"Зеленый Бор"},{"number":"144с","type":"А","start":"ДС\" Кунцевщина\"","end":"ДС\" Курасовщина\""},{"number":"145с","type":"А","start":"ДС ''Уручье-2''","end":"Тубдиспансер"},{"number":"146с","type":"А","start":"ДС ''Карбышева''","end":"Дроздово"},{"number":"147","type":"А","start":"ДС ''Малиновка-4''","end":"Брилевичи"},{"number":"147д","type":"А","start":"ДС ''Малиновка-4''","end":"Брилевичи (Малыш)"},{"number":"148с","type":"А","start":"ДС Шабаны","end":"Ландера"},{"number":"149","type":"А","start":"ДС Запад-3","end":"Люцинская"},{"number":"150","type":"А","start":"Брилевичи","end":"Озерцо"},{"number":"151э","type":"А","start":"ДС ''Серебрянка''","end":"ТЦ ''Ждановичи''"},{"number":"152с","type":"А","start":"Каменная горка-5","end":"ДС ''Одоевского''(Малыш)"},{"number":"153","type":"А","start":"Танковая","end":"Станция метро ''Уручье''"},{"number":"153д","type":"А","start":"Танковая","end":"Станция метро ''Уручье''"},{"number":"154","type":"А","start":"ДС ''Карастояновой''","end":"Щедрина"},{"number":"155","type":"А","start":"ДС ''Уручье-4''","end":"Озерище"},{"number":"156c","type":"А","start":"ДС ''Юго-Запад''","end":"Водоочистительная станция"},{"number":"157","type":"А","start":"ДС ''Карбышева''","end":"Маневича"},{"number":"158","type":"А","start":"ДС ''Карбышева''","end":"Валерьяново"},{"number":"159","type":"А","start":"ДС ''Запад-3''","end":"ДС ''Запад-3''"},{"number":"160","type":"А","start":"Автостанция \"Автозаводская\"","end":"Институт Сосны"},{"number":"160а","type":"А","start":"Автостанция \"Автозаводская\"","end":"Институт Сосны"},{"number":"161","type":"А","start":"Автостанция \"Автозаводская\"","end":"Сосны"},{"number":"161а","type":"А","start":"Автостанция \"Автозаводская\"","end":"Полигон Тростенецкий"},{"number":"161с","type":"А","start":"Автостанция \"Автозаводская\"","end":"Полигон Тростенецкий"},{"number":"162","type":"А","start":"ДС ''Карбышева''","end":"Цна"},{"number":"163","type":"А","start":"ДС ''Одоевского''","end":"Воронянского"},{"number":"165","type":"А","start":"ДС ''Калиновского''","end":"Геологический переулок"},{"number":"166","type":"А","start":"АС Юго-Западная","end":"Михалово-2"},{"number":"168","type":"А","start":"Автостанция \"Автозаводская\"","end":"Сосны"},{"number":"168а","type":"А","start":"Автостанция \"Автозаводская\"","end":"АкваТрайпл"},{"number":"170э","type":"А","start":"АС Юго-Западная","end":"Западное кладбище"},{"number":"172э","type":"А","start":"ДС ''Уручье-2''","end":"Колодищанское кладбище"},{"number":"173э","type":"А","start":"м-р Сокол","end":"Национальный аэропорт Минск"},{"number":"175э","type":"А","start":"Вокзал","end":"Колядичи"},{"number":"176э","type":"А","start":"ДС ''Серова''","end":"ДС Шабаны"},{"number":"177э","type":"А","start":"ДС ''Кунцевщина''","end":"Озерцо"},{"number":"180с","type":"А","start":"ДС ''Серова''","end":"Красный Бор"},{"number":"181э","type":"А","start":"Каменная Горка-5","end":"ДС ''Масюковщина'' ~ (Малыш-3)"},{"number":"183с","type":"А","start":"Малыш (ДС \"Лошица-2\"","end":"ДС \"Серебрянка\")"},{"number":"184с","type":"А","start":"Каменная Горка-5","end":"ДС ''Одоевского''(Малыш-2)"},{"number":"185с","type":"А","start":"ДС Каменная Горка-5","end":"Масюковщина"},{"number":"186","type":"А","start":"Станция метро ''Могилевская''","end":"Шишкина"},{"number":"187","type":"А","start":"Брикета","end":"Красный Бор"},{"number":"188с","type":"А","start":"Брилевичи","end":"Школа №188"},{"number":"189э","type":"А","start":"ДС ''Запад-3''","end":"РКМЦ"},{"number":"190э","type":"А","start":"Вокзал","end":"РКМЦ"},{"number":"191","type":"А","start":"ДС ''Лошица-2''","end":"Воронянского"},{"number":"196","type":"А","start":"ДС Малиновка-4","end":"С. Ковалевской"},{"number":"198э","type":"А","start":"Сокол","end":"Гостиница ''Спутник''"},{"number":"199с","type":"А","start":"ДС Шабаны","end":"Сосны"},{"number":"908","type":"А","start":"ДС ''Сухарево-5''","end":"ДС ''Дружная''"},{"number":"921","type":"А","start":"ДС ''Зелёный Луг-6''","end":"ст.м. Восток"},{"number":"928","type":"А","start":"Брилевичи","end":"Чюрлёниса"},{"number":"942","type":"А","start":"ДС Уручье-4","end":"ст.м. Восток"},{"number":"947","type":"А","start":"ДС ''Масюковщина''","end":"Станция метро ''Пушкинская''"}];

const fields = ["number","type","start","end"];
function displayRoutes(){
	let container = document.querySelector(".routes tbody");
	for(let route of data){
		let tr = document.createElement("tr");
		for (let field of fields){
			let td = document.createElement("td");
			td.innerText = route[field];
			td.classList.add(field);
			tr.appendChild(td);
		}
		container.appendChild(tr);
	}
}

displayRoutes();
