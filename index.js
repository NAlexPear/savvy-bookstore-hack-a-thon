import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';


var root = document.querySelector('#root');

var State = {
    'books': [
        {
            'id': 1,
            'name': 'Illusive: Friends & Adversaries (The Illusive Series Book 2) ',
            'author': 'Celeste-Marie Lyon',
            'pictureUrl': 'https://images-na.ssl-images-amazon.com/images/I/31cSwirXe3L.jpg',
            'price': 25,
            'sellingPoints': [
                'Lead singers are hot.',
                'Keep your friends close and your enemies closer.'
            ]

        },

        {
            'id': 2,
            'name': "It Ain't Easy Being Cheesy:The Rise and Fall of Chester of the Cat",
            'author': 'Chester Cheetah',
            'pictureUrl': 'https://pbs.twimg.com/profile_images/989986384453644288/uoHCyP8R_400x400.jpg',
            'price': 40,
            'sellingPoints': [
                'Cheetos Fingers.',
                'Cheesy Smell From Book.',
                'Orange Fur Everywhere'
            ]
        },

        {
            'id': 3,
            'name': '1822',
            'author': 'Jose',
            'pictureUrl': 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=3065282&qld=90&l=430&a=-1=1000227096',
            'price': 13,
            'sellingPoints': [
                'History of Brazil',
                'Dom Joao, Napoleon Bonaparte'
            ]
        },


        {
            'id': 4,
            'name': 'Danger! A Catalog of Risks',
            'author': 'Luke Out',
            'pictureUrl': 'https://www.publicdomainpictures.net/pictures/270000/nahled/fear-portrait.jpg',
            'price': 18,
            'sellingPoints': [
                'A study in all the things we have to fear. Terrifying! I nearly jumped out of my seat. -Franklin Delano Roosevelt',
                'Why did it have to include snakes? - Indiana Jones',
                "I ain't afraid of no ghost. Cliffs, though... - Ray Parker Jr. "
            ]

        },

        {
            'id': 5,
            'name': "It's New Year's Eve in New York City. Your best friend died in September, you've been robbed twice, your girlfriend is leaving you, you've lost your job...and the only one left to talk to is the gay burglar you've got tied up in the kitchen... P.S. your cat is dead.",
            'author': 'James Kirkwood',
            'pictureUrl': 'https://images-na.ssl-images-amazon.com/images/I/51p3sJk1lQL.jpg',
            'price': 3,
            'sellingPoints': [
                "With every page the situation gets crazier, zanier, more improbable, also funnier...Kirkwood's bizarre humor comes off, thanks to his ability to throw opposites together, with a stand up comic&#39;s timing. - Publishers Weekly",
                'An extraordinary novel...an ingenious, intriguing, and also moving story about two losers who become friends. It is also a revealing book about burning your bridges behind you. - Sacramento Union',
                'This novel is woven together with such artistic acumen that suspense never ebbs. The plot structure, characterization, dialog and style are virtually flawless. - Chicago Sun - Times'

            ]
        }
    ],
    
    'albums': [
        {
            'id': 1,
            'name': "Atrophy",
            'creator': '3Teeth',
            'pictureUrl': ('https://f4.bcbits.com/img/a2512560373_16.jpg'),
            'price': 3,
            'sellingPoints': [
                "419echo 3TEETH are just on a roll. Atrophy is another hard-hitting track that updates that classic 90's industrial feel for a new generation. Atrophy will get many, many high-volume plays from me.",
            ]
        },
        {
            'id': 2,
            'name': "Love Death Immortality",
            'creator': 'The Glitch Mob',
            'pictureUrl': 'https://consequenceofsound.files.wordpress.com/2014/01/91vaxjhtjjl-_sl1500_.jpg',
            'price': 12.99,
            'sellingPoints': [
                `[The Glitch Mob's] sophomore album returns with the pulsing, headbang-worthy songs that initially commanded their fans' attention. -- Consequence of Sound.net`,
                `In the end, what really made this entire work stick out and worthy of such a high ranking is the creativity that went behind the entire process. Considering this is The Glitch Mob's only second album and they've released it through their own self run label, Glass Air Records, they've created quite a stir. -- Earmilk`,
                `If you liked Drink the Sea, this is an evolution [from the band's initial sound]. There are clear references to their original sound, but The Glitch Mob has successfully branched into a new overall feel. -- Craig Apfelback, Amazon.com`
            ]
        },
        
        {
            'id': 3,
            'name': "The Best of Nickelback",
            'creator': 'Nickelback',
            'pictureUrl': 'https://target.scene7.com/is/image/Target/GUEST_14ad61c3-3789-437e-bd41-0fa0875c1ef5?wid=488&hei=488&fmt=webp',
            'price': 24.99,
            'sellingPoints': [
                "I'm so high, I think this band sounds good. ",
                'Look at the Photograph',
                'All our songs sound the same!'
            ]
        },
        
        
        {
            'id': 4,
            'name': " Horizons/Rapture EP",
            'creator': "The Physics House Band" ,
            'pictureUrl': "https://f4.bcbits.com/img/a1321039771_10.jpg",
            'price': 30	,
            'sellingPoints': [
                "1.ObeliskMonolith 05:12",
                "2.Abraxical Solapse 04:19",
                "3.Hollow Mountain 03:47",
                "4.Teratology 06:25",
                "5.The Spectral Beyond 01:32"
            ]
        },
        {
            'id': 5,
            'name': "Best Ballads",
            'creator': 'Whitesnake',
            'pictureUrl': "https://lastfm-img2.akamaized.net/i/u/ar0/b9354feec4ae0b60287cc3202dc25571",
            'price': 25,
            'sellingPoints': [
                "Say You Love Me",
                "Love Is Blind",
                "Looking for Love",
                "Your Precious Love"
            ]
        }
    ]
};
    
    
    function render(state){
        root.innerHTML = `
        ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;
}

render(State);