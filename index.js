const facts = [
    { category: 'Science', fact: 'Ջուրը կարող է եռալ և սառչել միաժամանակ: Սա կոչվում է «երրորդ կետ»։' },
    { category: 'History', fact: 'Չինաստանի Մեծ պարսպը ոչ թե մի շարունակական պարսպ է, այլ մի շարք պարսպներ, որոնք կառուցվել են տարբեր դինաստիաների կողմից։' },
    { category: 'Culture', fact: 'Եյֆելյան աշտարակը կարող է ամռանը մինչև 15 սմ բարձրանալ՝ երկաթի ընդարձակման պատճառով։' },
    { category: 'Nature', fact: 'Օկտոպուսներն ունեն երեք սիրտ՝ երկուսը արյուն են պոմպում խողովակների համար, իսկ մեկը՝ մնացած մարմնին։' },
    { category: 'Space', fact: 'Վեներայում մեկ օրը երկար է, քան մեկ տարին՝ քանի որ նրա պտտումը ավելի դանդաղ է, քան նրա պտույտը արևի շուրջը։' },
    { category: 'Animals', fact: 'Բանանները հատապտուղներ են, բայց կիտրոնները՝ ոչ։' },
    { category: 'Sports', fact: 'Տենիսային գնդակի արագության ամենաբարձր ռեկորդը 163 մղոն ժամում (263 կմ/ժ) է եղել՝ Տենիսիստ Սամ Գրոթի կողմից։' },
    { category: 'Technology', fact: 'Առաջին համակարգչային վիրուսը ստեղծվել է 1986 թվականին և կոչվել է «Brain»։ Այն մշակվել էր IBM համակարգիչների վարակման համար։' },
    { category: 'Geography', fact: 'Անտարկտիկան ամենաբարձր, ցուրտ և քամոտ մայրցամաքն է, և այնտեղ չունեն մշտական բնակչություն։' },
    { category: 'Food', fact: 'Համի մեջ գտնվող մեղրը երբեք չի փչանում։ Արխեոլոգները գտել են 3,000 տարվա հին մեղրեր, որոնք դեռ ուտելի են։' },
    { category: 'Science', fact: 'Տիեզերքում կա մի շրջան, որը կոչվում է «սպիտակ ճեղք»։ Այն այնքան հեռու է, որ նույնիսկ լույսը չի կարող այնտեղ հասնել։' },
    { category: 'History', fact: 'Ամերիկյան ազգային խորհրդարանը՝ Կոնգրեսը, նախկինում հանդիպել է Փենսիլվանիայում՝ Ֆիլադելֆիայում։' },
    { category: 'Culture', fact: 'Ճապոնական լեզվաբառարաններում կգտնեք ավելի քան 50,000 բառ, սակայն ընդհանուր օգտագործման մեջ են մտնում միայն 2,000-3,000 բառեր։' },
    { category: 'Nature', fact: 'Կեղևի մոլեխաղը աստիճանաբար ծածկում է ամբողջ մոլորակը՝ 60 միլիոն տարի տևողությամբ։' },
    { category: 'Space', fact: 'Չինաստանի երկնային կայանները յուրաքանչյուր հինգերորդ օրերին ավելի լավ են ուսումնասիրում, քան արևի շրջանակաները։' },
    { category: 'Animals', fact: 'Ճնճղուկներն ու մկները կարող են խոսել՝ շրջապատելով ուրիշներին որսելու համար։' },
    { category: 'Sports', fact: 'Օլիմպիական խաղերի սկիզբը եղել է 776թ. առաջ արկածահետախորագիտության անվան մեջ, որը կառուցվել էր՝ Հին հունական խաղերով։' },
    { category: 'Technology', fact: 'Աշխարհի առաջին համակարգիչները բաղկացած էին հեռավոր մարտկոցներից ու թվարկած հատվածներից։' },
    { category: 'Geography', fact: 'Աֆրիկայի մայրցամաքում տարածված են ավելի քան 2,000 լեզուներ։' },
    { category: 'Food', fact: 'Չինական նախընտրանքներում համարվում է առավել օգտակար բանջարեղեններից մեկը լոբին։' },
    { category: 'Science', fact: 'Կենսաբառարանը ցույց է տալիս, որ բոլոր օրգանիզմները կարելի է դասավորել կենսաբառարանական գործելակերպերով։' },
    { category: 'History', fact: 'Նապոլեոն Բոնապարտը ունեցել է մի քանի մասնակիցներ` իր քաղաքական մրցակցությամբ։' },
    { category: 'Culture', fact: 'Հնդկաստանի ծաղկող մասնագիտական արտադրությունները ունեն մեծ նշանակություն մշակույթի նորարարության համար։' },
    { category: 'Science', fact: 'Դինոզավրերը բնակվում էին Երկիր մոլորակում ավելի քան 160 միլիոն տարի առաջ։' },
    { category: 'History', fact: 'Ռոմի կայսրությունը գոյություն ուներ շուրջ 1,500 տարի՝ սկսած մ.թ.ա. 27-ից մինչև 476թ.' },
    { category: 'Culture', fact: 'Մոնա Լիզայի նկարը պարբերաբար մեծ ճանաչում է ստացել ամբողջ աշխարհում՝ իր գաղտնի ժպիտի շնորհիվ։' },
    { category: 'Nature', fact: 'Բարեբախտաբար, բնությունը մեզ տալիս է բոլոր անհրաժեշտ տարրերը՝ սնունդից մինչև թթվածին։' },
    { category: 'Space', fact: 'Ինժեներները աշխատում են կառուցել տիեզերքի համար նոր տեսակի թռչող սարքեր, որոնք կկարողանան ավելի արագ շարժվել, քան լույսը։' },
    { category: 'Animals', fact: 'Ճուտիկներն ավելի արագ են հեծնում, քան սարդերը, բայց իրենց ոտքերը փոքր են՝ միայն 4 սմ երկարություն ունեն։' },
    { category: 'Sports', fact: 'Ֆուտբոլը ամենաշատ հետևորդներն ունեցող մարզաձևն է աշխարհում՝ ավելի քան 3 միլիարդ երկրպագուներով։' },
    { category: 'Technology', fact: 'Արհեստական ինտելեկտը վաղուց է սկսել ազդել մարդկության առօրյա կյանքում՝ կատարելով բազմաթիվ առաջադրանքներ։' },
    { category: 'Geography', fact: 'Ամազոնի ջունգլիում գտնվող ծառերն ապահովում են 20%-ը բոլոր մոլորակի թթվածնի արտադրության։' },
    { category: 'Food', fact: 'Կարտոֆիլը ամենատարածված բանջարեղեններից մեկն է ամբողջ աշխարհում՝ չնայած նրա հորինվածքը՝ «թվային» ձև է։' },
    { category: 'Science', fact: 'Երկիրը շրջապատված է երկու հիմնական ճառագայթներից՝ տիեզերքի ճառագայթից և արևի ճառագայթից։' },
    { category: 'History', fact: 'Ռուսական կայսրությունը գոյություն է ունեցել ավելի քան 300 տարի՝ սկսած 1721-ից մինչև 1917թ.' },
    { category: 'Culture', fact: 'Բելգիական շոկոլադը համարվում է աշխարհի լավագույն շոկոլադներից մեկը՝ իր բարձրորակ բաղադրիչներով։' },
    { category: 'Nature', fact: 'Շան ուղեղը դանդաղորեն զարգանում է նրա կյանքի ընթացքում՝ այն ավելի խելացի դարձնելով։' },
    { category: 'Space', fact: 'Վեներայի մակերևույթը ծածկված է թթվածինով, բայց երբեք չի հնարավոր լինի ապրել այնտեղ։' },
    { category: 'Animals', fact: 'Ճագարները կարող են վազել ավելի արագ, քան մարդու վազքի հզորությունը՝ 70 կմ/ժ արագությամբ։' },
    { category: 'Sports', fact: 'Ճապոնիայի սպորտը համարվում է մարմնիկների այնպիսի ցուցադրման ձև, որտեղ հանդիպում են մեծ ինստիտուցիոնալ խաղերի մակարդակները։' },
    { category: 'Technology', fact: 'Համակարգչային ծրագրերը աճում են իրենց նորարարություններով, ինչի արդյունքում ստեղծվում են նոր գործիքներ՝ լրացնելու մարդկային կարիքները։' },
    { category: 'Geography', fact: 'Արևելյան Աֆրիկայում լեռնաշղթաները բարձրանում են 7,000 մետր բարձրության վրա՝ ստեղծելով հրաշալի լանդշաֆտներ։' },
    { category: 'Food', fact: 'Խաղի ձևավորումը ոչ միայն ֆիզիկական է, բայց նաև հոգեբանական փուլերի միասնություն ստեղծելու օգուտ ունի։' },
    { category: 'Science', fact: 'Դնոների գոյությունը հենց այդպես չարաշահել մի պահակագրություն էր, որը կատարվել էր բոլոր ժամանակների խոշորագույն աշխարհատարածքներով։' },
    { category: 'History', fact: 'Միջին դարերում համաշխարհային սեռեր և դեպքերից շատ տարբեր մոտեցումներ սկսվել են հայտնվել։' },
    { category: 'Culture', fact: 'Որպես հայկական մշակույթի մի մասը, որ գլխավորում են վաղօրոք օգտագործված գունավոր դիերեր ներմուծում անմիջապես հասկանալու գործածությունից։' },
    { category: 'Nature', fact: 'Բնական բնությունը միշտ դիտվող փորձառությունը մեր կարճոգիր ի վեր տեսակավորած տիեզերքը որոշեց առաջացման։' },
    { category: 'Space', fact: 'Նորագույն քաղաքային ոճերում պարունակվող տարբեր անհանգստություն գործված երանգավորաները հանրաբառների շրջանում խնդրք են ստեղծում։' },
    { category: 'Animals', fact: 'Երկարատև կենդանիներից միմյանց տարբեր խորհուրդներ միասին կունենա ապա' },
    { category: 'Science', fact: 'Երկրի մագնիսական դաշտը առաջանում է երկաթի և նիկելի հոսանքի շնորհիվ նրա կորիզում։' },
    { category: 'History', fact: 'Եգիպտական փարավոնները հաճախ կառուցում էին բուրգեր իրենց գերեզմանատեղիների համար։' },
    { category: 'Culture', fact: 'Ֆրանսիայում baguette հացը օրական արտադրում են մոտ 10 միլիոն կտոր։' },
    { category: 'Nature', fact: 'Ծաղիկների հոտերը գործում են հիմնականում տաք եղանակին՝ նպաստելով միջատների մոտեցմանը։' },
    { category: 'Space', fact: 'Իսկական աստղային մայրամուտի համար պետք է մոտ 8 րոպե՝ լույսը հասնի մեզ արևից։' },
    { category: 'Animals', fact: 'Կախված տեսակից, շները կարող են ունենալ միջինը 42 ատամներ։' },
    { category: 'Sports', fact: 'Օլիմպիական խաղերի խորհրդանիշը՝ հինգ օղակները, խորհրդանշում են մայրցամաքները։' },
    { category: 'Technology', fact: 'Թվային ֆոտոխցիկները ստեղծում են կոդավորված պատկերներ, որը կարող են պահել ֆայլում։' },
    { category: 'Geography', fact: 'Գրենլանդիան համարվում է աշխարհի ամենամեծ կղզին՝ տարածքով 2,166,086 կմ²։' },
    { category: 'Food', fact: 'Կոկոսի ջուրը համարվում է բնական աղանցու տևական բավարարվածության աղբյուր։' },
    { category: 'Science', fact: 'Մարդու կմախքի համակարգն ունի մոտավորապես 206 ոսկրեր։' },
    { category: 'History', fact: 'Փիրամիդների կառույցը եղել է բարդ և պահանջել է մոտ 20 տարի աշխատանք։' },
    { category: 'Culture', fact: 'Հնդկաստանում սարը հասկանալի է չորս տարբեր լեզուներով՝ հինդի, անգլերեն, թամիլ և բենգալերեն։' },
    { category: 'Nature', fact: 'Աշխարհի ամենաբարձր ջրվեժը՝ Անհելը, ունի 979 մ բարձրություն և գտնվում է Վենեսուելայում։' },
    { category: 'Space', fact: 'Տիեզերքում ձայնը չի տարածվում, քանի որ այնտեղ բացակայում է միջավայրը։' },
    { category: 'Animals', fact: 'Սիրամարգները ցուցադրում են իրենց պոչի պերճությունը՝ ներգրավելու համար ընկերոջը։' },
    { category: 'Sports', fact: 'Կատարումը բարձրացնում է նիհարման և առողջական վիճակի մակարդակը։' },
    { category: 'Technology', fact: 'Առաջին համակարգիչը՝ ENIAC-ը, կշռում էր մոտ 30 տոննա։' },
    { category: 'Geography', fact: 'Չինաստանի տարածքը աշխարհում երրորդն է, միանգամից Ռուսաստանի և Կանադայի հետևից։' },
    { category: 'Food', fact: 'Շոկոլադը պարունակում է անտիբիոտիկներ, որոնք օգտակար են առողջության համար։' },
    { category: 'Science', fact: 'Ծովերի աղը հիմնականում առաջանում է ջրի ծծման և ջրային ցիկլի պատճառով։' },
    { category: 'History', fact: 'Համաշխարհային պատմության մեջ պապական միակ կինն էր Հովհաննա՝ 853 թվականին։' },
    { category: 'Culture', fact: 'Ճապոնիայում թեյախմության արարողությունն ունի մոտ 700 տարվա պատմություն։' },
    { category: 'Nature', fact: 'Կրիտիկական կետում ջուրը կարող է գոյություն ունենալ ինչպես գազային, այնպես էլ հեղուկ վիճակում։' },
    { category: 'Space', fact: 'Գալակտիկաները կարող են պարունակել հարյուր միլիոնավոր աստղեր և հազարավոր մոլորակներ։' },
    { category: 'Animals', fact: 'Թութակները կարող են դառնալ մինչև 80 տարեկան՝ կախված տեսակից։' },
    { category: 'Sports', fact: 'Բասկետբոլը ստեղծվել է ԱՄՆ-ում 1891 թվականին՝ որպես սրահային մարզական խաղ։' },
    { category: 'Technology', fact: 'Էլեկտրամագնիսական ալիքները օգտագործվում են ռադիոհաղորդումների և հեռուստատեսության մեջ։' },
    { category: 'Geography', fact: 'Նոր Զելանդիան կազմված է ավելի քան 700 կղզուց։' },
    { category: 'Food', fact: 'Կանաչ թեյը համարվում է ամենաօգտակար թեյերից մեկը՝ իր բարձր հակաօքսիդանտներով։' },
    { category: 'Science', fact: 'Ալերգիաների մեծ մասը տեղի են ունենում որոշակի սննդի կամ խոտերի հետևանքով։' },
    { category: 'History', fact: 'Առաջին գրքի տպագրությունը կատարվել է Չինաստանում՝ 868 թվականին։' },
    { category: 'Culture', fact: 'Ամերիկյան ռոքը մուտք է գործել 1950-ականներին և մեծ ազդեցություն է ունեցել համաշխարհային երաժշտության վրա։' },
    { category: 'Nature', fact: 'Աշխարհի ամենամեծ ծառը կոչվում է Սեկվոյա և գտնվում է Կալիֆոռնիայում։' },
    { category: 'Space', fact: 'Նեպտուն մոլորակը ստացել է իր անունը հին հռոմեական ծովային աստծուց։' },
    { category: 'Animals', fact: 'Սարդերն ունեն ութ աչքեր, բայց հաճախ քիչ են տեսնում։' },
    { category: 'Sports', fact: 'Կապոեյրան է Բրազիլիայի ավանդական մարտարվեստը, որը համակցված է երաժշտության և պարի հետ։' },
    { category: 'Technology', fact: 'Սմարթֆոններում գործում են հատուկ զգայարաններ, որոնք թույլ են տալիս էկրանի հպման հետ աշխատել։' },
    { category: 'Geography', fact: 'Իսլանդիան ունի 130 գործող հրաբուխներ։' },
    { category: 'Food', fact: 'Չիլի պղպեղը համարվում է ամենատաք պղպեղներից մեկը։' },
    { category: 'Science', fact: 'Մարդու օրգանիզմի մոտ 60%-ը ջուր է։' },
    { category: 'History', fact: 'Առաջին առևտրային թռիչքը իրականացվել է 1914 թվականին ԱՄՆ-ում։' },
    { category: 'Culture', fact: 'Պիզայի աշտարակը աշխարհում հայտնի է իր թեք դիրքով, ինչը վթար էր նախագծի սխալից։' },
    { category: 'Nature', fact: 'Ծովային կրիաները կարող են ապրել մինչև 100 տարի։' },
    { category: 'Space', fact: 'Տիեզերքը տարեցտարի ընդլայնվում է՝ հավասարապես բոլոր կողմերից։' },
    { category: 'Animals', fact: 'Կատուները կարող են խոսել գրեթե 100 տարբեր հնչյուններով։' },
    { category: 'Sports', fact: 'Ֆուտբոլի աշխարհի առաջնությունն անցկացվում է ամեն չորս տարին մեկ։' },
    { category: 'Technology', fact: 'Առաջին սմարթֆոնները հայտնվել են 1992 թվականին՝ IBM ընկերության կողմից։' }
]

const generateFact = () => {
    const category = document.getElementById('category').value;
    let filteredFacts = facts;

    if (category !== 'all') {
        filteredFacts = facts.filter(fact => fact.category === category);
    }
    const randomFact = filteredFacts[Math.floor(Math.random() * filteredFacts.length)];

    const factElement = document.getElementById('fact');
    factElement.textContent = randomFact.fact;
}
const clearFact = () => {
    document.getElementById('fact').textContent = '';
    document.getElementById('category').value = 'all';
}