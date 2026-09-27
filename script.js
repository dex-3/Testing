const characters = [

    [
        'rion-adachi',
        'Rion Adachi',
        '23',
        'Japan',
        'Balanced',
        'Energetic and cheerful freelancer who lives life on her own terms, always ready to face whatever challenge comes her way.'
    ],

    [
        'ayami-karasuma',
        'Ayami Karasuma',
        '24',
        'Japan',
        'Powerful',
        'Cool and collected private investigator who keeps her emotions in check, finding fighting to be another way to test her sharp instincts and skills.'
    ],

    [
        'elsa-von-rietveld',
        'Elsa von Rietveld',
        '24',
        'Netherlands',
        'Powerful',
        'Former soldier turned driver who seeks out fights to relive the combat she left behind, finding a strange enjoyment in the frustration of trying to live as an ordinary person.'
    ],

    [
        'raeda-baxley',
        'Raeda Baxley',
        '24',
        'United Kingdom',
        'Powerful',
        'Dependable bouncer and composed woman who becomes sadistic and lustfully fascinated in a fight, often toying with her opponents rather than simply defeating them.'
    ],

    [
        'alina-engel',
        'Alina Engel',
        '24',
        'Germany',
        'Agile',
        'Perfectionist micro-business owner who strives to be number one in everything she does, turning to fighting whenever her goals remain out of reach.'
    ],

    [
        'nova-meledyne',
        'Nova Meledyne',
        '27',
        'United States of America',
        'Balanced',
        'Warm and mature scientist with a natural “mommy” presence, who surprisingly embraces fighting as another way to satisfy her curiosity and test herself.'
    ],

    [
        'kiyoko-karasu',
        'Kiyoko Karasu',
        'Approx. 1024',
        'Japan (Ancient Era)',
        'Powerful',
        'Princess from another era who finds herself in the modern world, disguising herself as a street vendor while carrying the grace and dignity of her royal upbringing into a life she barely understands.'
    ],

    [
        'yuzu-irumi',
        'Yuzu Irumi',
        '22',
        'Japan',
        'Agile',
        'Claims handler with quiet demeanor but actually caring at same time she keeps others at a distance, finding fighting to be one of the few ways she can truly express herself.'
    ],

    [
        'ro-eun-yeong',
        'Ro-Eun Yeong',
        '24',
        'South Korea',
        'Balanced',
        'Bright and playful woman but works hard as digital architect, seeking the thrill of fighting as for another way to overpass her own hurdle.'
    ],

    [
        'kouka-arisato',
        'Kouka Arisato',
        '25',
        'Japan',
        'Powerful',
        'Straightforward store owner who lives an ordinary life, with a personal passion for fighting.'
    ],

    [
        'claudine-celesta',
        'Claudine Celesta',
        '23',
        'Austria',
        'Agile',
        'Curious journalist who loves uncovering stories, finding that fighting gives her a thrilling perspective beyond the world of reporting.'
    ],

    [
        'fia-andini',
        'Fia Andini',
        '23',
        'Indonesia',
        'Balanced',
        'Straightforward expatriate freelancer living abroad who takes part in fighting as to know what experience the thrill of overthrowing one to each other.'
    ],

    [
        'finley-camelia',
        'Finley Camelia',
        '21',
        'United States of America',
        'Powerful',
        'Repair technician but also cheeky and provocative streamer who loves teasing others, finding fighting another perfect opportunity to show off and get under people’s skin.'
    ],

    [
        'yume-izumi',
        'Yume Izumi',
        '22',
        'Japan',
        'Agile',
        'Clumsy yet deep strong sense of being shrine maiden and finds unexpected courage when she steps into a fight.'
    ],

    [
        'milica-belic',
        'Milica Belic',
        '22',
        'Serbia',
        'Balanced',
        'Creative cosplayer, aspiring wizard, and chemist who brings her eccentric interests into fighting, treating every match as another experiment.'
    ],

    [
        'jasmine-lavenza',
        'Jasmine Lavenza',
        '24',
        'United Kingdom',
        'Powerful',
        'Elegant fashion designer and composed woman with a refined, aristocratic air, who carries herself with grace even when stepping into a fight.'
    ],

    [
        'mayumi-inoue',
        'Mayumi Inoue',
        '23',
        'Japan',
        'Balanced',
        'Playful model with a passion for street racing, bringing the same energetic spirit and competitive drive into her fights.'
    ],

    [
        'ethyln-bernard',
        'Ethyln Bernard',
        '24',
        'Jamaica',
        'Powerful',
        'Charismatic coffee shop owner with a love for her origins culture while bringing her natural for competitive spirit into her fights.'
    ],

    [
        'diane-cerezyna-tsoi',
        'Diane Cerezyna Tsoi',
        '25',
        'Slovakia',
        'Powerful',
        'Disciplined former female soldier, who now works as a delivery driver. The job brings her training, stamina and unwavering determination into her fights as to keep her edge sharp for being a civilian.'
    ],

    [
        'vera-rochester',
        'Vera Rochester',
        '25',
        'Slovenia',
        'Agile',
        'Sophisticated hostess who grew up in a rough environment, developing a calm, mysterious, and dangerously charismatic personality, bringing her composed confidence, sharp instincts, and alluring presence into her fights.'
    ],

    [
        'kira-marinka-orlova',
        'Kira Marinka Orlova',
        '26',
        'Belarus',
        'Balanced',
        'Mature and composed office lady with a calm, professional demeanor, bringing her experience, confidence, and hidden competitive spirit into her fights.'
    ],

    [
        'naomi-tausend',
        'Naomi Tausend',
        '24',
        'Australia (mixed Japan)',
        'Powerful',
        'Cheeky gal who works as a used automotive dealer, bringing her playful confidence, streetwise charm, and competitive attitude into her fights.'
    ],

    [
        'eimi-shimizu',
        'Eimi Shimizu',
        '23',
        'Japan',
        'Agile',
        'Creative and free-spirited street artist with a bold personality and a passion for expressing herself, bringing her artistic flair, confidence, and rebellious spirit into her fights.'
    ],

    [
        'lin-hua-ying',
        'Lin Hua Ying',
        '24',
        'Macau',
        'Powerful',
        'Hardworking woman who owns a local market, balancing her busy everyday life with a strong and determined spirit, bringing her resilience, toughness, and fighting instinct into her fights.'
    ],

    [
        'randall-gray',
        'Randall Gray',
        '25',
        'United States of America',
        'Agile',
        'Straightforward dependable firefighter who lives for the challenge of combat, bringing his strength, courage, and relentless determination into his fights.'
    ],

    [
        'mai-habara',
        'Mai Habara',
        '26',
        'Japan',
        'Balanced',
        'Self-employed adult woman who values her independence and enjoys living life on her own terms, bringing her confidence, resilience, and competitive spirit into her fights.'
    ]

];


const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const grid = $('#grid');
const profile = $('#profile');


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function go(page) {

    $$('.page').forEach(x => {

        x.classList.toggle(
            'active',
            x.id === page
        );

    });


    $$('nav button').forEach(x => {

        x.classList.toggle(
            'active',
            x.dataset.page === page
        );

    });


    if (page === 'character') {

        list();

    }


    scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}


/* =========================================================
   CHARACTER LIST
   ========================================================= */

function list() {

    grid.classList.remove('hidden');

    profile.classList.add('hidden');

    $('#back').classList.add('hidden');

}


/* =========================================================
   OPEN CHARACTER
   ========================================================= */

function openChar(c) {

    grid.classList.add('hidden');

    profile.classList.remove('hidden');

    $('#back').classList.remove('hidden');


    $('#pname').textContent =
        c[1];

    $('#pid').textContent =
        '/' + c[0];

    $('#page').textContent =
        c[2];

    $('#pnat').textContent =
        c[3];

    $('#ptype').textContent =
        c[4];

    $('#pbio').textContent =
        c[5];


    const img =
        $('#pimg');


    $('#placeholder').classList.remove(
        'hidden'
    );


    img.classList.remove(
        'hidden'
    );


    img.src =
        'images/' + c[0] + '.webp';

    img.alt =
        c[1];


    img.onload = function() {

        $('#placeholder').classList.add(
            'hidden'
        );

    };


    img.onerror = function() {

        img.classList.add(
            'hidden'
        );

        $('#placeholder').classList.remove(
            'hidden'
        );

    };


    scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}


/* =========================================================
   CREATE CHARACTER GRID
   ========================================================= */

characters.forEach((c, i) => {

    const b =
        document.createElement('button');


    b.className =
        'card noimg';


    b.type =
        'button';


    b.setAttribute(
        'aria-label',
        'Select ' + c[1]
    );


    b.innerHTML = `

        <img
            src="images/${c[0]}.webp"
            alt="${c[1]}"
            loading="lazy"
        >

        <div class="card-info">

            <small>
                ${String(i + 1).padStart(2, '0')}
            </small>

            <strong>
                ${c[1]}
            </strong>

        </div>

    `;


    const im =
        b.querySelector('img');


    im.onload = function() {

        b.classList.remove(
            'noimg'
        );

    };


    im.onerror = function() {

        im.remove();

    };


    b.onclick = function() {

        openChar(c);

    };


    grid.appendChild(b);

});


/* =========================================================
   NAVIGATION EVENTS
   ========================================================= */

$$('[data-page]').forEach(x => {

    x.addEventListener(
        'click',
        function() {

            go(
                x.dataset.page
            );

        }
    );

});


/* =========================================================
   LOGO
   ========================================================= */

$('#logo').onclick = function() {

    go('summary');

};


/* =========================================================
   BACK BUTTONS
   ========================================================= */

$('#back').onclick = list;

$('#back2').onclick = list;


/* =========================================================
   CURRENT YEAR
   ========================================================= */

$('#year').textContent =
    new Date().getFullYear();
